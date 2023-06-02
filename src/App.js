
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
<Navbar title = "Text Utils2" />
<div className="container">

<TextForm head="Enter the text to Analyze" />

<About/>
</div>
    </>
  );
}

export default App;
