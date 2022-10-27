import React, { FC } from "react";

import "./header.scss";
import logo from "../../icons/wrench.svg";
import person from "../../icons/ic_person.svg";

const Header: FC = () => {
  return (
    <div className="header">
      <div className="header__block">
        <img className="header__logo" src={logo} alt="logo"/>
        <h1 className="header__heading">Wrench CRM</h1>
      </div>
      <div className="header__profile">
        <img className="profile__person-icon" src={person} alt="person"/>
        <p className="profile__person-description">Имя Фамилия</p>
      </div>
    </div>
  );
};

export default Header;
