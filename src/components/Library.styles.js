import styled from 'styled-components';

export const LibraryPanel = styled.section`
  background: rgba(255, 255, 255, 0.75);
  padding: 20px;
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 22px;
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  transition: box-shadow 0.12s ease;
`;

export const LibraryTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 18px;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 1.5rem;
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
  padding: 10px 0;
`;
