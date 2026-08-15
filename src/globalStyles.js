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
    background: radial-gradient(1200px 600px at 10% 10%, rgba(255, 249, 242, 1) 0%, transparent 20%),
      linear-gradient(135deg, ${({ theme }) => theme.colors.background}, ${({ theme }) => theme.colors.backgroundAlt});
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
