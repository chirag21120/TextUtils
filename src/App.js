
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  } 
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212535'
      document.body.style.color = 'white'
      showAlert("Dark mode enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black'
      showAlert("Light mode enabled","success")
    }
  }
  return (
    <>
<Navbar title = "Text Utils2" mode = {mode} toggleMode = {toggleMode} />
<div className="container">
<Alert alert= {alert} />
<TextForm showAlert = {showAlert} head="Enter the text to Analyze" mode = {mode} />

<About/>
</div>
    </>
  );
}

export default App;
