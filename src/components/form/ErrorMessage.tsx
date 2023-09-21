import Typography from '@/components/Typography';

export default function ErrorMessage({ children }: { children: string }) {
  return (
    <div className='flex space-x-1'>
      <Typography
        variant='bt'
        font='cavalier'
        className='!leading-tight text-danger-500'
      >
        {children}
      </Typography>
    </div>
  );
}
