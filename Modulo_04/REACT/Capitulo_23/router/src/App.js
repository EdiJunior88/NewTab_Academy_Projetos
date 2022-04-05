import './App.css';
import Home from "./pages/home/home";
import About from "./pages/about/about";

import {
  BrowserRouter as Router, 
  Routes, 
  Route, 
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">User</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<About />}></Route>

          <Route path="/users" element={<User />}></Route>

          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

function User() {
  return (
    <div>
      Exemplo User
      <br />
      <em>Este é um componente USER</em>
    </div>
  );
}

export default App;
