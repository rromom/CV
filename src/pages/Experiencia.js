import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import BasicLayaout from '../layaouts/BasicLayaout'
import "./Experiencia.scss"

export default function Experiencia() {
    return (
        <BasicLayaout MenuColor="#000">
           <Container className="exp">

               <Row>
                   <Col className="exp__form">
                   <h3>Formación</h3>
                   </Col>
                   <Col className="exp__exp">
                   <h3>Experiencia</h3>
                   </Col>
               </Row>
               

           </Container>
        </BasicLayaout>
    )
}
