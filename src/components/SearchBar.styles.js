import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px 12px;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: 1px solid rgba(15, 23, 42, 0.06);
  background: ${({ theme }) => theme.colors.surface};
  outline: none;
  font-size: 14px;
  transition: box-shadow 0.15s ease;

  &:focus {
    box-shadow: 0 6px 18px rgba(16, 24, 40, 0.08);
  }
`;

export const SearchButton = styled.button`
  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.radii.sm};
  border: none;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accent2});
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: transform 180ms ease, opacity 140ms ease;

  &:hover {
    opacity: 0.95;
  }

  &:active {
    transform: translateY(1px) scale(0.995);
  }
`;
