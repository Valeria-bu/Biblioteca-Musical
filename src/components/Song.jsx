import React, { Component } from 'react';

class Song extends Component {
  render() {
    const { title, artist, album, duration, cover } = this.props;

    return (
      <article className="song-card">
        <div className="song-cover">{cover}</div>
        <div className="song-info">
          <h2>{title}</h2>
          <p><strong>Artista:</strong> {artist}</p>
          <p><strong>Álbum:</strong> {album}</p>
          <p><strong>Duración:</strong> {duration}</p>
        </div>
        <button className="save-btn">Guardar</button>
      </article>
    );
  }
}

export default Song;
