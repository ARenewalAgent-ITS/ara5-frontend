import * as React from 'react';
import { Accept, FileRejection, useDropzone } from 'react-dropzone';
import {
  Controller,
  get,
  RegisterOptions,
  useFormContext,
} from 'react-hook-form';
import { FiUpload } from 'react-icons/fi';

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
};

export default function FileInput({
  id,
  label,
  validation,
  accept = { 'image/*': ['.jpg', '.jpeg', '.png'] },
  maxFiles = 1,
}: FileInputProps) {
  const {
    control,
    watch,
    getValues,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useFormContext();

  const fieldValue = watch(id);

  React.useEffect(() => {
    if (fieldValue) {
      const newFilesWithPreview = fieldValue.map((file: File) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      );
      setFiles(newFilesWithPreview);
    } else {
      setFiles([]);
    }
  }, [fieldValue]);

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

        setValue(id, acceptedFiles, { shouldValidate: true });

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

  const backgroundClass =
    files.length > 0
      ? 'bg-success-600 hover:bg-opacity-30 active:bg-opacity-40'
      : 'bg-primary-600 hover:bg-opacity-30 active:bg-opacity-40';
  const iconColor = files.length > 0 ? '#86BA73' : '#00B8FF';

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
            <FiUpload
              color={iconColor}
              className={clsxm(
                backgroundClass,
                'bg-opacity-20 md:rounded-md md:p-1.5 md:h-10 md:w-10 h-6 w-6 cursor-pointer rounded p-1'
              )}
            />
          </div>
        )}
      />
    </div>
  );
}
