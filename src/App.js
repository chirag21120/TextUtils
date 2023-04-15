
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
<Navbar title = "Text Utils2" />
<div className="container">

<TextForm head="Enter the text to Analyze" />
</div>
    </>
  );
}

export default App;
