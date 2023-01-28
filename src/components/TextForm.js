import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const clearBox = () => {
    setText("");
  };
  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <form>
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            onChange={handleOnChange}
            rows="8"
          ></textarea>

          <div className="my-3">
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleUpClick}
            >
              Convert to uppercase
            </button>
            <button
              type="reset"
              className="btn btn-success float-end"
              onClick={clearBox}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
      <div className="container my-5">
        <h3>Your text summary</h3>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
    </>
  );
}
