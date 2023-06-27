import "./App.css"
import { Route, Routes } from "react-router-dom"
import AutoMateLayout from "./components/Layout/AutoMateLayout"
import Home from "./components/Home/Home"
import UserRoute from "./components/Route/UserRoute"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AutoMateLayout />}>
          <Route index element={<Home />} />
          <Route path="route" element={<UserRoute />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
