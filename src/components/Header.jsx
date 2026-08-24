import React from 'react';
import { HeaderWrapper, Title, Subtitle } from './Header.styles';

function Header({ title = 'Biblioteca Musical' }) {
  return (
    <HeaderWrapper>
      <div>
        <Title>{title}</Title>
        <Subtitle>Tu playlist con la mezcla perfecta de romance, corridos y vibes modernas.</Subtitle>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
