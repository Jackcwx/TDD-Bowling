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

test('score a spare', () => {
  const frames = [
    [5, 5],
    [4, 3],
  ]
  const expected = 21
  const actual = score.scoreFrame(frames)

  expect(actual).toBe(expected)
})

test('score a game with multiple spares', () => {
  const frames = [
    [0, 2],
    [5, 5],
    [3, 3],
    [2, 5],
    [6, 4],
    [0, 2],
    [5, 5],
    [3, 3],
    [2, 5],
    [1, 4],
  ]
  const expected = 71
  const actual = score.scoreFrame(frames)

  expect(actual).toBe(expected)
})

test('score a game with a strike', () => {
  const frames = [
    [10, 0],
    [5, 2],
  ]
  const expected = 24
  const actual = score.scoreFrame(frames)

  expect(actual).toBe(expected)
})

test('score a game with strikes and spares', () => {
  const frames = [
    [6, 4],
    [8, 0],
    [10, 0],
    [2, 7],
    [5, 5],
    [4, 0],
    [10, 0],
    [2, 1],
    [2, 6],
    [4, 4],
  ]
  const expected = 104
  const actual = score.scoreFrame(frames)

  expect(actual).toBe(expected)
})

test('score a game with a double strike', () => {
  const frames = [
    [10, 0],
    [10, 0],
    [5, 0],
  ]
  const expected = 45
  const actual = score.scoreFrame(frames)

  expect(actual).toBe(expected)
})

test('score a full game with a double strike and spares', () => {
  const frames = [
    [1, 2],
    [6, 4],
    [5, 4],
    [10, 0],
    [7, 2],
    [10, 0],
    [10, 0],
    [5, 2],
    [7, 0],
    [4, 4],
  ]
  const expected = 119
  const actual = score.scoreFrame(frames)

  expect(actual).toBe(expected)
})

test('score a full game with a strike on the last frame', () => {
  const frames = [
    [1, 2],
    [6, 4],
    [5, 4],
    [10, 0],
    [7, 2],
    [10, 0],
    [10, 0],
    [5, 2],
    [7, 0],
    [10, 10, 10],
  ]
  const expected = 141
  const actual = score.scoreFrame(frames)

  expect(actual).toBe(expected)
})

test('score a perfect game', () => {
  const frames = [
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 0],
    [10, 10, 10],
  ]
  const expected = 300
  const actual = score.scoreFrame(frames)

  expect(actual).toBe(expected)
})
