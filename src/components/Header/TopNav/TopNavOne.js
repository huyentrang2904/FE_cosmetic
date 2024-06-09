import React, { useState } from "react";
import { Container } from "reactstrap";
import Link from "next/link";

import SocialIcons from "../../Other/SocialIcons";
import Select from "../../Control/Select";
import { renderContainer } from "../../../common/utils";
import { useRouter } from "next/router";



export default function TopNavOne({ container }) {
  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("ENG");
  const router =useRouter()
  const handleLogout = () => {
    localStorage.clear()
    router.reload();
  }


const DataUser = JSON.parse(localStorage.getItem('userData'))
  return (
    <div className="top-nav .-style-1">
      <div className={renderContainer(container)}>
        <div className="top-nav__wrapper">
          <SocialIcons className="-white" />
          
          <div className="top-nav__wrapper__selectors">
            selec
            <Select
              id="cur"
              options={["USD", "VND", "YEN"]}
              getValue={(val) => setCurrency(val)}
              className="-white -borderless"
            />
            <Select
              id="lang"
              options={["EN", "VI", "JP"]}
              getValue={(val) => setLanguage(val)}
              className="-white -borderless"
            />
            

            <div className="top-nav__auth">
              {DataUser ? (<div className="top-nav__auth">{DataUser.emailAddress}</div>) : <a href ='/login'  className="top-nav__auth">Login/Register</a>}
              {DataUser && (<div className="text-red-500" onClick={handleLogout}>
              Logout
            </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
