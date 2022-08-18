import React from 'react';
import './App.css';
import { CalendarBase } from './components/CalendarBase';
import { SideMenu } from './components/Sidebar';


function App() {

  return (
    <div className="container">
      <SideMenu/>
      <CalendarBase/>
    </div>
  );
}

export default App;
