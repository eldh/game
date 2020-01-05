import React from 'react'

export function Game({ game, court, setResult }) {
  let handleInput = position => e => {
    let value = parseInt(e.target.value || 0)
    setResult({ position, value })
  }
  return (
    <div className="row m0">
      <div style={{ width: '200px' }} className="m0">
        <div>Bana {court + 1}</div>
        {[game[0], game[1]].map(pair => (
          <div key={pair[0]} style={{ height: '30px' }}>
            {pair[0]}
            <br />
            {pair[1]}
          </div>
        ))}
      </div>
      {game[2].map((set, i) => (
        <div key={i}>
          <div>Set {i + 1}</div>
          {set.map((res, j) => (
            <input key={j} type="number" value={res.toString()} onChange={handleInput([i, j])} />
          ))}
        </div>
      ))}
    </div>
  )
}
