import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './styles.css';

const App: React.FC = ()=>{
  return(
    <Router>
      <div className="App">
        <main className='container'>
            <Routes>
                <Route path = '/' element={<Home />}></Route>
            </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;