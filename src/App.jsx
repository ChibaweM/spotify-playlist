import { useState } from "react";
import spotifyLogo from "./assets/spotify.svg";
import youtubeLogo from "./assets/youtube.svg";
import arrow from "./assets/arrow.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [playlistUrl, setplaylistUrl] = useState("");
  const [tracks, setTracks] = useState([]);

  const handleConvert = (e) => {
    e.preventDefault();
    const playlistId = playlistUrl.split("/").pop();

    axios
      .get("http://localhost:3000/playlist/" + playlistId)
      .then((resp) => {
        setTracks(resp.data);
      })
      .catch((err) => {
        console.error("failed to:", err);
      });

    console.log(tracks);
  };

  return (
    <section>
      <div>
        <h1>Spotify to Youtube Playlist Convertor</h1>
        <a href="https://spotify.com" target="_blank">
          <img src={spotifyLogo} className="logo spotify" alt="spotify logo" />
        </a>

        <img src={arrow} className="logo" alt="arrow" />

        <a href="https://youtube.com" target="_blank">
          <img src={youtubeLogo} className="logo youtube" alt="youtube logo" />
        </a>
      </div>
      <div>
        <form onSubmit={handleConvert}>
          <p>Please paste a link to your playlist</p>
          <p>!Only public playlists please!</p>
          <input
            type="text"
            id="playlistUrl"
            placeholder="Enter your Spotify playlist URL"
            autoComplete="off"
            required
            value={playlistUrl}
            onChange={(e) => setplaylistUrl(e.target.value)}
            name="playlistUrl"
          />
          <div className="card">
            <button type="submit">Convert</button>
          </div>
        </form>
        <ul>
          {tracks}
        </ul>
      </div>
    </section>
  );
}

export default App;
