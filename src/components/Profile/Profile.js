
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'


import { Col, Container, Image, Row } from 'react-bootstrap'
import profileImage from "../../images/avatar.jpg"

import {faCoffee, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

import "./Profile.scss"
library.add(faMobileAlt)

const data = [ 
    {
        title: "Edad",
        info: "21",
        icon: "faMobileAlt"
    },
    {
        title: "Dirección",
        info: "Av. Zumbagua y Tocachi Conjuntos Altos de Hierba Buena  Casa F8",
        icon: "faMobileAlt"
    },
    {
        title: "Telefono",
        info: "+593 97 921 6418",
        icon: "faMobileAlt"
    }
]

export default function Profile() {
    return (
        <div className="profile">
           <div className="wallpapper" />
           <div className="dark"/>
           <Container className="box">
               <Row className="info">
                   <Col xs={12} md={4}>
                       <Image src={profileImage} fluid></Image>
                   </Col>
                   <Col xs={12} md={8} className="info__data">
                       <span>¡HELLO WORLD XD!</span>
                       <p>Ricardo Romo Mejia</p>
                       <p>Estudiante Universitario</p>
                       
                       <hr/>
                       <div className="more__info">
                           {data.map((item,index)=>(
                                <div key={index} className="item">
                                    <div className="icon"><FontAwesomeIcon icon={item.icon} /></div>
                                    <p>{item.title}: </p>
                                    <p>{item.info}</p>
                                </div>
                           ))}
                       </div>
                   </Col>
               </Row>
           </Container>
        </div>
    )
}

