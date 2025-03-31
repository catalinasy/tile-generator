import React from 'react';
import { SelectWrapper, StyledSelect } from './styles';

interface SelectProps {
  options: { value: number; label: string }[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  width?: string;
  title?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  width,
  title,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <SelectWrapper>
      {title && <span>{title}</span>}
      <StyledSelect
        value={value}
        onChange={handleChange}
        disabled={disabled}
        width={width}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};
