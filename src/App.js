import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212535";
      document.body.style.color = "white";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light mode enabled", "success");
    }
  };
  return (
    // <BrowserRouter>
    <>
      <Navbar title="Text Utils2" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Alert alert={alert} />
        {/* <Routes> */}
          {/* <Route
            exact path="/"
            element={
              <TextForm
                showAlert={showAlert}
                head="Enter the text to Analyze"
                mode={mode}
              />
            }
          /> */}
            <TextForm
                showAlert={showAlert}
                head="Enter the text to Analyze"
                mode={mode}/>
          {/* <Route exact path="/about" element={<About mode = {mode} />} /> */}
        {/* </Routes> */}
      </div>
      </>
    // </BrowserRouter>
  );
}

export default App;
