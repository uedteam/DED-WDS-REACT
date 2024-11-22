import { useState, useCallback } from 'react';

interface DialogState {
  isOpen: boolean;
  title: string;
  content: React.ReactNode;
}

export const useDialog = () => {
  const [dialogState, setDialogState] = useState<DialogState>({
    isOpen: false,
    title: '',
    content: null,
  });

  const openDialog = useCallback((title: string, content: React.ReactNode) => {
    setDialogState({
      isOpen: true,
      title,
      content,
    });
  }, []);

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
