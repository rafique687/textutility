import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState("rafique");
  const change_test =()=>{
 
    let newtext =text.toUpperCase();
    setText(newtext);
  }
  const whenchange =(event) => {
 
    setText(event.target.value);
    
  }
  const cleartext =()=>{
    setText('');
  }
  const changeTotest =()=>{
    let newtext =text.toLowerCase();
    setText(newtext);
  }


  return (
    <div className={`container bg-${props.mode}`}>
      <h2>{props.title}</h2>
     <textarea  className="form-control" rows="5"  value={text} onChange={whenchange}></textarea>
     <br></br>
     <button className="btn btn-primary me-3" onClick={change_test}>change Upper</button>
     <button className="btn btn-primary  me-3" onClick={changeTotest}>change Lower</button>
     <button className="btn btn-primary  me-3" onClick={cleartext}>Clear Text</button>
     <div className={`container bg-${props.mode}`}>
      <h4 style={props.mystyle}>Total Alpabet = {text.length}</h4>
      <p style={props.mystyle}>
        {text}
      </p>
     </div>
    </div>
  );
}
