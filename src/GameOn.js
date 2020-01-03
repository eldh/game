import React from 'react'
import { Game } from './Game'
import { makeFirstRound, makeNextRound } from './roundCalc'

let insert = ([i, j], val, arr) => {
  let n = [...arr]
  n[i][j] = val
  return n
}

export function GameOn({ courts, players, availablePlayers }) {
  let [loading, setLoading] = React.useState(false)
  let [rounds, setRounds] = React.useState([])
  // console.log('rounds', JSON.stringify(rounds))
  console.log('rounds.flat()', rounds.flat())

  let makeRound = rounds.length ? makeNextRound : makeFirstRound
  let newRound = () => {
    setLoading(true)
    makeRound({ availablePlayers, courts, players, playedGames: rounds.flat() }).then(round => {
      // console.log('round', round)
      setRounds(r => [...r, round])
    })
  }
  let setGame = (roundIndex, gameIndex, game) =>
    setRounds(r => {
      return insert([roundIndex, gameIndex], game, r)
    })

  return (
    <>
      {rounds.map((round, j) => {
        let roundPlayers = round.reduce(
          (arr, game, i) => [...arr, ...game[0], ...game[1]],

          []
        )

        let resting = players.filter(p => !roundPlayers.includes(p))

        return (
          <div key={j} className="m0">
            <h3>Omgång {j + 1}</h3>
            {round.map((game, i) => (
              <Game
                key={i}
                game={game}
                setResult={({ position, value }) => {
                  let newGame = [...game]
                  if (!newGame[2]) {
                    newGame[2] = [
                      [0, 0],
                      [0, 0],
                    ]
                  }
                  newGame[2][position[0]][position[1]] = value
                  setGame(j, i, newGame)
                }}
                court={i}
              />
            ))}
            {resting.length ? (
              <div>
                <h4>Vilar</h4>
                <div className="m0 row">{resting.join(', ')}</div>
              </div>
            ) : null}
          </div>
        )
      })}
      <button disable={loading.toString()} onClick={newRound}>
        Ny omgång
      </button>
    </>
  )
}
