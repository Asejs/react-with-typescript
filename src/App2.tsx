import { useState } from 'react'
import './App.css';
// useState hook - responsible for storing data inside of a component

function App() {
  const [number, setNumber] = useState(5);

  const changeNumber = () => {
    setNumber(10)
  }


  return (
    <div className="App">


    </div>
  );
}

export default App;
