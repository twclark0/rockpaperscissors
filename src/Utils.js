import React from 'react'

import {
  CrazyFace,
  ThinkingFace,
  SweatSimileFace,
  CryingFace,
  HappyFace,
  TougueOutFace,
  MoneyFace
} from './Moods.js'

export const determineMood = (computerScore, userScore) => {
  const score = computerScore - userScore
  if (score > 0 && score < 3) {
    // +1 and +2
    return HappyFace
  } else if (score >= 3 && score < 6) {
    // 3, 4, 5
    return TougueOutFace
  } else if (score >= 6) {
    // 6+
    return MoneyFace
  } else if (score < 0 && score > -3) {
    // -1, -2
    return ThinkingFace
  } else if (score <= -3 && score > -6) {
    // -3, -4, -5
    return SweatSimileFace
  } else if (score <= -6) {
    // less than -6
    return CryingFace
  } else {
    // 0
    return CrazyFace
  }
}
