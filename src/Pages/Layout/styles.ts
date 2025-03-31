import styled from 'styled-components';

export const Root = styled.div`
  & > h1 {
    text-align: left;
  }
`;

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 12px;
  min-width: 80vw;
  min-height: 80vh;
  border-radius: 8px;
`;
