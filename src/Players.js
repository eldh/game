import React from 'react'
import { remove, findIndex } from 'ramda'

export function Players({ players, setPlayers, unavailablePlayers, setUnavailablePlayers }) {
  let toggleUnavailable = p => {
    setUnavailablePlayers(arr => {
      let i = findIndex(x => x === p, arr)
      let isUnavailable = i > -1
      return isUnavailable ? remove(i, 1, arr) : [...arr, p]
    })
  }
  return (
    <>
      <div>
        {players.map(p => {
          let isAvailable = findIndex(x => x === p, unavailablePlayers) === -1
          return (
            <div className={'row m0 ' + (isAvailable ? '' : 'u')} key={p}>
              {p}
              {isAvailable && <span onClick={() => toggleUnavailable(p)}>ⓧ</span>}
            </div>
          )
        })}
        {unavailablePlayers.length ? (
          <>
            <h3>Ej tillgängliga</h3>
            {unavailablePlayers.map(p => (
              <div className="row m0" key={p}>
                {p}
                {<span onClick={() => toggleUnavailable(p)}>ⓧ</span>}
              </div>
            ))}
          </>
        ) : null}
      </div>
      <form
        autoComplete="off"
        onSubmit={e => {
          e.preventDefault()
          let name = e.target.querySelector('#name').value
          e.target.querySelector('#name').value = ''
          name && setPlayers(c => [...c, name])
        }}
      >
        <div className="row c m0">
          <label>Namn</label>
          <input id="name" type="text" />
        </div>
        <button>Lägg till spelare</button>
      </form>
    </>
  )
}
