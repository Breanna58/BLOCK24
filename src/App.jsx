import React from "react";
import { useState } from 'react'



const Color = ({ color, setSelectedColor }) => {
  return <div className={color} onClick={() => setSelectedColor(color)}></div>;
};

function App() {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div>
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>

      <div id="colors-list">
        <Color color="yellow" setSelectedColor={setSelectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} />
        <Color color="black" setSelectedColor={setSelectedColor} />
      
        
      </div>
    </div>
  );
}


export default App;

