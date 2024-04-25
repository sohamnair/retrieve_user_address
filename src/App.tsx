import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import SearchUserAddress from './components/SearchUserAddress';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route
            path="/"
            element={<SearchUserAddress />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
