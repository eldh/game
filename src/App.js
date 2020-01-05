import React from 'react'
import { Players } from './Players'
import { GameOn } from './GameOn'
import { Results } from './Results'
import { Settings } from './Settings'
import './App.css'
import { filter } from 'ramda'
import createPersistedState from 'use-persisted-state'
import { Tabs, TabList, TabPanels, TabPanel, Tab } from '@reach/tabs'
import '@reach/tabs/styles.css'

let useRoundsState = createPersistedState('rounds')
let usePlayersState = createPersistedState('players')
let useUnavailablePlayersState = createPersistedState('unavailablePlayerss')
let useSettingsState = createPersistedState('settings')

function App() {
  let [unavailablePlayers, setUnavailablePlayers] = useUnavailablePlayersState([])
  let [players, setPlayers] = usePlayersState([])
  let [settings, setSettings] = useSettingsState({
    courts: 4,
    onlyCountOwnPoints: true,
    winBonus: 10,
    roundSamples: 1000,
  })
  let [rounds, setRounds] = useRoundsState([])
  let availablePlayers = filter(p => !unavailablePlayers.find(v => v === p), players)

  return (
    <>
      <h1 style={{ marginLeft: '20px' }}>Steffes kanna</h1>
      <Tabs>
        <TabList>
          <Tab>Spelare</Tab>
          <Tab>Matcher</Tab>
          <Tab>Ställning</Tab>
          <Tab>Inställningar</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Players
              players={players}
              setPlayers={setPlayers}
              unavailablePlayers={unavailablePlayers}
              setUnavailablePlayers={setUnavailablePlayers}
            />
          </TabPanel>
          <TabPanel>
            <GameOn
              settings={settings}
              players={players}
              availablePlayers={availablePlayers}
              rounds={rounds}
              setRounds={setRounds}
            />
          </TabPanel>
          <TabPanel>
            <Results rounds={rounds} players={players} settings={settings} />
          </TabPanel>
          <TabPanel>
            <Settings settings={settings} setSettings={setSettings} />

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
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}

export default App
