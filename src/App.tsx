import React, {useState} from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { CalendarBase } from './components/CalendarBase';
import { SideMenu } from './components/Sidebar';
import {Day} from "./components/pages/Day"
import {Week} from "./components/pages/Week"
import {Month} from "./components/pages/Month"
import {Year} from "./components/pages/Year"
import {Register} from "./components/register"


function App() {

  const [login, setLogin] = useState(false)

    function onButtonHandler() {
        setLogin(!login)

        // navigate("week")
    }

  return (
    <div className="container">
    
      <Routes>
        <Route path="/" element={<CalendarBase/>}>
            <Route path='/' element={<Register login={login} onClick={onButtonHandler}/>}/>
            <Route path="day" element={<Day/>}/>
            <Route path="week" element={<Week/>}/>
            <Route path="month" element={<Month/>}/>
            <Route path="year" element={<Year/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

  {/* <SideMenu/>
      <CalendarBase/> */}
