import { useState } from 'react'
import Logo from './assets/logo';

import './App.css'
import Minutes from './components/minutes';
import Alert from './components/alert';

function App() {

  return (
    <>
    <div id="face">
      <Alert />

      <Minutes />

      <div id="minutes-left">
        minutes left in 2025
    </div>

      <div>
        <a href="https://www.github.com/textencoder" target="_blank">
          <Logo className="logo" alt="minutesXM logo"/>
        </a>
      </div>
      </div>
    </>
  )
}

export default App
