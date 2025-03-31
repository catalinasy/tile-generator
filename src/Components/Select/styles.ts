import styled from 'styled-components';

export const StyledSelect = styled.select<{ width?: string }>`
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  background-color: white;
  font-size: 1rem;
  line-height: 1.5;
  color: #111827;
  width: ${({ width }) => width || '100%'};
  transition: border-color 0.2s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z' clip-rule='evenodd' /%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1.25rem;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }

  &:disabled {
    background-color: #f3f4f6;
    cursor: not-allowed;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: inline-block;
  & > span {
    text-align: left;
  }
`;
