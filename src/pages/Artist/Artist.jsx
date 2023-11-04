import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Artist as ArtistController, Album } from "../../api";
import { ArtistBanner } from "../../components/Artist";
import { Slider } from "../../components/Shared";
import "./Artist.scss";

const artistController = new ArtistController();
const albumController = new Album();

const Artist = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await artistController.getArtist(id);
        setArtist(response);
      } catch (error) {
        throw error;
      }
    })();
  }, [id]);

  useEffect(() => {
    (async () => {
      try {
        const response = await albumController.getAlbumsByArtist(id);
        setAlbums(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  if (!artist) return null;

  return (
    <div className="artist-page">
      <ArtistBanner image={artist.image} name={artist.name} />
      <div className="artist-page__slider">
        <h2>Albumes</h2>
        <Slider data={albums} basePath="albums" />
      </div>
      <div className="artist-page__slider">
        <h2>Canciones</h2>
        {/* lista de canciones */}
      </div>
    </div>
  );
};

export default Artist;
