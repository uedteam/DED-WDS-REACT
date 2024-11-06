import React, { useState } from 'react';
import { CheckIcon } from '@src/assets';
import { getThemeClass } from './styled';

/**
 * CheckboxProps 介面定義了 Checkbox 元件的屬性。
 *
 * @property {('primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info')} [themeColor] - 選擇框的主題顏色。
 * @property {string} [className] - 自訂的 CSS 類名。
 * @property {{ label: string; value: string }[]} [options] - 選項的陣列，每個選項包含標籤和值。
 * @property {string[]} [initValue] - 初始選中的值。
 * @property {('row' | 'column')} [direction] - 選項排列的方向，可以是 'row' 或 'column'。
 * @property {(value: string[]) => void} [onChange] - 當選中的值改變時的回調函數。
 */
export interface CheckboxProps {
  themeColor?:
    | 'none'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  dataSource?: { label: string; value: string }[];
  initValue?: string[];
  direction?: 'row' | 'column';
  className?: string;
  onChange?: (value: string[]) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  themeColor = 'primary',
  direction = 'row',
  initValue = [],
  dataSource = [],
  className,
  onChange,
  ...rest
}: CheckboxProps) => {
  const [currOptions, setCurrOptions] = useState<string[]>(initValue);

  const handleChange = (value: string, checked: boolean) => {
    const updatedOptions = checked
      ? [...currOptions, value]
      : currOptions.filter((target) => target !== value);

    setCurrOptions(updatedOptions);
    if (onChange) {
      onChange(updatedOptions);
    }
  };

  return (
    <div
      className={`checkbox-container ${
        direction === 'row'
          ? 'checkbox-container-row'
          : 'checkbox-container-column'
      }`}
    >
      {dataSource.map((option) => (
        <label
          key={option.value}
          htmlFor={option.value}
          className={`checkbox ${className}`}
        >
          <input
            {...rest}
            className="checkbox-input"
            id={option.value}
            value={option.value}
            checked={currOptions.includes(option.value)}
            onChange={(e) => handleChange(option.value, e.target.checked)}
            name="option"
            type="checkbox"
          />
          <div
            className={`checkbox-icon ${getThemeClass(
              currOptions.includes(option.value) ? 'checked' : 'unchecked',
              themeColor
            )}`}
          >
            {currOptions.includes(option.value) && <CheckIcon />}
          </div>
          <span className="checkbox-text">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
