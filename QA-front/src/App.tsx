import { ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import AutoMateLayout from './components/Layout/AutoMateLayout';
import LoginPage from './components/Login/LoginPage';
import UserRoute from './components/Route/UserRoute';

function App(): ReactElement {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<AutoMateLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="route" element={<UserRoute />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
