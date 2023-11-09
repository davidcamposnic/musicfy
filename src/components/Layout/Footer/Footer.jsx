import "./Footer.scss";
import { Image, Input, Icon } from "semantic-ui-react";
import { Player } from "../../Shared";
import { usePlayer } from "../../../hooks";

const Footer = () => {
  const { song, miniature, volume, setVolume } = usePlayer();
  return (
    <div className="footer">
      <div className="footer__left">
        {miniature && <Image src={miniature} />}
        {song && <span>{song.name}</span>}
      </div>
      <div className="footer__center">
        <Player />
      </div>
      <div className="footer__right">
        <Input
          label={<Icon name="volume up" />}
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={(_, data) => setVolume(Number(data.value))}
        />
      </div>
    </div>
  );
};

export default Footer;
