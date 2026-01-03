import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Auth from "./Pages/Auth/Auth"
import ForgotPassword from "./Pages/Auth/ForgotPassword"
import VerifyOTP from "./Pages/Auth/VerifyOtp"
import ResetPassword from "./Pages/Auth/ResetPassword"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={"/auth"} element={<Auth />} />
          <Route path={"/forgot-password"} element={<ForgotPassword />} />
          <Route path={"/verify-otp"} element={<VerifyOTP />} />
          <Route path={"/reset-password"} element={<ResetPassword />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
