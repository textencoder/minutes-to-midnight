import "./bottombar.css";
import NewMidnight from "./newmidnight";
import Player from "./player";
import Volume from './volume';

export default function BottomBar() {
  return (
    <div id="bottom">
      <NewMidnight />

      <Player />

      <Volume />
    </div>
  );
}
