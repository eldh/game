import React from 'react'
import { Players } from './Players'
import { GameOn } from './GameOn'
import './App.css'
import { filter } from 'ramda'

function App() {
  let [unavailablePlayers, setUnavailablePlayers] = React.useState([])
  let [players, setPlayers] = React.useState([
    'Mattias Lundkvist',
    'Andreas Jonsson',
    'Stefan Eldh',
    'Andreas Eldh',
    'Björn Johansson',
    'Erik Berner-Wik',
    'Lennart Chrona',
    'Abi',
    'Karine Ehlin',
    'Henrik Nässén',
    'Tom Chabousseau',
    'Freddy Jansson',
    'Jonas Strandberg',
    'Filip Dolata',
    'Pelle Linusson',
  ])
  let [courts, setCourts] = React.useState(4)
  let availablePlayers = filter(p => !unavailablePlayers.find(v => v === p), players)

  return (
    <div className="kannan">
      {players.length ? (
        <GameOn courts={courts} players={players} availablePlayers={availablePlayers} />
      ) : null}
      <div className="row c m0">
        <div>Antal banor</div>
        <input
          type="number"
          value={courts}
          onChange={e => {
            let v = e.target.value
            setCourts(() => v)
          }}
        />
      </div>
      <Players
        players={players}
        setPlayers={setPlayers}
        unavailablePlayers={unavailablePlayers}
        setUnavailablePlayers={setUnavailablePlayers}
      />

      <span
        onClick={e => {
          e.preventDefault()
          if (window.confirm('Är du säker?')) {
            setPlayers([])
            setUnavailablePlayers([])
          }
        }}
      >
        Rensa alla spelare
      </span>
    </div>
  )
}

export default App
