import logo from './logo.svg';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';
import { createContext, useState } from 'react';

export const giftContext = createContext('gift')

function App() {
  const [house, setHouse] = useState(1)
  const seretGift = "golden-ring"
  return (
    <giftContext.Provider value="1000 taka">
        <div className="App">
    <button onClick={()=> setHouse(house + 1)}>GrandFather House</button>
      <GrandFather house={house} seretGift={seretGift}></GrandFather>
      
    </div>
    </giftContext.Provider>
  );
}

export default App;
