import { useState } from 'react'
import DrumButtons from './components/DrumButtons';
import './App.css';

function App() {
  let [audioDescription, changeAudioDescription] = useState("")

  function audioDescriptionChangeHandler (newAudioDescription) {
    // sets the text rendered in id=display according to the name of the sound played after a key is pressed
    changeAudioDescription(newAudioDescription)
  }

  return (
    <div id="drum-machine" className="App">
      <p id="display"> { audioDescription } </p>
      <DrumButtons newAudioPlayed={audioDescriptionChangeHandler} />
    </div>
  );
}

export default App;
