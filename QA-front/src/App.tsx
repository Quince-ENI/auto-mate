import { ReactElement, useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import AutoMateLayout from './components/Layout/AutoMateLayout';
import LoginPage from './components/Login/LoginPage';
import UserRoute from './components/Route/UserRoute';
import { getCarsAsync } from './state/actions/cars.actions';
import { getRoutesAsync } from './state/actions/routes.actions';
import { useAutoMateDispatch } from './state/store';

function App(): ReactElement {
  const isInitialized = useRef(false);
  const dispatch = useAutoMateDispatch();
  useEffect(() => {
    if (!isInitialized.current) {
      dispatch(getCarsAsync());
      dispatch(getRoutesAsync());
      isInitialized.current = true;
    }
  }, [dispatch, isInitialized]);
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
