import React, { useContext } from 'react';
import MyContext from './MyContext';

function LINK() {
    const theme=useContext(MyContext);
  return (
    <div className={theme?"light":"dark"}>
    <p>Geekster</p>
    <div style={{display:'flex', flexDirection:"column"}}>
      <a href="#">Home</a>
      <a href="#">Contact</a>
      <a href="#">Service</a>
    </div>
    </div>
  )
}

export default LINK;