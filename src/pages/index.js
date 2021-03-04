import * as React from "react"
import Profile from "../components/Profile";
import BasicLayaout from "../layaouts/BasicLayaout";
import AboutMe from "../components/AboutME/AboutMe";

import "./index.scss";

export default function Index (){
  return(
    <BasicLayaout>
      <Profile/>
      <AboutMe/>
    </BasicLayaout>
  );
}
