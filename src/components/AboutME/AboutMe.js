import React from 'react'
import "./AboutMe.scss"

import { Button, Container } from 'react-bootstrap'
import CV from "../../images/cv.pdf"

export default function AboutMe() {
    return (
        <Container className="about__me">
            <p>
               Soy un estudiante universitario de Carrera en Ciencias de la Computación (Ing. Sistemas) de Octavo Nivel.
               <br></br>
               Dentro de las características que me definen como persona, son la colaboración y trabajo en equipo, la solidaridad, el respeto y la amabilidad sobre todo con las personas que se encuentran en mi entorno laboral. A demás me gusta el compromiso y la superación mía y de los demás.
            </p>
            <hr/>
            <a href={CV} target="_blank" rel="noreferrer">
            <Button primary>Descargar CV</Button>
            </a>
                
        </Container>
    )
}
