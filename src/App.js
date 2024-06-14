// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('dark')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const removeBodyClasses=()=>{

    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
  }
  
  const newSetColor = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode === 'light')
      {
        setMode('dark');
        showAlert("The Dark mode is Enabled !", "success");
        // document.title='Text Format Tool -Dark Mode';

        // setInterval(() => {
        //   document.title='Intsall Amazing Tool to Display';          
        // }, 1000);
      }else{
        setMode('light');
        showAlert("The White mode is Enabled !", "success");
        // document.title='Text Format Tool -Light Mode';
        // setInterval(() => {
        //   document.title='To install the tool';
        // }, 500);
      }
  }
  return (
    <>
    <Router>
        <Navbar title= "Demo React" about="About Us" mode={mode} toggle={newSetColor}/>
        <Alert alertshow={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Write y our Text to Convert" mode={mode} alertshow={showAlert}/>}/>
            <Route exact path="/About" element={<About mode={mode}/>}/>
            {/* exact can help to match the page url to move forward
            like 
            /users
            /users/home me jana hai toh exact match hona pada */}
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App; 
