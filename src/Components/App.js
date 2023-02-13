import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Login/Login";
import Signup from "./SignUp/Signup";
import Home from "./UserComponent/Home/Home.js";
import Preview from "./UserComponent/Preview/Preview.js";
import Wrapper from "./UserComponent/Wrapper.js";
import AboutUs from "./UserComponent/AboutUs/AboutUs.js";
function App() {
  const [email, setEmail] = useState("");

  const getEmail = (par) => {
    setEmail(par)
  }

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Login getEmail={getEmail} />} path="/" />
          <Route element={<Signup />} path="/signup" />
          <Route index element={<Home email={email} />} path="/user/home" />
          <Route element={<Wrapper email={email} />} path="/user/createNew" />
          <Route element={<Preview/>} path="/user/preview"/>
          <Route element={<AboutUs/>} path="/user/about"/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
