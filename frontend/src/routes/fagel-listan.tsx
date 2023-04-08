/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import { Button, FormControl, FormLabel, TextField, Typography } from '@mui/material'
import { useState, type ReactElement, useEffect } from 'react'

export default function FagelListan (): ReactElement {
  const [faglar, setFaglar] = useState<any[]>()
  const [error, setError] = useState()
  const [namn, setNamn] = useState('')

  function GetFaglar (): void {
    fetch('api/faglar')
      .then(async res => await res.json())
      .then(json => { setFaglar(json) })
      .catch(error => { setError(error) })
  }

  function SkapaNyFagel (): void {
    console.log(`Skapar ny fågel: ${namn}`)
    fetch('/api/faglar', {
      method: 'POST',
      body: JSON.stringify({
        fagelNamn: namn
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        setNamn('')
        GetFaglar()
      })
      .catch(err => { setError(err) })
  }
  useEffect(() => {
    GetFaglar()
  }, [])
  return (
    <>
      { error ? <Typography>{error}</Typography> : <></> }
      <Typography variant='h3'>Fågellistan</Typography>
      <FormControl>
        <FormLabel>Ny fågel</FormLabel>
        <TextField value={namn} onChange={(e) => { setNamn(e.target.value) }} placeholder='Namn'></TextField>
        <Button variant='contained' sx={{ marginTop: 1 }} onClick={SkapaNyFagel}>Skapa</Button>
      </FormControl>
      { faglar
        ? <> { faglar.map((v, i) => <p key={i}>{v.fagelNamn}</p>)}</>
        : <></>
      }
    </>
  )
}
