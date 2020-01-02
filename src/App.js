import React from 'react'
import { AddPlayers } from './AddPlayers'
import { GameOn } from './GameOn'
import './App.css'

function App() {
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
  return (
    <div className="kannan">
      {players.length ? <GameOn courts={courts} players={players} /> : null}
      <AddPlayers players={players} setPlayers={setPlayers} />
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
  )
}

export default App
