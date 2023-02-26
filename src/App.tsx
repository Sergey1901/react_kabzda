import React from 'react';
import './App.css';
import {Rating} from "./components/Rating";
import {Accordion} from "./components/Accordion";

function App() {
  return (
    <div className="App">
This is App
      <Rating value={3} />
      <Accordion/>
        <Rating value={5} />
    </div>
  );
}


export default App;
