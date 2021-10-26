import React from 'react'
import '../styles/DrumButton.css'

function DrumButton({ audioChanged, drumPadElement }) {
    return (
        <div className="drum-btn">
            <button onClick={() => audioChanged("yo")} className="btn drum-pad">{ drumPadElement }</button>
        </div>
    )
}

export default DrumButton
