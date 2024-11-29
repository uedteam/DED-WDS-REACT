import { on } from 'events';
import { useState, useCallback, ReactNode } from 'react';

interface DialogState {
  isOpen: boolean;
  title: React.ReactNode;
  content: React.ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
}

export const useDialog = ({
  isOpen,
  title,
  content,
  onOpen,
  onClose,
}: {
  isOpen: boolean;
  title: ReactNode;
  content: ReactNode;
  onOpen?: () => void;
  onClose?: () => void;
}) => {
  const [dialogState, setDialogState] = useState<DialogState>({
    isOpen,
    title,
    content,
  });

  const openDialog = useCallback(() => {
    setDialogState({
      isOpen: true,
      title,
      content,
    });
    onOpen && onOpen();
  }, [content, title]);

  const closeDialog = useCallback(() => {
    setDialogState((prev) => ({
      ...prev,
      isOpen: false,
    }));
    onClose && onClose();
  }, []);

  return {
    ...dialogState, // 包含 isOpen, title, content
    openDialog,
    closeDialog,
  };
};
