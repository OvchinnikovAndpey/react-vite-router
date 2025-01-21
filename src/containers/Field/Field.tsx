import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Field.module.scss';
import { FieldProps } from './types';

export const Field = React.forwardRef<HTMLInputElement, FieldProps>(({
  value,
  label,
  name,
  type = 'text',
  placeholder,
  onChange,
  className,
  disabled,
  required,
  error,
  helperText
}, ref) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(event.target.value);
    onChange?.(event);
  };

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  return (
    <div className={clsx(styles.field, className)}>
      <label className={styles.field__label} htmlFor={name}>
        {label}
        {required && <span className={styles.field__required}>*</span>}
      </label>
      
      <input
        ref={ref}
        id={name}
        type={type}
        name={name}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        className={clsx(styles.field__input, {
          [styles['field__input--error']]: error
        })}
      />

      {helperText && (
        <span className={styles.field__helper}>{helperText}</span>
      )}
      
      {error && (
        <span className={styles.field__error}>{error}</span>
      )}
    </div>
  );
});

Field.displayName = 'Field';
