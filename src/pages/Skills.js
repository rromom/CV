import React from 'react'
import BasicLayaout from '../layaouts/BasicLayaout'
import { Container } from 'react-bootstrap'
import "./skills.scss"
import ListSkills from '../components/ListSkills'

const skills = [
    {type: "Java", level: 85},
    {type: "Javascript", level: 75},
  ];
  

export default function Skills() {
    return (
        <BasicLayaout MenuColor="#000">
            <Container className="skills">
                <div className="skills:_block">
                    <h2>Frontend</h2>
                    <ListSkills skills={skills}/>
                </div>
            </Container>
        </BasicLayaout>
    )
}
