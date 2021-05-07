import React, { useEffect } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import "./App.scss";
import Player from "./Player";
import { useDatalayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDatalayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    spotify.getUserPlaylists().then(playlists=>{
      dispatch({
        type:"SET_PLAYLISTS",
        playlists:playlists
      })
    })

    spotify.getPlaylist('37i9dQZF1DX76Wlfdnj7AP').then(response=>{
      dispatch({
        type:"SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      })
    })

    // eslint-disable-next-line
  }, []);

  return (
    // BEM
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
