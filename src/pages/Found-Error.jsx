
import React from 'react'
import NotFound from '../components/404'
import Template  from '../components/Template'
import ContainerLading from 'components/Container-Lading'
import {
    FiMail,
    FiGithub,
    FiLinkedin
  } from 'react-icons/fi'

export default function Found() {
    return(
        <React.Suspense fallback = {<div>Cargando ... </div>}>
            <Template>
                <ContainerLading
                git= "https://github.com/Avb-rubns"
                link="https://www.linkedin.com/in/rub%C3%A9n-s%C3%A1nchez-rugerio-025588205/"
                mail="mailto:rubns.s24@gmail.com"
                >
                    <FiMail />
                    <FiGithub />
                    <FiLinkedin />
                    </ContainerLading>
                <NotFound text="Contenido no disponible por el momento"/>
            </Template>
        </React.Suspense>
    )
    
}