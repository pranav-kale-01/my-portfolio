import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './screens/homePage';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []); 

  return (
    <>
      <Router onUpdate={() => window.scrollTo(0,0)}>
        <Routes>
          <Route path="/" exact element={ <HomePage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;
