import { useState } from "react";
import spotifyLogo from "./assets/spotify.svg";
import youtubeLogo from "./assets/youtube.svg";
import arrow from "./assets/arrow.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Spotify to Youtube Playlist Convertor</h1>
        <a href="https://spotify.com" target="_blank">
          <img src={spotifyLogo} className="logo" alt="spotify logo" />
        </a>
        <a href="#">
          <img src={arrow} className="logo arrow" alt="arrow" />
        </a>
        <a href="https://youtube.com" target="_blank">
          <img src={youtubeLogo} className="logo youtube" alt="youtube logo" />
        </a>
      </div>
      <div>
        <form>
          <p>Please paste a link to your playlist</p>
          <input
            type="text"
            placeholder="Enter your Spotify playlist URL"
            autoComplete="off"
            required
            name="playlist-url"
          />
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              Convert
            </button>
          </div>
        </form>
      </div>
      <div className="card">
        <h2>{count}</h2>
      </div>
    </>
  );
}

export default App;
