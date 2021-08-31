
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
        <>
        <Template>
            <ContainerLading
            git= "https://github.com/Avb-rubns"
            link="https://www.linkedin.com/in/rub%C3%A9n-s%C3%A1nchez-rugerio-025588205/"
           >
             <FiMail />
             <FiGithub />
             <FiLinkedin />
             </ContainerLading>
            <NotFound text="Estamos Trabajando"/>
        </Template>
        </>
    )
    
}