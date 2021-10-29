import { useState } from 'react'
import DrumButtons from './components/DrumButtons';
import './App.css';

function App() {
  let [audioDescription, changeAudioDescription] = useState("")

  function audioDescriptionChangeHandler (newAudioDescription) {
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
