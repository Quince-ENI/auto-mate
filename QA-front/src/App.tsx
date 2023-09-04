import jwtDecode from 'jwt-decode';
import { ReactElement, useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { getToken } from './api/jwt';
import Home from './components/Home/Home';
import AutoMateLayout from './components/Layout/AutoMateLayout';
import LoginPage from './components/Login/LoginPage';
import Request from './components/Request/Request';
import UserRoute from './components/Route/UserRoute';
import Vehicules from './components/Vehicules/Vehicules';
import { getCarsAsync } from './state/actions/cars.actions';
import { getRoutesAsync } from './state/actions/routes.actions';
import { getSitesAsync } from './state/actions/sites.actions';
import { getConnectedUserAsync } from './state/actions/user.actions';
import { actions, useAutoMateDispatch } from './state/store';

function App(): ReactElement {
  const isInitialized = useRef(false);
  const dispatch = useAutoMateDispatch();
  const jwtToken = getToken();
  useEffect(() => {
    if (!isInitialized.current) {
      dispatch(getCarsAsync());
      dispatch(getRoutesAsync());
      dispatch(getSitesAsync());
      isInitialized.current = true;
    }
    if (jwtToken) {
      const decodeJwt: { email: string } = jwtDecode(jwtToken);
      const userMail = decodeJwt.email;
      dispatch(actions.setIsUserLogged(jwtToken));
      dispatch(getConnectedUserAsync(userMail));
    }
    dispatch(actions.setIsUserLogged(jwtToken));
  }, [dispatch, isInitialized, jwtToken]);
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<AutoMateLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="route" element={<UserRoute />} />
          <Route path="vehicules" element={<Vehicules />} />
          <Route path="request" element={<Request />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
