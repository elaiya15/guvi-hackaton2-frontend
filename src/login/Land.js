import React from 'react'
import {Routes,Route } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import Signup from './Signup';
import App from './../App';
import SignIn from './Signin';



const Land = () => {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/" element={<Signup/>}/>
        <Route path="/App" element={<App/>}/>
     </Routes>
    </div>
  )
}

export default Land
