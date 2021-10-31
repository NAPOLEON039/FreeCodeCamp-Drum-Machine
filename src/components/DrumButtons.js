import React, { useEffect } from 'react'
import '../styles/DrumButtons.css'

// drum sounds
import boom from '../sounds/boom.wav'
import clap from '../sounds/clap.wav'
import hihat from '../sounds/hihat.wav'
import kick from '../sounds/kick.wav'
import openhat from '../sounds/openhat.wav'
import ride from '../sounds/ride.wav'
import snare from '../sounds/snare.wav'
import tink from '../sounds/tink.wav'
import tom from '../sounds/tom.wav'


function DrumButtons({ newAudioPlayed }) {
    // app already works with respective button being clicked; adding listener for keyboard key press
    useEffect(() => {
        window.addEventListener("keydown", checkKeyPressed)
        return() => {
            window.removeEventListener("keydown", checkKeyPressed)
        }
    }, [])

    // drum keys and the name of the audio associated with each of them
    const drumPadKeys = [
        {
            trigger: "Q",
            sound: "boom"
        },
        {
            trigger: "W",
            sound: "clap"
        },
        {
            trigger: "E",
            sound: "hihat"
        },
        {
            trigger: "A",
            sound: "kick"
        },
        {
            trigger: "S",
            sound: "openhat"
        },
        {
            trigger: "D",
            sound: "ride"
        },
        {
            trigger: "Z",
            sound: "snare"
        },
        {
            trigger: "X",
            sound: "tink"
        },
        {
            trigger: "C",
            sound: "tom"
        },
    ]

    // runs when a key button is clicked with the mouse
    function keyIsClicked (audioToPlay) {
        let audio = document.querySelector(`audio[data-key="${audioToPlay}"]`)

        // send name of audio to be displayed back to parent component
        newAudioPlayed(audioToPlay)

        // run the audio file
        playAudio(audio)
    }

    // runs when a key is pressed on the keyboard. Checks if it matches with the assigned drum pad keys
    function checkKeyPressed(e) {
        let keyPressed = drumPadKeys.filter(key => key.trigger === e.key.toUpperCase())

        if(keyPressed.length > 0) {
            let audio = document.querySelector(`audio[data-key="${keyPressed[0].sound}"]`)

            newAudioPlayed(keyPressed[0].sound)
            playAudio(audio)
        }
    }

    function playAudio (audioClip) {
        // rewinds audio to the start; since previous audio prevents new audio from running otherwise
        audioClip.currentTime = 0
        audioClip.play()
    }

    return (
        <div className="drum-buttons">
            <div className="drum-btn">
                <button id={drumPadKeys[0].sound} onClick={() => keyIsClicked("boom")} className="btn drum-pad">
                    <audio id={drumPadKeys[0].trigger} data-key="boom" className="clip" src={boom}></audio>
                    { drumPadKeys[0].trigger }
                </button>
            </div>
            <div className="drum-btn">
                <button id={drumPadKeys[1].sound} onClick={() => keyIsClicked("clap")} className="btn drum-pad">
                    <audio id={drumPadKeys[1].trigger} data-key="clap" className="clip" src={clap}></audio>
                    { drumPadKeys[1].trigger }
                </button>
            </div>
            <div className="drum-btn">
                <button id={drumPadKeys[2].sound} onClick={() => keyIsClicked("hihat")} className="btn drum-pad">
                    <audio id={drumPadKeys[2].trigger} data-key="hihat" className="clip" src={hihat}></audio>
                    { drumPadKeys[2].trigger }
                </button>
            </div>
            <div className="drum-btn">
                <button id={drumPadKeys[3].sound} onClick={() => keyIsClicked("kick")} className="btn drum-pad">
                    <audio id={drumPadKeys[3].trigger} data-key="kick" className="clip" src={kick}></audio>
                    { drumPadKeys[3].trigger }
                </button>
            </div>
            <div className="drum-btn">
                <button id={drumPadKeys[4].sound} onClick={() => keyIsClicked("openhat")} className="btn drum-pad">
                    <audio id={drumPadKeys[4].trigger} data-key="openhat" className="clip" src={openhat}></audio>
                    { drumPadKeys[4].trigger }
                </button>
            </div>
            <div className="drum-btn">
                <button id={drumPadKeys[5].sound} onClick={() => keyIsClicked("ride")} className="btn drum-pad">
                    <audio id={drumPadKeys[5].trigger} data-key="ride" className="clip" src={ride}></audio>
                    { drumPadKeys[5].trigger }
                </button>
            </div>
            <div className="drum-btn">
                <button id={drumPadKeys[6].sound} onClick={() => keyIsClicked("snare")} className="btn drum-pad">
                    <audio id={drumPadKeys[6].trigger} data-key="snare" className="clip" src={snare}></audio>
                    { drumPadKeys[6].trigger }
                </button>
            </div>
            <div className="drum-btn">
                <button id={drumPadKeys[7].sound} onClick={() => keyIsClicked("tink")} className="btn drum-pad">
                    <audio id={drumPadKeys[7].trigger} data-key="tink" className="clip" src={tink}></audio>
                    { drumPadKeys[7].trigger }
                </button>
            </div>
            <div className="drum-btn">
                <button id={drumPadKeys[8].sound} onClick={() => keyIsClicked("tom")} className="btn drum-pad">
                    <audio id={drumPadKeys[8].trigger} data-key="tom" className="clip" src={tom}></audio>
                    { drumPadKeys[8].trigger }
                </button>
            </div>
        </div>
    )
}

export default DrumButtons
