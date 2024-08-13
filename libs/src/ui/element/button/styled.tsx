/**
 * 根據按鈕的變體和主題顏色返回按鈕的主題類。
 *
 * @param variant - 按鈕的變體。
 * @param themeColor - 按鈕的主題顏色。
 * @returns 按鈕的主題類。
 */
export const getThemeClass = (variant: string, themeColor: string) => {
  return `button-${variant} button-${variant}-${themeColor}`;
};

/**
 * 根據按鈕的變體返回禁用類。
 * @param variant - 按鈕的變體。
 * @returns 按鈕變體的禁用類。
 */
export const getDisableClass = (variant: string) => {
  if (variant === 'contained') {
    return 'button-container-disable';
  }

  if (variant === 'outlined') {
    return 'button-outline-disable';
  }

  if (variant === 'text') {
    return 'button-text-disable';
  }
};
