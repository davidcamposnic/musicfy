import { useState, useCallback } from "react";
import "./NewArtistForm.scss";
import { Form, Image } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { noImage } from "../../../assets";

const NewArtistForm = ({ onClose }) => {
  const [image, setImage] = useState(noImage);

  const onDrop = useCallback(async (acceptedFile) => {
    console.log(acceptedFile);
  });

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Form className="new-artist-form">
      <div {...getRootProps()} className="new-artist-form__banner">
        <input {...getInputProps()} />
        <Image src={image} />
      </div>

      <Form.Input name="name" placeholder="Nombre del artista" />
      <Form.Button name="submit" primary fluid>
        Crear artista
      </Form.Button>
    </Form>
  );
};

export default NewArtistForm;
