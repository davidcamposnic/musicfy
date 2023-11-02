import "./Player.scss";
import { Progress, Icon } from "semantic-ui-react";

const Player = () => {
  return (
    <div className="player">
      <Icon name="play circle outline" />
      <Progress progress="value" value={30} total={100} size="tiny" />
    </div>
  );
};

export default Player;
