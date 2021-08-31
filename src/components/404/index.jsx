import React from 'react'
import { Card, Container, Rectangle } from './container.styles'


export default function NotFound(props) {
    return(
    <Container>
        <div>
            <article>
                <h1>&lt;/&gt;</h1>
                <section>  
                    <Rectangle background="--black-light" size="50px"/>
                    <Rectangle background="--main-color" size="150px" />
                    <Rectangle background="--gray-dark" size="350px"/>
                    <Rectangle background="--white" />
                    <Rectangle background="--black-light" size="450px"/>
                    <Rectangle background="--white"  size="50px" />
                    <Rectangle background="--gray"/>
                </section>
            </article>

            <section>
                <Rectangle background="--black-light" size="50px"/>
                
                <Rectangle background="--gray-dark" size="250px"/>
                <Rectangle background="--main-color" size="50px" />
                <Rectangle background="--white" />
                <Rectangle background="--black-light" size="450px"/>
                <Rectangle background="--white"  size="50px" />
                <Rectangle background="--gray"/>
                
                <Rectangle background="--gray-dark" />
                <Rectangle background="--gray" size="450px"/>
                <Rectangle background="--white"  size="50px" />
                <Rectangle background="--black-light"/>
            </section>
            
            <section>
                <Card><h1>¡UPS!</h1></Card>
                <Card><h1>404</h1></Card>
                <Card><h1>😅</h1></Card>
            </section>
        </div>
        <h1>{props.text}</h1>
    </Container>       
    )
    
}