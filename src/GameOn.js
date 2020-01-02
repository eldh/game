import React from 'react'
import { Game } from './Game'
import { makeFirstRound, makeNextRound } from './roundCalc'

let insert = ([i, j], val, arr) => {
  let n = [...arr]
  n[i][j] = val
  return n
}

export function GameOn({ courts, players }) {
  let [loading, setLoading] = React.useState(false)
  let [rounds, setRounds] = React.useState([
    // [
    //   [
    //     ['Björn Johansson', 'Stefan Eldh'],
    //     ['Karine Ehlin', 'Freddy Jansson'],
    //   ],
    //   [
    //     ['Lennart Chrona', 'Filip Dolata'],
    //     ['Pelle Linusson', 'Andreas Jonsson'],
    //   ],
    //   [
    //     ['Abi', 'Henrik Nässén'],
    //     ['Andreas Eldh', 'Tom Chabousseau'],
    //   ],
    // ],
  ])
  console.log('rounds', JSON.stringify(rounds))

  let makeRound = rounds.length ? makeNextRound : makeFirstRound
  let newRound = () => {
    setLoading(true)
    makeRound({ availablePlayers: players, courts, players }).then(round => {
      console.log('round', round)
      setRounds(r => [...r, round])
    })
  }
  let setGame = (roundIndex, gameIndex, game) =>
    setRounds(r => {
      return insert([roundIndex, gameIndex], game, r)
    })

  return (
    <div>
      {rounds.map((round, j) => {
        return (
          <ul key={j}>
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
          </ul>
        )
      })}
      <button disable={loading.toString()} onClick={newRound}>
        New round
      </button>
    </div>
  )
}
