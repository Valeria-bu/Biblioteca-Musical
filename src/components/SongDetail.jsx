import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { DetailWrapper, BackLink, AlbumImage, TrackList } from './SongDetail.styles';

function SongDetail() {
  const { id } = useParams();
  const { data, loading, error, refetch } = useFetch(
    id ? `https://theaudiodb.com/api/v1/json/2/album.php?m=${id}` : null
  );

  const album = data?.album?.[0] || null;
  const tracks = data?.track || data?.tracks || [];

  if (loading) return <p>Cargando...</p>;
  if (error)
    return (
      <div>
        <p>Hubo un problema al cargar los datos. Intenta nuevamente.</p>
        <button onClick={refetch}>Reintentar</button>
      </div>
    );

  if (!album) return <p>No se encontró el álbum.</p>;

  return (
    <DetailWrapper>
      <BackLink to="/">← Volver</BackLink>
      <h2>{album.strAlbum}</h2>
      <p><strong>Artista:</strong> {album.strArtist}</p>
      <p><strong>Año:</strong> {album.intYearReleased || 'N/A'}</p>
      {album.strAlbumThumb && <AlbumImage src={album.strAlbumThumb} alt={album.strAlbum} />}

      <h3>Canciones</h3>
      {tracks.length === 0 ? (
        <p>No hay canciones listadas.</p>
      ) : (
        <TrackList>
          {tracks.map((t) => (
            <li key={t.idTrack || t.track_id || t.track}>
              {t.strTrack || t.track || 'Título desconocido'}
            </li>
          ))}
        </TrackList>
      )}
    </DetailWrapper>
  );
}

export default SongDetail;
