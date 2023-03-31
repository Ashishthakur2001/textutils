//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
//import About from './components/About';
// import {
//   BrowserRouter as Router,
  
//   Route,
  
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');// wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode=== 'light'){
      setmode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode is enabled","success");
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled","success");
    }
  }
  return (
    <>
    
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-4" >
    
      {/* <About/> */}
      {<TextBox showAlert={showAlert} heading="Enter your text below"/>}      
        
      </div>
    
    </>
  );
}

export default App;
