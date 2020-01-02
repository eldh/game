import React from 'react'

export function AddPlayers({ players, setPlayers }) {
  return (
    <div>
      <ul>
        {players.map(p => {
          return <li key={p}>{p}</li>
        })}
      </ul>
      <form
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault()
          let name = e.target.querySelector('#name').value
          e.target.querySelector('#name').value = ''
          name && setPlayers(c => [...c, name])
        }}
      >
        <div>Namn</div>
        <input id="name" type="text" />
        <button>Lägg till spelare</button>
      </form>
    </div>
  )
}
