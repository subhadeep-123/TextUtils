import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    props.showAlert("Changed to UpperCase", "success");
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    props.showAlert("Changed to LowerCase", "success");
    setText(text.toLowerCase());
  };

  const clearBox = () => {
    props.showAlert("TextBox Cleared", "success");
    setText("");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const fontStyle = {
    fontFamily: ["Courier New", "monospace"],
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          value={text}
          id="myBox"
          style={{
            backgroundColor: props.mode === "dark" ? "grey" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }} // First {} is for js, and inner one is for Object
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

      <div className="container my-3">
        <h2>Preview</h2>
        <div
          className={`container my-3 pt-3 py-3 
        bg-${props.mode === "dark" ? "grey" : "white"} 
        border border-${props.mode === "dark" ? "white" : "grey"} 
        text-${props.mode === "dark" ? "white" : "dark"}`}
          id="preview"
          style={fontStyle}
        >
          {text.length > 0 ? text : "Enter something to preview it here..."}
        </div>
      </div>
    </>
  );
}
