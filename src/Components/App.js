import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "./Login/Login";
import Signup from "./SignUp/Signup";
import Home from "./UserComponent/Home/Home.js";
import Preview from "./UserComponent/Preview/Preview.js";
import Wrapper from "./UserComponent/Wrapper.js";
import AboutUs from "./UserComponent/AboutUs/AboutUs.js";
import Publish from "./UserComponent/Publish/Publish";
import UserEnd from "./UserEnd/UserEnd";
import Response from "./UserComponent/Response/Response";

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
          <Route index element={<Home email={email} />} path="/:email/home" />
          <Route element={<Wrapper email={email} />} path="/user/edit" />
          <Route element={<Preview/>} path="/:email/preview"/>
          <Route element={<AboutUs/>} path="/:email/about"/>
          <Route element={<Publish/>} path="/:email/publish"/>
          <Route element={<UserEnd/>} path="/userend/:id"/>
          <Route element={<Response/>} path="/:email/:id/responses"/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
