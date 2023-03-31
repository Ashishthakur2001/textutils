import React, {useState} from 'react'

export default function TextBox(props) {
    const handleUpClick = ()=>{
       // console.log("upercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converter into Upper case","success")
    }

    const handleLoClick = ()=>{
      // console.log("upercase was clicked" + text);
       let newText = text.toLocaleLowerCase();
       setText(newText)
       props.showAlert("Converter into Lower case","success")
   }

   const handleClearClick = ()=>{
    // console.log("upercase was clicked" + text);
     //let newText = text.to();
     setText("")
     props.showAlert("clear text","success")
 }

    const handleonchange = (event)=>{
       // console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor:props.mode==='dark'?'grey':'light'}} id="Text Area" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert into upercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert into lowecase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}> clear all text</button>
    </div>
    <div className="container">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} word and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
