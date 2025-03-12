import './App.css'
import Minutes from './components/watch-face/minutes';
import Alert from './components/watch-face/alert';
import BottomBar from './components/bottombar/bottombar';
import TopBar from './components/topbar/TopBar';

function App() {

  return (
    <>
    <TopBar />

    <div id="face">
      <Alert />

      <Minutes />

      <p id="minutes-left">
        minutes left in 2025
      </p>
     
    </div>

    <BottomBar />
    </>
  )
}

export default App
