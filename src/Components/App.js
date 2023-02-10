import { BrowserRouter,Route,Routes } from "react-router-dom";
// import Login from "./Login/Login";
// import Signup from "./SignUp/Signup";
// import Home from "./Home/Home";
import CreateForm from "./UserComponent/CreateForm.js";
import Login from "./Login/Login";
import Signup from "./SignUp/Signup";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          {/* <Route element={<Login/>} path="/"/>
          <Route element={<Signup/>} path="/signup"/> */}
          <Route element={<CreateForm/>} path="/"/>

        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Home /> */}
      {/* <Navbar />
      <CreateForm /> */}
    </div>
  );
}

export default App;
