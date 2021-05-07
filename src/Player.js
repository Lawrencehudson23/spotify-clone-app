import React from 'react';
import Sidebar from './Sidebar'
import Body from './Body';
import Footer from './Footer';

import './Player.scss';

function Player({spotify}) {
  return (
    <div>
      <div className="player">
        <div className="player__body">
          <Sidebar/>
          <Body spotify={spotify}/>
        </div>
      </div>

      <Footer/>
    </div>
  );
}

export default Player;
