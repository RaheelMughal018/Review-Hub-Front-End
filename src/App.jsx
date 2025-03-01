import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Dashboard,
  Login,
  Signup,
  TwoFA,
  ChartComponent,
  Contacto,
  MainPage,
  Forgot,
  Amazon,
} from "./components";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    // <ToastContainer toastStyle={{ backgroundColor: "black" }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/YT" element={<MainPage />} />
        <Route path="/AMZ" element={<Amazon />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/twofa" element={<TwoFA />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/graph" element={<ChartComponent />} />
      </Routes>
    </BrowserRouter>
    // </ToastContainer>
  );
};

export default App;
