import "./AvatarUpdate.scss";
import { useCallback, useState } from "react";
import { Image, Input } from "semantic-ui-react";
import { useDropzone } from "react-dropzone";
import { defaultUser } from "../../../assets";
import { User, Storage } from "../../../api";

const user = new User();
const storage = new Storage();

const AvatarUpdate = () => {
  // api
  const { getMe, updateAvatarUser } = user;
  const { photoURL, uid } = getMe();
  const { uploadFile, getUrlFile } = storage;

  // useState
  const [avatarURL, setAvatarURL] = useState(photoURL || defaultUser);

  const onDrop = useCallback(async (acceptedFile) => {
    const file = acceptedFile[0];
    setAvatarURL(URL.createObjectURL(file));

    const response = await uploadFile(file, "avatar", uid);
    const url = await getUrlFile(response.metadata.fullPath);
    await updateAvatarUser(url);
  });
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="avatar-update" {...getRootProps()}>
      <Input {...getInputProps()} />
      <Image src={avatarURL} />
    </div>
  );
};

export default AvatarUpdate;
