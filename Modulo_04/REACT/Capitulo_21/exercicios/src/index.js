import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ComponenteFuncao from './ComponenteFuncao';
import Contador from "./Contador"
import Hook from "./Hook"
import Home from "./Home"
import About from "./About"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
    </BrowserRouter>
    {/* <div>
      <Home />
      <About />
    </div> */}
    {/* <Hook /> */}
    {/* <Contador numero={50} /> */}
    {/* <ComponenteFuncao /> */}
    {/* <App /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
