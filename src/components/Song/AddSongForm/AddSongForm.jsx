import React, { useState, useEffect, useCallback } from "react";
import { Form, Icon } from "semantic-ui-react";
import "./AddSongForm.scss";
import classNames from "classnames";
import { useFormik } from "formik";
import { useDropzone } from "react-dropzone";
import { Album, Song, Storage } from "../../../api";
import { initialValues, validationSchema } from "./AddSongForm.data";
import { map } from "lodash";
import { v4 as uuidv4 } from "uuid";

const albumController = new Album();
const storageController = new Storage();
const songController = new Song();

const AddSongForm = ({ onClose }) => {
  const [songName, setSongName] = useState("");
  const [albumOption, setAlbumOption] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await albumController.obtainAll();
        const result = map(response, (item) => ({
          key: item.id,
          value: item.id,
          text: item.name,
        }));
        setAlbumOption(result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const { file, name, album } = formValue;
        const response = await storageController.uploadFile(
          file,
          "song",
          uuidv4()
        );
        const url = await storageController.getUrlFile(
          response.metadata.fullPath
        );
        await songController.create(name, album, url);
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const onDrop = useCallback(async (acceptedFile) => {
    const file = acceptedFile[0];
    setSongName(file.name);
    formik.setFieldValue("file", file);
    // formik.setFieldValue("name", file.name);
  });

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  return (
    <Form className="add-song-form" onSubmit={formik.handleSubmit}>
      <Form.Input
        name="name"
        placeholder="Nombre de la canción"
        value={formik.values.name}
        onChange={formik.handleChange}
        error={formik.errors.name}
      />
      <Form.Dropdown
        placeholder="Asigna la canción a un album"
        fluid
        search
        selection
        options={albumOption}
        value={formik.values.album}
        onChange={(_, data) => formik.setFieldValue("album", data.value)}
        error={formik.errors.album}
      />
      <div
        {...getRootProps()}
        className={classNames("add-song-form__file", {
          error: formik.errors.file,
        })}
      >
        <input {...getInputProps()} />
        <Icon name="cloud upload" />
        <div>
          <p>
            Arrastra tu canción o haz click <span>aqu</span>
          </p>
          {songName && <p className="song-name">{songName}</p>}
        </div>
      </div>
      <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        Subir canción
      </Form.Button>
    </Form>
  );
};

export default AddSongForm;
