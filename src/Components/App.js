import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./SignUp/Signup";
// import Home from "./Home/Home";
// import CreateForm from "./CreateForm.js";

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route element={<Login/>} path="/"/>
          <Route element={<Signup/>} path="/signup"/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
