import React from 'react'
import DrumButton from './DrumButton'
import '../styles/DrumButtons.css'

function DrumButtons({ newAudioPlayed }) {
    const drumPadKeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]

    return (
        <div className="drum-buttons">
            {
                drumPadKeys.map(drumKey => <DrumButton key={drumKey} audioChanged={newAudioPlayed} drumPadElement={drumKey} />)
            }
        </div>
    )
}

export default DrumButtons
