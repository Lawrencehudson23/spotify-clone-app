import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import {Avatar} from '@material-ui/core';
import {useDatalayerValue} from './DataLayer';
import "./Header.scss";

function Header({ spotify }) {
  const [{user}, dispatch]= useDatalayerValue();


  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search artists, songs, or podcasts" />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
        <h4>{user?.display_name}</h4>

      </div>
    </div>
  );
}

export default Header;
