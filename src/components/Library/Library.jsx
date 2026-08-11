import Song from "../Song/Song";
import "./styles.css";

function Library({ songs }) {
  return (
    <section className="library">
      <h2>📚 Mi biblioteca</h2>

      {songs.length === 0 ? (
        <p className="empty-library">
          Todavía no tienes canciones en tu biblioteca.
        </p>
      ) : (
        songs.map((song) => (
          <Song
            key={song.id}
            title={song.title}
            artist={song.artist}
            album={song.album}
            duration={song.duration}
            cover={song.cover}
          />
        ))
      )}
    </section>
  );
}

export default Library;