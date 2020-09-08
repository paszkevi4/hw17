import React from 'react';
//@ts-ignore
import Timer from './components/Timer.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Timer autostart={false} time={15000} step={1000} />
      <Timer autostart time={36000} step={100} />
      <Timer autostart time={120000} step={2000} />
    </div>
  );
}

export default App;
