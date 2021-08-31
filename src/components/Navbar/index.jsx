import React from 'react'
import { Link } from 'wouter'
import { FiToggleLeft } from 'react-icons/fi'
import { NavbarStyled } from './navbar.styles'

export default function Navbar ({children}) {
  return (
    <NavbarStyled>
      <nav>
        {children}
        <button>
          <FiToggleLeft />
        </button>
      </nav>
    </NavbarStyled>
  )
}
