import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateForm from "./UserComponent/CreateForm/CreateForm.js";
import Login from "./Login/Login";
import Signup from "./SignUp/Signup";
import Home from "./UserComponent/Home/Home.js";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");

  console.log(email)
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
          <Route element={<CreateForm email={email} />} path="/user/createNew" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
