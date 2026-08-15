import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, #be123c);
  color: white;
  padding: 20px 24px;
  border-radius: 14px;
  margin-bottom: 18px;
  box-shadow: 0 12px 30px rgba(25, 23, 23, 0.12);
  animation: fadeUp 420ms cubic-bezier(.2,.9,.3,1) both;
`;

export const Title = styled.h1`
  margin: 0 0 4px;
  font-size: 1.6rem;
  font-weight: 800;
`;

export const Subtitle = styled.p`
  margin: 0;
  opacity: 0.9;
`;
