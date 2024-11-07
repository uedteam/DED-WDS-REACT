import React, { useEffect } from 'react';
import { Slider, Button } from '@src/ui';

/**
 * SliderControlProps 介面定義了 SliderControl 組件的屬性。
 *
 * @property {('primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info')} [themeColor] - 主題顏色，可選值包括 'primary'、'secondary'、'tertiary'、'success'、'warning'、'error' 和 'info'。
 * @property {number} initValue - 初始值。
 * @property {boolean} [isDisabled] - 是否禁用。
 * @property {React.ReactNode} [prefix] - 前綴內容。
 * @property {React.ReactNode} [suffix] - 後綴內容。
 * @property {number} [min] - 最小值。
 * @property {number} [max] - 最大值。
 * @property {number} [step] - 步長。
 * @property {string} [unit] - 單位。
 * @property {string} [className] - 自定義樣式類名。
 * @property {() => void} [onClick] - 點擊事件處理函數。
 * @property {(value: number) => void} [onChange] - 值變更事件處理函數。
 */
export interface SliderControlProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  initValue: number;
  isDisabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  className?: string;
  onClick?: () => void;
  onChange?: (value: number) => void;
}

/**
 * SliderControl 組件
 *
 * @param {SliderControlProps} props - 組件的屬性
 * @param {string} [props.themeColor='primary'] - 主題顏色
 * @param {React.ReactNode} [props.prefix] - 前綴
 * @param {React.ReactNode} [props.suffix] - 後綴
 * @param {number} [props.min=0] - 最小值
 * @param {number} [props.max=100] - 最大值
 * @param {number} [props.step=1] - 步長
 * @param {string} [props.unit] - 單位
 * @param {number} [props.initValue] - 初始值
 * @param {boolean} [props.isDisabled] - 是否禁用
 * @param {string} [props.className] - 自定義樣式類名
 * @param {function} [props.onClick] - 點擊事件處理函數
 * @param {function} [props.onChange] - 值改變事件處理函數
 * @param {object} [props.rest] - 其他屬性
 *
 * @returns {JSX.Element} SliderControl 組件
 */
export const SliderControl: React.FC<SliderControlProps> = ({
  themeColor = 'primary',
  prefix = '',
  suffix = '',
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  initValue = 0,
  isDisabled = false,
  className = '',
  onClick = () => ({}),
  onChange = () => ({}),
}: SliderControlProps) => {
  const [value, setValue] = React.useState<number>(0);

  const handleIncreaseClick = () => {
    setValue((prev) => Math.min(prev + step, max));
    onClick && onClick();
  };

  const handleDecreaseClick = () => {
    setValue((prev) => Math.max(prev - step, min));
    onClick && onClick();
  };

  const handleChange = (val: number) => {
    setValue(val);
    onChange && onChange(val);
  };

  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  return (
    <div className={`ded-slider-control ${className}`}>
      <Button
        variant="text"
        themeColor={themeColor}
        isDisabled={isDisabled}
        onClick={handleDecreaseClick}
      >
        {prefix}
      </Button>
      <Slider
        themeColor={themeColor}
        min={0}
        max={100}
        unit={unit}
        step={step}
        isDisabled={isDisabled}
        initValue={value}
        onChange={handleChange}
      />
      <Button
        variant="text"
        themeColor={themeColor}
        isDisabled={isDisabled}
        onClick={handleIncreaseClick}
      >
        {suffix}
      </Button>
    </div>
  );
};
export default SliderControl;
