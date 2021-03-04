import * as React from "react"
import Profile from "../components/Profile";
import BasicLayaout from "../layaouts/BasicLayaout";

import "./index.scss";

export default function Index (){
  return(
    <BasicLayaout>
      <Profile/>
      <h1 className="title">HOME</h1>
    </BasicLayaout>
  );
}
