import { useState, useCallback, ReactNode } from 'react';

interface DialogState {
  isOpen: boolean;
  hasClose?: boolean;
  title: React.ReactNode;
  content: React.ReactNode;
}

export const useDialog = ({
  isOpen,
  title,
  content,
}: {
  isOpen: boolean;
  title: ReactNode;
  content: ReactNode;
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
  }, [content, title]);

  const closeDialog = useCallback(() => {
    setDialogState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  }, []);

  return {
    ...dialogState, // 包含 isOpen, title, content
    openDialog,
    closeDialog,
  };
};
