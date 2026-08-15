import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SearchPanel = styled.section`
  background: ${({ theme }) => theme.colors.panel};
  border-radius: ${({ theme }) => theme.radii.lg};
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

export const SearchHeading = styled.h2`
  margin-top: 0;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.accent};
`;

export const ResultList = styled.div`
  display: grid;
  gap: 12px;
`;

export const SearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  animation: fadeUp 360ms cubic-bezier(.2,.9,.3,1) both;
  transform: translateY(0);

  ${({ added }) =>
    added &&
    `
      animation: pop 260ms ease both;
    `}
`;

export const DetailLink = styled(Link)`
  flex: 1;
`;

export const AddButton = styled.button`
  border: none;
  border-radius: ${({ theme }) => theme.radii.round};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent}, ${({ theme }) => theme.colors.accent2});
  color: white;
  padding: 12px 16px;
  cursor: pointer;
  transition: transform 160ms ease, box-shadow 180ms ease, opacity 0.14s ease;

  &:hover {
    opacity: 0.95;
  }

  &:active {
    transform: translateY(-1px) scale(0.99);
  }
`;
