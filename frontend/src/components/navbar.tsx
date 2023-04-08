import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import { Link as RouterLink } from 'react-router-dom'
import React, { type ReactElement } from 'react'

export default function Navbar (): ReactElement {
  return (<AppBar position='static'>
      <Toolbar>
        <Button color='inherit' component={ RouterLink } to="/">Hem</Button>
        <Button color='inherit' component={ RouterLink } to="/faglar">Fåglar</Button>
        <Button color='inherit' component={ RouterLink } to="/fagellistan">Fågellistan</Button>
      </Toolbar>
    </AppBar>)
}
