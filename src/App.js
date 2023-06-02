
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode,setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212535'
      document.body.style.color = 'white'
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'

    }
  }
  return (
    <>
<Navbar title = "Text Utils2" mode = {mode} toggleMode = {toggleMode} />
<div className="container">

<TextForm head="Enter the text to Analyze" mode = {mode} />

<About/>
</div>
    </>
  );
}

export default App;
