import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Details from './components/routes/Details';
import Home from './components/routes/Home';
import { retrieveData } from './redux/reducer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveData());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
