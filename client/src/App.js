import {Routes, Route } from 'react-router-dom';
import SignUp from './containers/Auth/SignUp';

import './App.css';
import SignIn from './containers/Auth/SignIn';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
