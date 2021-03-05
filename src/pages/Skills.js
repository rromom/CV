import React from 'react'
import BasicLayaout from '../layaouts/BasicLayaout'
import { Container } from 'react-bootstrap'
import "./skills.scss"
import ListSkills from '../components/ListSkills'
import {fronendskills, frontendskillscolor, backendskills,backendskillscolor,soSkills,soskillscolor} from "../utils/skills"

export default function Skills() {
    return (
        <BasicLayaout MenuColor="#000">
            <Container className="skills">
                <div className="skills:_block">
                    <h2>Frontend Skills</h2>
                    <ListSkills skills={fronendskills} colors={frontendskillscolor}/>
                    <h2>Backend Skills</h2>
                    <ListSkills skills={backendskills} colors={backendskillscolor}/>
                    <h2>Sistemas Operativos</h2>
                    <ListSkills skills={soSkills} colors={soskillscolor}/>
                </div>
            </Container>
        </BasicLayaout>
    )
}
