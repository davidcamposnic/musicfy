import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Album as AlbumController } from "../../api";
import { Loader } from "semantic-ui-react";
import { AlbumInfo } from "../../components/Album";
import "./Album.scss";

const albumController = new AlbumController();

const Album = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await albumController.getAlbum(id);
        setAlbum(response);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [id]);

  if (!album) {
    return (
      <Loader active inline="centered" size="large">
        Cargando
      </Loader>
    );
  }
  return (
    <div className="album-page">
      <AlbumInfo album={album} />
    </div>
  );
};

export default Album;
