import React from "react";
import Header from "./Header";
import { useDatalayerValue } from "./DataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

import "./Body.scss";
function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDatalayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img
          src="https://i.scdn.co/image/ab67706f000000039249b35f23fb596b6f006a15"
          alt=""
        />
        <div className="body__info__text">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__songs__icons">
          <PlayCircleFilledIcon className="body__songs__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/*List of songs*/}
        {discover_weekly?.tracks.items.map((item, key) => (
          <SongRow key={key} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
