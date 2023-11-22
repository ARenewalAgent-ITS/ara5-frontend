import 'yet-another-react-lightbox/styles.css';

import * as React from 'react';
import { IoClose } from 'react-icons/io5';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';

import IconButton from '@/components/buttons/IconButton';
import Typography from '@/components/Typography';
import { FileWithPreview } from '@/types/form/dropzone';

type FilePreviewProps = {
  file: FileWithPreview;
  deleteFile?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    file: FileWithPreview
  ) => void;
  readOnly?: boolean;
};

export default function FilePreview({
  file,
  deleteFile,
  readOnly,
}: FilePreviewProps) {
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    deleteFile?.(e, file);
  };

  const [isOpen, setIsOpen] = React.useState(false);

  const zoomRef = React.useRef(null);

  return (
    <li
      key={file.name}
      className='w-full flex items-center gap-2 px-3 py-1 ring-1 ring-inset ring-typo-inline rounded-xl border border-success-600 bg-success-600'
    >
      <Typography variant='c12' className='flex-1 text-sm truncate'>
        {file.name}
      </Typography>

      {!readOnly && (
        <IconButton
          icon={IoClose}
          onClick={handleDelete}
          iconClassName='text-black-200'
        />
      )}

      <Lightbox
        open={isOpen}
        slides={[{ src: file.preview }]}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
        plugins={[Zoom]}
        zoom={{ ref: zoomRef }}
        close={() => setIsOpen(false)}
      />
    </li>
  );
}
