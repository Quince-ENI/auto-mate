import "./App.css"
import { Navigate, Route, Routes } from "react-router-dom"
import AutoMateLayout from "./components/Layout/AutoMateLayout"
import Home from "./components/Home/Home"
import UserRoute from "./components/Route/UserRoute"
import LoginPage from "./components/Login/LoginPage"
import { useSelector } from "react-redux"
import { selectUser } from "./state/selector"

function App() {
  const user = useSelector(selectUser)

  if (user) {
    // eslint-disable-next-line prettier/prettier
    <Navigate to="/login" replace={true} />
  }

  return (
    <div className="App">
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<AutoMateLayout />}>
          <Route index element={<Home />} />
          <Route path="route" element={<UserRoute />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App