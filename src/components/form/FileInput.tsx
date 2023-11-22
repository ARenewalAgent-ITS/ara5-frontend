import * as React from 'react';
import { Accept, FileRejection, useDropzone } from 'react-dropzone';
import {
  Controller,
  get,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import { AiOutlinePlus } from 'react-icons/ai';

import Button from '@/components/buttons/Button';
import Typography from '@/components/Typography';
import clsxm from '@/lib/clsxm';
import { FileWithPreview } from '@/types/form/dropzone';

export type FileInputProps = {
  id: string;
  label?: string;
  helperText?: string;
  hideError?: boolean;
  validation?: RegisterOptions;
  accept?: Accept;
  acceptTypes?: string;
  maxFiles?: number;
  className?: string;
};

export default function FileInput({
  id,
  label,
  validation,
  accept = { 'image/*': ['.jpg', '.jpeg', '.png'] },
  maxFiles = 1,
  className,
}: FileInputProps) {
  const {
    control,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const error = get(errors, id);

  const dropzoneRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    error && dropzoneRef.current?.focus();
  }, [error]);

  const [files, setFiles] = React.useState<FileWithPreview[]>(
    getValues(id) || []
  );

  const onDrop = React.useCallback(
    <T extends File>(acceptedFiles: T[], rejectedFiles: FileRejection[]) => {
      if (rejectedFiles && rejectedFiles.length > 0) {
        setValue(id, files ?? [...files]);
        setError(id, {
          type: 'manual',
          message:
            rejectedFiles &&
            `${
              rejectedFiles[0].errors[0].code === 'file-too-large'
                ? 'File tidak boleh lebih dari 1MB'
                : rejectedFiles[0].errors[0].code === 'file-invalid-type'
                ? 'Tipe file tidak didukung'
                : rejectedFiles[0].errors[0].message
            }`,
        });
      } else {
        const acceptedFilesPreview = acceptedFiles.map((file: T) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        );

        setFiles(
          files
            ? [...files, ...acceptedFilesPreview].slice(0, maxFiles)
            : acceptedFilesPreview
        );

        setValue(
          id,
          files
            ? [...files, ...acceptedFiles].slice(0, maxFiles)
            : acceptedFiles,
          { shouldValidate: true }
        );

        clearErrors(id);
      }
    },
    [clearErrors, files, id, maxFiles, setError, setValue]
  );

  React.useEffect(() => {
    return () => {
      () => {
        files.forEach((file) => URL.revokeObjectURL(file.preview));
      };
    };
  }, [files]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept,
    maxFiles,
    maxSize: 1000000,
  });

  return (
    <div className='w-full space-y-1.5 rounded-md'>
      {label && (
        <label htmlFor={id} className='flex space-x-1 mb-3'>
          <Typography weight='semibold' className='text-sm text-typo-primary'>
            {label}
          </Typography>
          {validation?.required && (
            <Typography className='text-danger-600'>*</Typography>
          )}
        </label>
      )}

      <Controller
        control={control}
        name={id}
        rules={validation}
        render={() => (
          <div
            ref={dropzoneRef}
            className='focus:outline-none group'
            {...getRootProps()}
          >
            <input {...getInputProps()} />
            <div
              className={clsxm(
                'w-full cursor-pointer bg-white rounded-md',
                'grid grid-cols-1 items-center',
                error
                  ? 'border-red group-focus:border-red'
                  : 'group-focus:border-typo-primary group-hover:border-typo-primary',
                className
              )}
            >
              <Button leftIcon={AiOutlinePlus}>
                <Typography
                  variant='btn'
                  className='py-1 font-poppins text-white'
                >
                  Tambahkan File
                </Typography>
              </Button>
            </div>
          </div>
        )}
      />
    </div>
  );
}
