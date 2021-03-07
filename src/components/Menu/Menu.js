import { Link } from 'gatsby'
import { Container } from 'react-bootstrap'

import React from 'react'
import "./Menu.scss"

export default function Menu(props) {
    const {MenuColor} = props;
    return (
       <header className="menu" style={{backgroundColor: 'darkcyan'}}>
           <Container>
               <ul>
                    <li>
                       <Link to="/">Perfil</Link>
                    </li>
                     <li>
                       <Link to="/Experiencia">Formación/Experiencia</Link>
                    </li>
                    <li>
                       <Link to="/Skills">Habilidades</Link>
                    </li>
                    <li>
                       <Link to="/Projects">Proyectos</Link>
                    </li>
               </ul>
           </Container>
       </header>
    )
}
