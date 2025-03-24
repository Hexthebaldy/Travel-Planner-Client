import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Chat';
import Plans from './pages/Plans';
import Profile from './pages/Profile';
import './styles.css';

const App: React.FC = ()=>{
  return(
    <Router>
      <div className="App">
        <main className='container'>
            <Routes>
                <Route path = '/chat' element={<Home />}></Route>
                <Route path = '/plans' element={<Plans />}></Route>
                <Route path = '/profile' element={<Profile />}></Route>
            </Routes>
        </main>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;