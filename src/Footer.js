import React from "react";
import { Grid, Slider } from "@material-ui/core";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatRoundedIcon from "@material-ui/icons/RepeatRounded";
import ShuffleRoundedIcon from "@material-ui/icons/ShuffleRounded";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className='footer__left__albumLogo' src="https://i.pinimg.com/originals/a0/b9/5e/a0b95e9e70b4e76596179711c11a6032.png" alt=""/>
        <div className="footer__left__songInfo">
          <h4>Starboy!</h4>
          <p>The Weeknd</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleRoundedIcon className="footer__center__green" />
        <SkipPreviousIcon className="footer__center__icon" />
        <PlayCircleFilledIcon fontSize="large" className="footer__center__icon" />
        <SkipNextIcon className="footer__center__icon" />
        <RepeatRoundedIcon className="footer__center__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
