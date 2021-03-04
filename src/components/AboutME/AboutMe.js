import React from 'react'
import "./AboutMe.scss"

import { Button, Container } from 'react-bootstrap'
import CV from "../../images/cv.pdf"

export default function AboutMe() {
    return (
        <Container className="about__me">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci ab repellendus corrupti exercitationem quam? Cupiditate numquam iure repudiandae dolorem aspernatur, hic soluta explicabo ipsum, harum fuga voluptate dolorum at cum.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam velit ipsam aliquid, quasi cupiditate rerum? Cupiditate eligendi dignissimos delectus molestiae minus dolorum ut neque dolores corporis, vel error ea molestias.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio, nisi minus animi quos esse maiores pariatur recusandae officia. Animi consequatur consequuntur debitis rem voluptate, similique voluptatem placeat voluptas ratione vero.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque adipisci eveniet ex. Consequatur dolorem expedita non. Perferendis suscipit dolore, sit non nesciunt quidem eos et, quibusdam iste dolores, velit a!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio labore molestias id, blanditiis reiciendis cumque, architecto quidem temporibus aspernatur ipsum tempore saepe? Magnam mollitia neque dolores perspiciatis ea aliquid aut?
            </p>
            <hr/>
            <a href={CV} target="_blank">
            <Button primary>Descargar CV</Button>
            </a>
                
        </Container>
    )
}
