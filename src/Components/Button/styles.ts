import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: solid 2px ${(props) => props.theme.colors.medium};
  color: ${(props) => props.theme.colors.dark};
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  display: flex;
  justify-content: space-between;

  &:hover {
    border: solid 2px ${(props) => props.theme.colors.medium};
    box-shadow: 4px 4px 10px ${(props) => props.theme.colors.medium};
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.medium};
    cursor: not-allowed;
  }
`;
