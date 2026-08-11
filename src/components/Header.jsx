import React from 'react';
import './Header.css';

function Header({ title }) {
  return (
    <header className="app-header">
      <h1>{title}</h1>
      <p>Tu playlist con la mezcla perfecta de romance, corridos y vibes modernas.</p>
    </header>
  );
}

export default Header;
