import React from 'react'

import '../styles/DrumButton.css'

function DrumButton({ source, audioId, audioChanged, drumPadElement }) {
    function keyIsPressed () {
        playAudio(audioId)
        audioChanged(audioId)
    }

    function playAudio (audioClip) {
        let audio = new Audio(`../sounds/${audioClip}.wav`)

        audio.currentTime = 0
        audio.play()
    }

    return (
        <div className="drum-btn">
            <button id={audioId} onClick={() => keyIsPressed()} className="btn drum-pad">
                <audio id={drumPadElement} className="clip" src={source}></audio>
                { drumPadElement }
            </button>
        </div>
    )
}

export default DrumButton
