import React from 'react'

import { Col, Container, Image, Row } from 'react-bootstrap'
import BasicLayaout from '../layaouts/BasicLayaout'
import {formacion} from "../utils/formacion"

import "./Experiencia.scss"

export default function Experiencia() {
    return (
        <BasicLayaout MenuColor="#000">
           <Container className="exp">

               <Row>
                   <Col>
                   <h3>Formación</h3>
                   <hr/>
                   {formacion.map((item,index)=>(
                   <div>
                       <Row>
                       <Col sm={4}>
                           {item.fecha}
                       </Col>
                       <Col sm={8}>
                           {item.title}
                           <hr/>
                           {item.institucion}
                       </Col>
                       </Row>
                       <hr/>
                    </div>
                   ))}
                   </Col>
                   <Col>
                   <h3>Experiencia</h3>
                   <hr/>
                   </Col>
               </Row>
               

           </Container>
        </BasicLayaout>
    )
}
