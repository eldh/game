import React from 'react'

export function Settings({ settings, setSettings }) {
  return (
    <>
      <div className="row c m0">
        <div>Antal banor</div>
        <input
          type="number"
          value={settings.courts}
          onChange={e => {
            let v = e.target.value
            setSettings(s => ({ ...s, courts: v }))
          }}
        />
      </div>
      <div className="row c m0">
        <div>Poäng för vunnet set</div>
        <input
          type="number"
          value={settings.winBonus}
          onChange={e => {
            let v = e.target.value
            setSettings(s => ({ ...s, winBonus: parseInt(v) }))
          }}
        />
      </div>
      <div className="row c m0">
        <div>Antal lottingar per runda</div>
        <input
          type="number"
          style={{ width: '100px' }}
          value={settings.roundSamples}
          onChange={e => {
            let v = e.target.value
            setSettings(s => ({ ...s, roundSamples: parseInt(v) }))
          }}
        />
      </div>
      <div className="row c m0">
        <div>Räkna bara egna poäng</div>
        <input
          type="checkbox"
          checked={settings.onlyCountOwnPoints}
          onChange={e => {
            let v = e.target.checked
            setSettings(s => ({ ...s, onlyCountOwnPoints: v }))
          }}
        />
      </div>
    </>
  )
}
