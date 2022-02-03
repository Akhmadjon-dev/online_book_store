import {Routes, Route, Navigate } from 'react-router-dom';
import SignUp from './containers/Auth/SignUp';

import './App.css';
import SignIn from './containers/Auth/SignIn';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(state => state.auth.user);
  const isAuthenticated = useSelector(state => state.auth?.isAuthenticated);
  
  console.log(user, 'appjs user');
  console.log(isAuthenticated, 'appjs isAuthenticated');
  
  if(isAuthenticated) {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
      </div>
    );
  }else{
    return (
      <div className="app">
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/sign-in"/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;
