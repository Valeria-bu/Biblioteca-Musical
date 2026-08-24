import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    color-scheme: light;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    min-height: 100%;
  }

  body {
    margin: 0;
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background:
      radial-gradient(circle at top left, rgba(236, 72, 153, 0.15), transparent 25%),
      radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.12), transparent 25%),
      linear-gradient(135deg, ${({ theme }) => theme.colors.background}, ${({ theme }) => theme.colors.backgroundAlt});
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    min-height: 100vh;
  }

  .app {
    max-width: 1200px;
    margin: 0 auto;
    padding: 32px 20px 40px;
  }

  .dashboard {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .columns {
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(260px, 0.9fr);
    gap: 24px;
  }

  .panel {
    background: rgba(255, 255, 255, 0.72);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(148, 163, 184, 0.2);
    border-radius: 22px;
    padding: 22px;
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  }

  .song-card {
    display: flex;
    align-items: center;
    gap: 16px;
    background: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(148, 163, 184, 0.18);
    border-radius: 18px;
    padding: 14px 16px;
    box-shadow: 0 10px 20px rgba(15, 23, 42, 0.04);
  }

  .song-cover {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    background: linear-gradient(135deg, #ec4899, #8b5cf6);
    color: white;
    display: grid;
    place-items: center;
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .song-info {
    flex: 1;
    min-width: 0;
  }

  .save-btn {
    border: none;
    border-radius: 999px;
    background: linear-gradient(135deg, #7c2d12, #ef7b45);
    color: white;
    padding: 10px 14px;
    font-weight: 700;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(124, 45, 18, 0.2);
  }

  button, input, textarea, select {
    font: inherit;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes pop {
    0% { transform: scale(0.96); opacity: 0.6; }
    60% { transform: scale(1.03); opacity: 1; }
    100% { transform: scale(1); }
  }

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(239,123,69,0.28); }
    70% { box-shadow: 0 0 0 8px rgba(239,123,69,0); }
    100% { box-shadow: 0 0 0 0 rgba(239,123,69,0); }
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
