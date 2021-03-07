
import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt,faMapMarkedAlt, faEnvelopeOpen, faUserTie,
faSchool,faGlobeAmericas, faHeart, faCalendarDay,faIdCard, faMapPin} from '@fortawesome/free-solid-svg-icons'


import { Col, Container, Image, Row } from 'react-bootstrap'
import profileImage from "../../images/avatar.jpg"
import Social from './Social'


import "./Profile.scss"

const data = [
    {
        title: "Formación:",
        info: "Ciencias de la Computación (Ing. Sistemas) / 8vo Nivel",
        icon: faSchool
    },
    {
        title: "Identificación:",
        info: "1718976606",
        icon: faIdCard
    },
    {
        title: "Nacionalidad:",
        info: "Ecuatoriano",
        icon: faGlobeAmericas
    },
    {
        title: "Dirección:",
        info: "Zumbagua, Quito 170141",
        icon: faMapMarkedAlt
    },
    {
        title: "Teléfono:",
        info: "+593 97 921 6418",
        icon: faMobileAlt
    },
    {
        title: "E-mail:",
        info: "patrixio_1999@hotmail.com / rromom@ups.edu.ec",
        icon: faEnvelopeOpen
    },
    {
        title: "Estado Civil:",
        info: "Soltero",
        icon: faHeart
    },
    {
        title: "Fecha Nacimiento:",
        info: "15/Marzo/1999",
        icon: faCalendarDay
    },
    {
        title: "Lugar de Nacimiento:",
        info: "Loja / Loja / Ecuador",
        icon: faMapPin
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
                       <p><FontAwesomeIcon icon={faUserTie} /> Ricardo Patricio Romo Mejia</p>
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
               <Social></Social>
           </Container>
        </div>
    )
}

