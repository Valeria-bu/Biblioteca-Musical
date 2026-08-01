import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <h1>{this.props.title}</h1>
        <p>Tu playlist con la mezcla perfecta de romance, corridos y vibes modernas.</p>
      </header>
    );
  }
}

export default Header;
