import * as React from "react"
import { Button } from 'react-bootstrap';
import BasicLayaout from "../layaouts/BasicLayaout";
import "./index.scss";

export default function Index (){
  return(
    <BasicLayaout>
      <h1 className="title">Hello WORLD</h1>
      <Button variant="primary"> Click me </Button>
      <Button variant="danger"> DANGER</Button>
    </BasicLayaout>
  );
}
