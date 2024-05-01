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

test('Score multiple normal frames', () => {
  const frames = [
    [0, 1],
    [5, 4],
    [3, 2],
    [2, 2],
  ]
  const expected = 19
  const actual = score.scoreFrame(frames)

  expect(actual).toBe(expected)
})

test('score a full game of normal frames', () => {
  const frames = [
    [0, 2],
    [5, 4],
    [3, 3],
    [2, 5],
    [1, 4],
    [0, 2],
    [5, 4],
    [3, 3],
    [2, 5],
    [1, 4],
  ]
  const expected = 58
  const actual = score.scoreFrame(frames)

  expect(actual).toBe(expected)
})
