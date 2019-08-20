import React from 'react'

import css from './Moods.module.css'

export const CrazyFace = () => <span role="img" aria-label="emoji" className={css.emoji}>🤪</span> // Neutral

export const ThinkingFace = () => <span role="img" aria-label="emoji" className={css.emoji}>🤔</span> // When I lose

export const SweatSimileFace = () => <span role="img" aria-label="emoji" className={css.emoji}>😅</span> // Losing by a little

export const CryingFace = () => <span role="img" aria-label="emoji" className={css.emoji}>😭</span> // Losing by a lot

export const HappyFace = () => <span role="img" aria-label="emoji" className={css.emoji}>😎</span> // Winning

export const TougueOutFace = () => <span role="img" aria-label="emoji" className={css.emoji}>😝</span> // Winning handsomely

export const MoneyFace = () => <span role="img" aria-label="emoji" className={css.emoji}>🤑</span> // Winning by a ton
