import React from 'react'
import { getScore } from './scoreCalc'

export function Results({ rounds, players, settings }) {
  let results = getScore({ settings, playedGames: rounds.flat(), players })
  // console.log('results', results)

  return (
    <div>
      {results.map(([p, s]) => {
        return (
          <div key={p} className="row">
            {p}: {s}
          </div>
        )
      })}
    </div>
  )
}
