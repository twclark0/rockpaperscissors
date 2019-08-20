import React from 'react'

import css from './App.module.css'
import { Scoreboard } from './Scoreboard'
import { RockPaperScissors } from './RockPaperScissors'

function App() {
  return (
    <div className={css.app}>
      <div className={css.header}>
        <a className={css.title} href="">
          Rock<span role="img">✊</span> Paper<span role="img">✋</span>{' '}
          Scissors<span role="img">✌</span>
        </a>
        <Scoreboard computerScore={0} userScore={0} />
        <RockPaperScissors />
      </div>
    </div>
  )
}

export default App
