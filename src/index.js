import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavBar from './components/nav-bar/index.js';
import Footer from './components/footer/index.js'
import reportWebVitals from './reportWebVitals';
import Routes from "./routes";
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from "./context/useUserContent"


ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <UserProvider>
          <NavBar />
            <Routes/>
          <Footer />
        </UserProvider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); 
