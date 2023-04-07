import Typography from '@mui/material/Typography'
import { type ReactElement } from 'react'

export default function Home (): ReactElement {
  return (<>
    <Typography variant="h3" component={'h1'}>Fågelappen</Typography>
    <Typography>Här samlar vi information om fåglar</Typography>
  </>
  )
}
