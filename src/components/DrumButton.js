import React from 'react'
import '../styles/DrumButton.css'

function DrumButton({ drumPadElement }) {
    return (
        <div className="drum-btn">
            <button className="btn drum-pad">{ drumPadElement }</button>
        </div>
    )
}

export default DrumButton
