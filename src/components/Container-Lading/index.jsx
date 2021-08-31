import {  Box } from './container.styles'
import LoaderIcon from 'components/LoaderIcon'

export default function ContainerLading (props) {
  return (
            <>
                <Box href={props.mail} target="_blank" rel="noopener noreferrer" >
                  <LoaderIcon color="var(--gray-dark)" >{props.children[0] }</LoaderIcon>
                </Box>
                <Box href={props.git} target="_blank" rel="noopener noreferrer" >
                  <LoaderIcon color="var(--gray-dark)" >{props.children[1] }</LoaderIcon>
                </Box>
                <Box href={props.link} target="_blank" rel="noopener noreferrer" >
                  <LoaderIcon color="var(--gray-dark)" >{props.children[2] }</LoaderIcon>
                </Box>
            </>
  )
}
