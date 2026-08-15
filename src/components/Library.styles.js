import styled from 'styled-components';

export const LibraryPanel = styled.section`
  background: ${({ theme }) => theme.colors.panel};
  padding: 18px;
  border-radius: ${({ theme }) => theme.radii.lg};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  transition: box-shadow 0.12s ease;
`;

export const LibraryTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 18px;
  color: ${({ theme }) => theme.colors.accent};
`;

export const SongList = styled.div`
  display: grid;
  gap: 12px;
`;

export const EmptyState = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-style: italic;
  font-size: 0.95rem;
  margin: 0;
`;}},{