import styled from 'styled-components';

export const AppWrapper = styled.div`
  max-width: 1100px;
  margin: 20px auto;
  padding: 28px;
`;

export const AppMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;
