import React from 'react'
import { Game } from './Game'
import { makeFirstRound, makeNextRound } from './roundCalc'
import { remove } from 'ramda'

let insert = ([i, j], val, arr) => {
  let n = [...arr]
  n[i][j] = val
  return n
}

export function GameOn({ settings, players, availablePlayers, rounds, setRounds }) {
  let [loading, setLoading] = React.useState(false)
  // console.log('rounds', JSON.stringify(rounds))

  let makeRound = rounds.length ? makeNextRound : makeFirstRound
  let newRound = async () => {
    setLoading(true)
    let round = await makeRound({
      ...settings,
      availablePlayers,
      players,
      playedGames: rounds.flat(),
    })
    setRounds(r => [...r, round])
  }
  let setGame = (roundIndex, gameIndex, game) =>
    setRounds(r => {
      return insert([roundIndex, gameIndex], game, r)
    })

  let rebootLastRound = async () => {
    let makeRound = rounds.length > 1 ? makeNextRound : makeFirstRound
    let round = await makeRound({
      ...settings,
      availablePlayers,
      players,
      playedGames: rounds.flat(),
    })
    setRounds(rounds => {
      let newRounds = [...rounds]
      newRounds[rounds.length - 1] = round
      return newRounds
    })
  }
  let removeRound = i => () => {
    setRounds(rounds => {
      // let newRounds = [...rounds]
      let res = remove(i, 1, rounds)
      console.log('i,res', i, res)

      return res
    })
  }
  return (
    <>
      {rounds.map((round, j) => {
        let roundPlayers = round.reduce((arr, game, i) => [...arr, ...game[0], ...game[1]], [])

        let resting = players.filter(p => !roundPlayers.includes(p))

        return (
          <div key={j} className="m0">
            <h3>
              Omgång {j + 1}
              {j === rounds.length - 1 ? <span onClick={rebootLastRound}>↪</span> : null}
              {j !== rounds.length - 1 ? <span onClick={removeRound(j)}>ⓧ</span> : null}
            </h3>
            {round.map((game, i) => (
              <Game
                key={i}
                game={game}
                setResult={({ position, value }) => {
                  let newGame = [...game]
                  // if (!newGame[2]) {
                  //   newGame[2] = [
                  //     [0, 0],
                  //     [0, 0],
                  //   ]
                  // }
                  newGame[2][position[0]][position[1]] = parseInt(value)
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
