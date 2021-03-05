import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import BasicLayaout from '../layaouts/BasicLayaout'
import "./Projects.scss"

export default function Projects() {
    return (
        <BasicLayaout MenuColor="#000">
            <Container className="projects">
                <h1>Proyectos</h1>
                <Row>
                    <Col xs={12} sm={4} className="project">
                        <Card>
                            <div className="image"/>
                                <Card.Body>
                                    <Card.Title>
                                        Google
                                    </Card.Title>
                                    <Card.Text>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quam. Eos qui magnam, eaque magni, ab voluptas deleniti nihil eum dignissimos amet excepturi ipsa voluptatem assumenda voluptates. Necessitatibus, illo iste.
                                    </Card.Text>
                                    <a href="#" terget="_blank">
                                        <Button primary>
                                            Ver Proyecto
                                        </Button>
                                    </a>
                                </Card.Body>
                            
                        </Card>
                    </Col>
                </Row>
            </Container>
        </BasicLayaout>
    )
}
