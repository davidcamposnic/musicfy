import "./Profile.scss";
import { useState } from "react";
import { Button } from "semantic-ui-react";
import { User } from "../../api";
import {
  AvatarUpdate,
  DisplayNameUpdateForm,
  EmailUpdateForm,
  PasswordUpdateForm,
} from "../../components/Profile";
import { BasicModal } from "../../components/Shared";

const user = new User();

const Profile = () => {
  // api
  const { getMe } = user;
  const { displayName, email } = getMe();

  // useState
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);
  const [titleModal, setTitleModal] = useState("second");

  // function
  const onCloseModal = () => {
    setShowModal(false);
    setTitleModal("");
    setContentModal(null);
  };
  const openForm = (type) => {
    if (type === "displayName") {
      setTitleModal("Actualizar nombre y apellido");
      setContentModal(<DisplayNameUpdateForm onClose={onCloseModal} />);
    }
    if (type === "email") {
      setTitleModal("Actualizar email");
      setContentModal(<EmailUpdateForm onClose={onCloseModal} />);
    }
    if (type === "password") {
      setTitleModal("Actualizar contraseña");
      setContentModal(<PasswordUpdateForm onClose={onCloseModal} />);
    }
    setShowModal(true);
  };

  return (
    <>
      <div className="profile">
        <h1>Configuración</h1>
        <div className="profile__block">
          <div className="">
            <AvatarUpdate />
            <span>{displayName}</span>
          </div>
          <Button onClick={() => openForm("displayName")}>Actualizar</Button>
        </div>
        <div className="profile__block">
          <span>Email: {email}</span>
          <Button onClick={() => openForm("email")}>Actualizar</Button>
        </div>
        <div className="profile__block">
          <span>Contraseña: *** *** ***</span>
          <Button onClick={() => openForm("password")}>Actualizar</Button>
        </div>
      </div>
      <BasicModal show={showModal} onClose={onCloseModal} title={titleModal}>
        {contentModal}
      </BasicModal>
    </>
  );
};

export default Profile;
