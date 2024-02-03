import { useRef } from 'react';
import toast from 'react-hot-toast';

export function useLoadingToast() {
  const toastId = useRef<string | null>(null);

  const startLoading = (message = 'Loading...') => {
    if (!toastId.current) {
      toastId.current = toast.loading(message);
    }
  };

  const stopLoading = () => {
    if (toastId.current) {
      toast.dismiss(toastId.current);
      toastId.current = null;
    }
  };

  return { startLoading, stopLoading };
}
