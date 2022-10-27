import React, {useEffect, useState} from 'react';
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Menu from "./components/Menu";
import News from "./components/News";
import SearchAddress from "./components/SearchAddress";

import './App.scss';
import burger from "./icons/burger.svg";
import close from "./icons/close.svg";

const  App = () => {

  const [flag, setFlag] = useState(false);
  const [closeButton, setCloseButton] = useState(false)

  const autoResize = () => {
    if ( window.innerWidth < 768 ) {
      setFlag(true)
      setCloseButton(true)
    } else {
      setFlag(false)
      setCloseButton(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', autoResize)
    autoResize();
  }, [])

  const handleClickBurger = () => {
    setFlag(false)
    setCloseButton(true)
  }

  const handleClickCloseButton = () => {
    setFlag(true)
    setCloseButton(false)
  }

  return (
    <div className="App">
        <Header />
        <div className="container">
          {flag ? (
              <img onClick={handleClickBurger} className={flag ? "show burger-menu" : "hide"} src={burger} alt="burger" />
            ) : (
            <div className="menu-container">
              {closeButton &&
                <img onClick={handleClickCloseButton} className="close-button" src={close} alt="close-button"/>
              }
              <Menu />
            </div>
            )
          }
          <div className="content-container">
            <Routes>
              <Route path="/" element={<News />} />
              <Route path="address" element={<SearchAddress />} />
            </Routes>
          </div>
        </div>
    </div>
  );
}

export default App;
