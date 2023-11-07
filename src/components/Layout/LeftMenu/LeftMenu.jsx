import { useState } from "react";
import "./LeftMenu.scss";
import { Menu } from "semantic-ui-react";
import { Link, useLocation } from "react-router-dom";
import { BasicModal } from "../../Shared";
import { NewArtistForm } from "../../Artist";
import { AddAlbumForm } from "../../Album";
import { AddSongForm } from "../../Song";

const LeftMenu = () => {
  const { pathname } = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState("");
  const [contentModal, setContentModal] = useState(null);

  const isCurrentPage = (route) => {
    return route === pathname;
  };

  const closeModal = () => {
    setShowModal(false);
    setTitleModal("");
    setContentModal(null);
  };

  const openModal = (type) => {
    if (type === "artist") {
      setTitleModal("Nuevo artista");
      setContentModal(<NewArtistForm onClose={closeModal} />);
    }

    if (type === "album") {
      setTitleModal("Nuevo album");
      setContentModal(<AddAlbumForm onClose={closeModal} />);
    }

    if (type === "song") {
      setTitleModal("Nuevo canción");
      setContentModal(<AddSongForm onClose={closeModal} />);
    }

    setShowModal(true);
  };

  return (
    <>
      <div className="left-menu">
        <Menu secondary vertical fluid>
          {/* <Link>
          <Menu.Item />
        </Link> */}
          <Menu.Item
            as={Link}
            to="/"
            name="Inicio"
            icon="home"
            active={isCurrentPage("/")}
          />
          <Menu.Item
            as={Link}
            to="/artists"
            name="Artistas"
            icon="users"
            active={isCurrentPage("/artists")}
          />
          <Menu.Item
            as={Link}
            to="/albums"
            name="Albumes"
            icon="window maximize outline"
            active={isCurrentPage("/albums")}
          />
        </Menu>
        <Menu secondary vertical fluid>
          <Menu.Item
            name="Nueva canción"
            icon="plus"
            link
            onClick={() => openModal("song")}
          />
          <Menu.Item
            name="Nueva album"
            icon="plus"
            link
            onClick={() => openModal("album")}
          />
          <Menu.Item
            name="Nueva artista"
            icon="plus"
            link
            onClick={() => openModal("artist")}
          />
        </Menu>
      </div>
      <BasicModal
        show={showModal}
        onClose={closeModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
};

export default LeftMenu;
