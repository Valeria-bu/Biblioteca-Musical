import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SongCard = styled.article`
  background: ${({ $isArtist }) => ($isArtist ? 'rgba(255, 243, 246, 0.92)' : 'rgba(255, 255, 255, 0.82)')};
  border: 1px solid ${({ $isArtist }) => ($isArtist ? 'rgba(236, 72, 153, 0.25)' : 'rgba(148, 163, 184, 0.18)')};
  border-radius: 18px;
  padding: 16px 18px;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  align-items: center;
  gap: 14px;
  animation: fadeUp 360ms cubic-bezier(.2,.9,.3,1) both;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 28px rgba(15, 23, 42, 0.1);
  }
`;

export const SongCover = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 16px;
  background: ${({ $isArtist }) => ($isArtist ? 'linear-gradient(135deg, #f472b6, #ec4899)' : 'linear-gradient(135deg, #ec4899, #8b5cf6)')};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
  color: white;
  transition: transform 220ms ease;
`;

export const SongInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const SongTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 4px;
  font-size: 1.08rem;
  color: ${({ theme }) => theme.colors.accent};
`;

export const SongText = styled.p`
  margin: 4px 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.92rem;
`;

export const ResultBadge = styled.span`
  display: inline-block;
  margin-bottom: 8px;
  padding: 4px 8px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  background: ${({ $isArtist }) => ($isArtist ? 'rgba(236, 72, 153, 0.12)' : 'rgba(124, 45, 18, 0.12)')};
  color: ${({ $isArtist }) => ($isArtist ? '#be185d' : '#7c2d12')};
`;

export const SongLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover ${SongTitle} {
    color: #ec4899;
  }
`;

export const ActionButton = styled.button`
  border: none;
  background: ${({ disabled, theme }) =>
    disabled ? 'rgba(148, 163, 184, 0.24)' : `linear-gradient(135deg, #7c2d12, #ef7b45)`};
  color: white;
  padding: 9px 14px;
  border-radius: ${({ theme }) => theme.radii.round};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  font-weight: 700;
  transition: transform 180ms ease, box-shadow 180ms ease, opacity 140ms ease;
  box-shadow: ${({ disabled }) => (disabled ? 'none' : '0 10px 18px rgba(124, 45, 18, 0.18)')};

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.7 : 0.97)};
  }

  &:active {
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(1px) scale(0.99)')};
  }
`;
