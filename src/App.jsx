import { useState } from 'react'
import Logo from './components/watch-face/logo';

import './App.css'
import Minutes from './components/watch-face/minutes';
import Alert from './components/watch-face/alert';
//import Menu from './components/menu';
//import RelatedContent from './components/related';
import BottomBar from './components/bottombar/bottombar';

function App() {

  return (
    <>
    <div>
        <a href="https://www.github.com/textencoder" target="_blank">
          <Logo className="logo" alt="minutesXM logo"/>
        </a>
      </div>

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
