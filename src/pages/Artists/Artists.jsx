import { useState, useEffect } from "react";
import { Artist } from "../../api";
import { ListArtists } from "../../components/Artist";
import "./Artists.scss";

const artistController = new Artist();

const Artists = () => {
  const [artists, setArtists] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await artistController.obtainAll();
        setArtists(response);
      } catch (error) {
        console.error(error);
      }
    })(); //función autoejecutable
  }, []);
  return (
    <div className="artists-page">
      <h1>Artistas</h1>
      <ListArtists artists={artists} />
    </div>
  );
};

export default Artists;
