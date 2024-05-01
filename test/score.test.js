import { test, expect } from 'vitest'
import * as score from '../score.js'

test('tests setup working', () => {
  expect(true).toBeTruthy()
})

test('Scores a gutterball frame', () => {
  const frames = [[0, 0]]
  const expected = 0
  const actual = score.scoreFrame(frames)

  expect(actual).toBe(expected)
})

test('Scores a single frame', () => {
  const frames = [[1, 3]]
  const expected = 4
  const actual = score.scoreFrame(frames)

  expect(actual).toBe(expected)
})
