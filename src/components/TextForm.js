import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleOnChange = (event)=>{
    // console.log("Handle Changed");
    setText(event.target.value);
  }
  const handleUpClick = (e)=>{
    e.preventDefault();
    // console.log("Upper Case Was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = (e)=>{
    e.preventDefault();
    let newText = text.toLowerCase();
    setText(newText);
  }

  const speak = (e)=>{
    e.preventDefault();
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const clear = (e)=>{
    e.preventDefault();
   let newText = '';
   setText(newText);
  }

  return (
    <>
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.head}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            placeholder="Enter Your text here"
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button  className="btn btn-primary mx-2" onClick={handleUpClick}>
          UpperCase
        </button>
        <button  className="btn btn-primary mx-2" onClick={handleLowClick}>
          LowerCase
        </button>
        <button  className="btn btn-primary mx-2" onClick={speak}>
          Speak
        </button>
        <button  className="btn btn-primary mx-2" onClick={clear}>
          Clear
        </button>
      </form>
    </div>
    <div className="container my-3">
      <h3>Your Text summary</h3>
      <p>{text.split(" ").length} words, {text.length} charachters</p>
    </div>
    </>
  );
}