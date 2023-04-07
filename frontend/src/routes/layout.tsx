import React, { type ReactElement } from 'react'
import Navbar from '../components/navbar'
import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

export default function Layout (): ReactElement {
  return (
  <>
    <Navbar />
    <Container>
      <Outlet />
    </Container>
  </>
  )
}
