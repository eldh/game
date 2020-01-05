/* eslint-disable no-loop-func, prefer-spread */
// require('babel-register')
const r = require('ramda')

const noOfGames = (games, player) => {
  return gamesForPlayer(games, player).length
}

const gamesForPlayer = r.curry((games, player) => {
  return r.filter(g => {
    return r.contains(player, r.flatten(g))
  }, games)
})

const scoreForGame = ({ settings, game }) => {
  if (!game[2]) return [0, 0]
  return r.reduce(
    (score, set) => {
      const winner = set[0] > set[1] ? 0 : 1
      score[winner] = score[winner] + settings.winBonus

      if (settings.onlyCountOwnPoints) {
        score[0] = score[0] + set[0]
        score[1] = score[1] + set[1]
      } else {
        score[0] = score[0] + set[0] - set[1]
        score[1] = score[1] + set[1] - set[0]
      }
      // console.log('score', score)

      return score
    },
    [0, 0],
    game[2]
  )
}

const scoreForPlayer = ({ settings, games, player }) => {
  let gameCount = noOfGames(games, player)
  return gameCount
    ? r.reduce(
        (sum, game) => {
          // console.log(game, 'game')
          const team = r.contains(player, game[0]) ? 0 : 1
          const score = scoreForGame({ settings, game })
          // console.log(sum + score[team])
          return sum + score[team]
        },
        0,
        gamesForPlayer(games, player)
      ) / gameCount
    : 0
}

const sortPlayersByScore = ({ settings, games, players }) => {
  let scoredPlayers = players.map(player => [player, scoreForPlayer({ settings, games, player })])

  return r.sort(([, s1], [, s2]) => s2 - s1, scoredPlayers)
}

export const getMatchesPlayed = ({ players, playedGames }) =>
  players.map(p => noOfGames(playedGames, p))

export const getScore = ({ settings, playedGames, players }) =>
  sortPlayersByScore({ settings, games: playedGames, players })
