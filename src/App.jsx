import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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
          <div>
            <input type="Email" autoComplete="on" required name="user" />
          </div>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
        </form>
      </div>
      <div className="footer">
      <p>stuff inside</p>
    </div>
    </>
  );
}

export default App;
