import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
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
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          onChange={handleOnChange}
          rows="8"
        ></textarea>

        <div className="my-3">
          <button className="btn btn-success" onClick={handleUpClick}>
            Uppercase
          </button>
          <button className="btn btn-success mx-1" onClick={handleLowClick}>
            Lower
          </button>
          <button className="btn btn-success float-end" onClick={clearBox}>
            Clear
          </button>
        </div>
      </div>
      <div className="container my-5">
        <h3>Your text summary</h3>
        <p>
          {text.split(" ")[0] === "" ? 0 : text.split(" ").length} words and{" "}
          {text.length} characters
        </p>
        <p>
          {" "}
          {text.split(" ")[0] === "" ? 0 : 0.008 * text.split(" ").length}{" "}
          Minutes read
        </p>
      </div>
      <div className="container">{text}</div>
    </>
  );
}
