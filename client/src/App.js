import {Routes, Route } from 'react-router-dom';
import SignUp from './containers/Auth/SignUp';

import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
