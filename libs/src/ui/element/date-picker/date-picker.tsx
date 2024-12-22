import 'vanillajs-datepicker/css/datepicker-foundation.css';
import React, { useEffect, useRef, forwardRef } from 'react';
import { DatepickerOptions } from 'vanillajs-datepicker/Datepicker';
import { Datepicker, DateRangePicker } from 'vanillajs-datepicker';
import { Input } from '@src/ui';
import { CalendarIcon } from '@src/assets';

interface DatePickerProps {
  value?: string;
  placeholder?: string;
  range?: boolean;
  options?: Partial<DatepickerOptions>;
  className?: string;
  onChange?: (date: string) => void;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    { value = '', placeholder = '', range, options, className = '', onChange },
    ref
  ) => {
    const datepickerRef = useRef<Datepicker | DateRangePicker | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      const inputElement =
        (ref as React.RefObject<HTMLInputElement>)?.current || inputRef.current;

      if (inputElement) {
        if (range) {
          console.log('range');

          datepickerRef.current = new DateRangePicker(inputElement, {
            ...options,
            container: document.body,
          });
        } else {
          console.log('single');

          datepickerRef.current = new Datepicker(inputElement, {
            ...options,
            container: document.body,
          });
        }

        inputElement.addEventListener('changeDate', (e: any) => {
          if (onChange) {
            onChange(e.target.value);
          }
        });
      }

      return () => {
        datepickerRef.current?.destroy();
      };
    }, [options, onChange, ref, range]);

    return (
      <Input
        ref={ref || inputRef}
        placeholder={placeholder}
        initValue={value}
        prefix={<CalendarIcon />}
        type="text"
        onChange={() => ({})}
        className={className}
      />
    );
  }
);

export default DatePicker;
