import { useState, useEffect } from "react";
import { Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Artist } from "../../../api";
import "./AlbumInfo.scss";

const artistController = new Artist();

const AlbumInfo = ({ album }) => {
  const { name, image, artist } = album;
  const [artistData, setArtistData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await artistController.getArtist(artist);
        setArtistData(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [album]);

  return (
    <div className="album-info">
      <Image src={image} alt={name} />
      <div>
        <h1>{name}</h1>
        {artistData && (
          <p>
            De:{" "}
            <Link style={{ color: "#c5c5c5" }} to={`/artists/${artistData.id}`}>
              {artistData.name}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default AlbumInfo;
