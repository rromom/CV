
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { Col, Container, Image, Row } from 'react-bootstrap'
import profileImage from "../../images/avatar.jpg"

import { faMobileAlt,faMale,faMapMarkedAlt, faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import "./Profile.scss"

const icons = {faMobileAlt,faMale,faMapMarkedAlt,faEnvelopeOpen}
const data = [ 
    {
        title: "Edad:",
        info: "21 Años",
        icon: icons.faMale
    },
    {
        title: "Dirección:",
        info: "Av. Zumbagua y Tocachi Conjuntos Altos de Hierba Buena  Casa F8",
        icon: icons.faMapMarkedAlt
    },
    {
        title: "Telefono:",
        info: "+593 97 921 6418",
        icon: icons.faMobileAlt
    },
    {
        title: "E-mail:",
        info: "patrixio_1999@hotmail.com / rromom@ups.edu.ec",
        icon: icons.faEnvelopeOpen
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
                                    <p>{item.title} </p>
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

