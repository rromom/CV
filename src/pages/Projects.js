import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import BasicLayaout from '../layaouts/BasicLayaout'
import "./Projects.scss"
import projects from "../utils/projects"

export default function Projects() {
    return (
        <BasicLayaout MenuColor="#000">
            <Container className="projects">
                <h1>Proyectos</h1>
                <Row>
                    {projects.map((project,index) => (
                        <Col  key={index} xs={12} sm={4} className="project">
                        <Card>
                            <div className="image" style={{ backgroundImage: `url("${project.image}")` }}/>
                                <Card.Body>
                                    <Card.Title>
                                        {project.title}
                                    </Card.Title>
                                    <Card.Text>
                                        {project.description}
                                    </Card.Text>
                                    <a href={project.url} terget="_blank">
                                        <Button variant="primary">
                                            Ver Proyecto
                                        </Button>
                                    </a>
                                </Card.Body>
                            
                        </Card>
                    </Col>
                    ))}
                    
                </Row>
            </Container>
        </BasicLayaout>
    )
}
