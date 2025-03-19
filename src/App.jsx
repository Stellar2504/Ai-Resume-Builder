import { useState } from 'react';
import './App.css';
import { Button } from "@/components/ui/button";
import Navigation from './custom/Navigation';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className=''>

    <Navigation/>
    <Home/>
    </div>
    </>
  )
}

export default App
