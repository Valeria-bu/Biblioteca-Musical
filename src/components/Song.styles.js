import styled from 'styled-components';

export const SongCard = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  border-radius: 18px;
  padding: 16px 18px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  align-items: center;
  gap: 14px;
  animation: fadeUp 360ms cubic-bezier(.2,.9,.3,1) both;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  }
`;

export const SongCover = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, #ff9aa2, #a21caf);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  color: white;
  transition: transform 220ms ease;
`;

export const SongInfo = styled.div`
  flex: 1;
`;

export const SongTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 6px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.accent};
`;

export const SongText = styled.p`
  margin: 4px 0;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.95rem;
`;

export const ActionButton = styled.button`
  border: none;
  background: ${({ disabled, theme }) =>
    disabled ? 'rgba(148, 163, 184, 0.24)' : `linear-gradient(135deg, #ec4899, #8b5cf6)`};
  color: white;
  padding: 8px 12px;
  border-radius: ${({ theme }) => theme.radii.round};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  font-weight: 600;
  transition: transform 180ms ease, box-shadow 180ms ease, opacity 140ms ease;

  &:hover {
    opacity: ${({ disabled }) => (disabled ? 0.7 : 0.95)};
  }

  &:active {
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(1px) scale(0.99)')};
  }
`;
