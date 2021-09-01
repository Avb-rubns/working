import React from 'react'
import ReactDOM from 'react-dom'
import Router from './router/Router'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/globals.styles'
import Dark from './styles/schemes/dark'
import Light from 'styles/schemes/light'

const THEMES = {
  Dark,
  Light
}
ReactDOM.render(
  <React.Suspense fallback = {<div>Cargando ... </div>}>
    <ThemeProvider theme={THEMES.Light}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </React.Suspense>,
    document.getElementById('root')
)