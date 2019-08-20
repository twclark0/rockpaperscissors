import React, { useState, useEffect } from 'react'

import css from './Scoreboard.module.css'
import { determineMood } from './Utils.js'

export const Scoreboard = ({ computerScore, userScore }) => {
  const [{ userColor, computerColor }, updateColors] = useState({
    userColor: '000000b5',
    computerColor: '000000b5'
  })
  const [mood, updateMood] = useState(null)
  useEffect(() => {
    updateMood(determineMood(computerScore, userScore))
    if (computerScore > userScore) {
      updateColors({
        userColor: '630D1D',
        computerColor: '09463B'
      })
    } else if (computerScore < userScore) {
      updateColors({
        userColor: '09463B',
        computerColor: '630D1D'
      })
    } else {
      updateColors({
        userColor: '000000b5',
        computerColor: '000000b5'
      })
    }
  }, [computerScore, userScore])
  return (
    <div className={css.scoreboardContainer}>
      <h3 className={css.score}>Score</h3>
      <div className={css.textContainer}>
        <div>
          <span
            className={css['scoretText--span']}
            style={{ color: `#${computerColor}` }}>
            {' '}
            {computerScore}
          </span>
          <p className={css.scoreText}>robot</p>
        </div>
        <p style={{ fontSize: '90px', margin: '0' }}> - </p>
        <div>
          <span
            className={css['scoretText--span']}
            style={{ color: `#${userColor}` }}>
            {userScore}
          </span>
          <p className={css.scoreText}>you</p>
        </div>
      </div>
      {mood}
    </div>
  )
}
