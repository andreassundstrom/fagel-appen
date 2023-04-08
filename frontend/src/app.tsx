import router from './router'
import { RouterProvider } from 'react-router-dom'
import CssBaseline from '@mui/material/CssBaseline'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import theme from './theme'
import { AuthProvider } from 'oidc-react'
import { useEffect, type ReactElement, useState } from 'react'

interface Config {
  authority: string
  clientId: string
  redirectUri: string
}

export default function App (): ReactElement {
  const [config, setConfig] = useState<Config>()
  useEffect(() => {
    fetch('/api/config')
      .then(async res => await res.json())
      .then(json => { setConfig(json) })
      .catch(() => {})
  }, [])

  const onSignIn = (): void => {
    window.history.pushState({}, document.title, window.location.pathname)
  }

  return (config != null
    ? <AuthProvider {...config} onSignIn={onSignIn} autoSignIn={false} >
          <CssBaseline />
          <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </AuthProvider>
    : <></>)
}
