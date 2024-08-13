import { getBorderClass, getHintClass } from './styled';
import { getSizeClass } from '@src/utils/style';
import { ChangeEventHandler, ReactNode } from 'react';

export interface InputProps {
  label?: ReactNode;
  className?: string;
  type: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  isDisabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  hint?: { error: string; description: string };
  value?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

/**
 * Input 組件。
 * @component
 * @param {Object} props - 組件的屬性。
 * @param {string} props.label - 輸入框的標籤。
 * @param {string} [props.className] - 自定義的 CSS 類名。
 * @param {string} [props.type='text'] - 輸入框的類型。
 * @param {string} [props.placeholder='請輸入...'] - 輸入框的佔位符。
 * @param {string} [props.size='medium'] - 輸入框的大小。
 * @param {React.ReactNode} [props.prefix] - 輸入框前綴圖標。
 * @param {React.ReactNode} [props.suffix] - 輸入框後綴圖標。
 * @param {boolean} [props.isDisabled=false] - 是否禁用輸入框。
 * @param {Object} [props.hint={ error: '', description: '' }] - 提示信息。
 * @param {string} props.hint.error - 錯誤提示信息。
 * @param {string} props.hint.description - 描述提示信息。
 * @param {string} props.value - 輸入框的值。
 * @param {function} props.onChange - 當輸入框值改變時的回調函數。
 * @param {Object} [props.rest] - 其他屬性。
 */
export const Input: React.FC<InputProps> = (props: InputProps) => {
  const {
    label,
    className,
    type = 'text',
    placeholder = '請輸入...',
    size = 'medium',
    prefix,
    suffix,
    isDisabled = false,
    hint = { error: '', description: '' },
    value,
    onChange,
    ...rest
  } = props;

  return (
    <div className={`input-container ${className}`}>
      {label && (
        <label className={`${isDisabled ? 'input-disable' : 'input-label'}`}>
          {label}
        </label>
      )}
      <div
        className={` 
          input-group
          ${getSizeClass('component', size)} 
          ${isDisabled ? 'input-disable' : getBorderClass(hint)}
          ${className ? className : ''}`}
      >
        {prefix && <div className={getSizeClass('icon', size)}>{prefix}</div>}
        <input
          value={value}
          type={type}
          className={`${
            isDisabled ? 'input-disable' : `input ${getSizeClass('text', size)}`
          }`}
          {...rest}
          onChange={onChange}
          placeholder={placeholder}
        />
        {suffix && <div className={getSizeClass('icon', size)}>{suffix}</div>}
      </div>
      <small
        className={`input-hint ${
          isDisabled ? 'input-disable' : getHintClass(hint)
        }`}
      >
        {hint.error.length > 0 ? hint.error : hint.description}
      </small>
    </div>
  );
};

export default Input;
