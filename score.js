export function scoreFrame(frames) {
  let total = 0
  frames.forEach((frame, i) => {
    let frameScore = frame[0] + frame[1]
    if (spare(frame)) frameScore = frame[0] + frame[1] + frames[i + 1][0]
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
