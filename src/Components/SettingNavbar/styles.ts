import styled from 'styled-components';

export const Container = styled.div`
  padding: 8px 12px;
  border: solid 1px ${(props) => props.theme.colors.medium};
  border-radius: 8px;
  box-shadow: 4px 4px 10px ${(props) => props.theme.colors.medium};
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 2rem;
`;

export const ColorSelected = styled.div<{ background: string }>`
  height: 1rem;
  width: 1rem;
  background: ${(props) => props.background};
  border: solid 1px ${(props) => props.theme.colors.medium};
  border-radius: 4px;
`;
