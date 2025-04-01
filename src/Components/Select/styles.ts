import styled from 'styled-components';

export const StyledSelect = styled.select<{ width?: string }>`
  padding: 0.75rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.medium};
  border-radius: 0.375rem;
  background-color: white;
  font-size: 1rem;
  line-height: 1.5;
  color: ${(props) => props.theme.colors.dark};
  width: ${({ width }) => width || '100%'};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.medium};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.medium};
  }

  &:disabled {
    background-color: #f3f4f6;
    cursor: not-allowed;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  & > span {
    text-align: left;
    padding-left: 4px;
  }
`;
