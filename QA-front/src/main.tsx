import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { GoogleOAuthProvider } from "@react-oauth/google"
import "./index.css"
import StoreProvider from "./state/StoreProvider"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="491141015061-5paogai8633rhob8mall6o2p1c7umlqv.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter>
        <StoreProvider>
          <App />
        </StoreProvider>
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>,
)
