'use client';

import { useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onClose: () => void;
}

const Toast = ({
  message,
  type = 'success',
  duration = 3000,
  onClose,
}: ToastProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show toast after a brief delay for smooth animation
    const showTimer = setTimeout(() => setIsVisible(true), 100);

    // Hide toast after duration
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
      // Wait for exit animation before calling onClose
      setTimeout(onClose, 300);
    }, duration);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <Check size={16} />;
      case 'error':
        return <X size={16} />;
      default:
        return <Check size={16} />;
    }
  };

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return 'border-green-500/30 bg-green-500/10 text-green-100';
      case 'error':
        return 'border-red-500/30 bg-red-500/10 text-red-100';
      default:
        return 'border-blue-500/30 bg-blue-500/10 text-blue-100';
    }
  };

  return (
    <div
      className={cn(
        'fixed right-4 bottom-4 z-50 flex items-center gap-3 rounded-xl border px-4 py-3',
        'shadow-lg backdrop-blur-xl transition-all duration-300 ease-out',
        'transform',
        isVisible
          ? 'translate-y-0 scale-100 opacity-100'
          : 'translate-y-2 scale-95 opacity-0',
        getTypeStyles()
      )}
    >
      <div className='flex-shrink-0'>{getIcon()}</div>
      <span className='text-sm font-medium'>{message}</span>
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(onClose, 300);
        }}
        className='ml-2 flex-shrink-0 rounded-full p-1 transition-colors hover:bg-white/10'
      >
        <X size={14} />
      </button>
    </div>
  );
};

export default Toast;
