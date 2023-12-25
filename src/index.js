import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './pages/App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './pages/Login';
import Catalog from "./pages/catalog/Catalog";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path={"/login"} element={<Login/>} />
            <Route path={"/catalog"} element={<Catalog/>} />
            <Route path={"/Filmheros"} element={<App/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
