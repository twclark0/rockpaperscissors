import React from 'react'

import css from './RockPaperScissors.module.css'

export const RockPaperScissors = () => {
  return (
    <div className={css.rockpaperscissorsContainer}>
      <div className={css.userChoice} onClick={() => {}}>
        <div className={css.userText}>
          Rock
          <span role="img">✊</span>
        </div>
      </div>
      <div className={css.userChoice}>
        <div className={css.userText}>
          Paper<span role="img">✋</span>{' '}
        </div>
      </div>
      <div className={css.userChoice}>
        <div className={css.userText}>
          Scissors<span role="img">✌</span>
        </div>
      </div>
    </div>
  )
}
