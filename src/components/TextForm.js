import React, { useState } from "react";
export default function TextForm(props) {

  const[setMode, setNewMode] = useState("Dark Mode");
  function Modes(props){
    if(setMode === "Dark Mode"){
      document.body.style.background = "#404040";
      document.body.style.color = "white";
      setNewMode("Light Mode");
    }
    else{
      document.body.style.background = "white";
      document.body.style.color = "black";
      setNewMode("Dark Mode");
    }
  }

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    document.title = "Mr. GTx GaMeRz - Upper Case";
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    document.title = "Mr. GTx GaMeRz - Home";
  };
  const [text, setText] = useState(" ");

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    document.title = "Mr. GTx GaMeRz - Lower Case";
  };
  const clearText = () => {
    setText("");
    document.title = "Mr. GTx GaMeRz - ClearText";
  };


  return (
    <>
<nav className="navbar navbar-expand-lg bg-primary navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className='nav-item my-2'>  
        <div className="form-check form-switch" onClick={Modes}>
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{setMode}</label>
</div>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> 
      </ul>
      
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={clearText}>
          Clear Text
        </button>
      
      </div>
      <div className="container my-3">
        <h1>Your Text here</h1>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
