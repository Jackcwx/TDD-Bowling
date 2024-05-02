export function scoreFrame(frames) {
  let total = 0
  frames.forEach((frame, i) => {
    let frameScore = frame[0] + frame[1]
    if (frame.length === 3) frameScore += frame[2]
    if (frames[i + 1] !== undefined) {
      if (doubleStrike(frame, frames[i + 1]) && frames[i + 2] !== undefined) {
        frameScore = frame[0] + frames[i + 1][0] + frames[i + 2][0]
      } else if (spare(frame)) {
        frameScore = frame[0] + frame[1] + frames[i + 1][0]
      } else if (strike(frame, frames[i + 1])) {
        frameScore = frame[0] + frames[i + 1][0] + frames[i + 1][1]
      }
    }
    total += frameScore
  })
  return total
}

function spare(frame) {
  if (frame[0] === 10) return false
  return frame[0] + frame[1] === 10
}

function strike(frame) {
  return frame[0] === 10
}

function doubleStrike(frame, nextFrame) {
  if (frame[0] === 10 && nextFrame[0] === 10) return true
  return false
}
