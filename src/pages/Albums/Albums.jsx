import { useState, useEffect } from "react";
import { Album } from "../../api";
import "./Albums.scss";
import { ListAlbums } from "../../components/Album";

const albumController = new Album();

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await albumController.obtainAll();
        setAlbums(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="albums-page">
      <h1>Albumes</h1>
      <ListAlbums albums={albums} />
    </div>
  );
};

export default Albums;
