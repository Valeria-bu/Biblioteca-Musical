import React, { Component } from 'react';
import Header from './components/Header';
import Song from './components/Song';
import './App.css';

class App extends Component {
  componentDidMount() {
    console.log('La app se ha cargado correctamente.');
  }

  render() {
    const songs = [
      { title: 'Como la Flor', artist: 'Selena', album: 'Amor Prohibido', duration: '3:05', cover: '🎵' },
      { title: 'Bailando', artist: 'Enrique Iglesias', album: 'Insomniac', duration: '4:00', cover: '🎶' },
      { title: 'Ella Baila Sola', artist: 'Eslabon Armado', album: 'Tu Veneno Mortal', duration: '3:33', cover: '💖' }
    ];

    return (
      <div className="app">
        <Header title="Biblioteca Musical" />
        <main className="song-list">
          {songs.map((song) => (
            <Song
              key={song.title}
              title={song.title}
              artist={song.artist}
              album={song.album}
              duration={song.duration}
              cover={song.cover}
            />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
