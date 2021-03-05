import React from 'react'
import BasicLayaout from '../layaouts/BasicLayaout'
import { Container } from 'react-bootstrap'
import "./skills.scss"
import ListSkills from '../components/ListSkills'
import {fronendskills, frontendskillscolor} from "../utils/skills"

export default function Skills() {
    return (
        <BasicLayaout MenuColor="#000">
            <Container className="skills">
                <div className="skills:_block">
                    <h2>Frontend</h2>
                    <ListSkills skills={fronendskills} colors={frontendskillscolor}/>
                </div>
            </Container>
        </BasicLayaout>
    )
}
