import React from 'react'

export function Game({ game, court, setResult }) {
  let handleInput = position => e => {
    let value = e.target.value
    setResult({ position, value })
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <div>Bana {court + 1}</div>
          </td>
          {[game[0], game[1]].map(pair => (
            <td key={pair[0]}>
              <div>{pair.join(' & ')}</div>
            </td>
          ))}
        </tr>
        {game[2].map((set, i) => (
          <tr key={i}>
            <td>
              <div>Set {i + 1}</div>
            </td>
            {set.map((res, j) => (
              <td key={j}>
                <input type="number" value={res} onChange={handleInput([i, j])} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
