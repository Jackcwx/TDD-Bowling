export function scoreFrame(frames) {
  let total = 0
  frames.forEach((frame, i) => {
    let frameScore = frame[0] + frame[1]
    total += frameScore
  })
  return total
}

function spare(frame) {
  if (frame[0] === 10) return false
  return frame[0] + frame[1] === 10
}

function strike(frame) {}

function doubleStrike(frame, nextFrame) {}
