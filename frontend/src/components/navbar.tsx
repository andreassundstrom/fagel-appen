import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Toolbar from '@mui/material/Toolbar'
import { Link as RouterLink } from 'react-router-dom'
import React, { type ReactElement } from 'react'
import Box from '@mui/material/Box'
import { useAuth } from 'oidc-react'
import { Typography } from '@mui/material'

export default function Navbar (): ReactElement {
  const auth = useAuth()
  function signIn (): void {
    auth.signIn()
      .then(() => {})
      .catch(() => {})
  }

  function signOut (): void {
    auth.signOutRedirect()
      .then(() => {})
      .catch(() => {})
  }

  return (<AppBar position='static'>
      <Toolbar>
        <Box flexGrow={1}>
          <Button color='inherit' component={ RouterLink } to="/">Hem</Button>
          <Button color='inherit' component={ RouterLink } to="/faglar">Fåglar</Button>
          { auth.userData != null
            ? <Button color='inherit' component={ RouterLink } to="/fagellistan">Fågellistan</Button>
            : <></>
          }
        </Box>
        <Box>
          {
            auth.userData == null
              ? <Button color='inherit' onClick={signIn}>Logga in</Button>
              : <Box display='flex'>
                  <Typography my={2} noWrap>{ auth.userData.profile.name }</Typography>
                  <Button color='inherit' onClick={signOut}>Logga ut</Button>
                </Box>
          }
        </Box>
      </Toolbar>
    </AppBar>)
}
