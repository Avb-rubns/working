import React from 'react'
import { Switch, Route, Redirect } from 'wouter'
import Found from '../pages/Found-Error'

function App () {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/working' />
        </Route>
        <Route path="/working" component={Found} ></Route>
        <Route component={Found} />
      </Switch>
    </>
  )
}
export default App
