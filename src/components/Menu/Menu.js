import { Link } from 'gatsby'
import { Container } from 'react-bootstrap'

import React from 'react'
import "./Menu.scss"

export default function Menu(props) {
    const {MenuColor} = props;
    return (
       <header className="menu" style={{backgroundColor: MenuColor || 'transparent'}}>
           <Container>
               <ul>
                   <li>
                       <Link to="/">Inicio</Link>
                   </li>
                   <li>
                       <Link to="/Skills">Skills</Link>
                   </li>
                   <li>
                       <Link to="/projects">Proyectos</Link>
                   </li>
               </ul>
           </Container>
       </header>
    )
}
