import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState('Enter Text Here');
  const handleOnChange = (event)=>{
    console.log("Handle Changed");
    setText(event.target.value);
  }
  const handleUpClick = (e)=>{
    e.preventDefault();
    console.log("Upper Case Was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  return (
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
        <button  className="btn btn-primary" onClick={handleUpClick}>
          UpperCase
        </button>
      </form>
    </div>
  );
}
