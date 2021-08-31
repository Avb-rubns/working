import React from 'react'
import Navbar from './Navbar'

export default function Template (props) {
  console.log(props.children[0])
  return (
    <>
      <Navbar  > {props.children[0]} </Navbar>
      {props.children[1]}
    </>
  )
}
