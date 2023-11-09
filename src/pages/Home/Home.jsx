import { Button } from "semantic-ui-react";
import { Artist, Album, Song } from "../../api";
import { Slider } from "../../components/Shared";
import { bannerHome } from "../../assets";
import "./Home.scss";
import { useEffect, useState } from "react";

const artistController = new Artist();
const albumController = new Album();
const songController = new Song();

const Home = () => {
  const [artists, setArtists] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await artistController.getLastArtist();
        setArtists(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await albumController.getLastAlbum();
        setAlbums(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await songController.getLastSongs();
        let data = [];
        for await (const item of response) {
          const song = item;
          const resultAlbum = await albumController.getAlbum(item.album);
          song.image = resultAlbum.image;
          data.push(song);
        }
        setSongs(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="home-page">
      <div
        className="home-page__banner"
        style={{ backgroundImage: `url(${bannerHome})` }}
      />
      <div className="home-page__slider">
        <h2>Últimos artistas</h2>
        {artists && <Slider data={artists} basePath="artists" />}
      </div>
      <div className="home-page__slider">
        <h2>Últimos albumes</h2>
        {albums && <Slider data={albums} basePath="albums" />}
      </div>
      <div className="home-page__slider">
        <h2>Últimos canciones</h2>
        {songs && <Slider data={songs} song />}
      </div>
    </div>
  );
};

export default Home;
