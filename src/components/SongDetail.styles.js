import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const DetailWrapper = styled.section`
  background: ${({ theme }) => theme.colors.surface};
  padding: 20px;
  border-radius: 14px;
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 18px;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 600;
`;

export const AlbumImage = styled.img`
  width: 100%;
  max-width: 320px;
  border-radius: 8px;
  display: block;
  margin: 12px 0;
`;

export const TrackList = styled.ol`
  padding-left: 18px;
`;
