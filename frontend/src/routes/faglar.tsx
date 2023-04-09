import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import { useState, type ReactElement, useEffect } from 'react'
import { type Ordning } from '../models/ordning'
import { Skeleton } from '@mui/material'

interface TabPanelProps {
  index: number
  value: number
  heading: string
  ordning: string
  text: ReactElement
}

function TabPanel (props: TabPanelProps): ReactElement {
  return (
    <Box sx={{ display: props.index === props.value ? 'block' : 'none' }}>
      <Typography variant='h4'>{ props.heading }</Typography>
      <Typography variant='h5'>{ props.ordning }</Typography>
      { props.text }
    </Box>
  )
}

export default function Faglar (): ReactElement {
  const [ordning, setOrdning] = useState<Ordning[]>()
  const [tabIndex, setTabIndex] = useState(0)
  function getOrdningar (): void {
    fetch('/api/faglar/ordningar')
      .then(async res => await res.json())
      .then(res => { setOrdning(res) })
      .catch(() => {})
  }
  function handleTabChange (event: React.SyntheticEvent, newValue: number): void {
    setTabIndex(newValue)
  }

  useEffect(() => {
    getOrdningar()
  }, [])
  return (
  <Box>
    {
      ordning !== undefined
        ? <Tabs value={tabIndex} onChange={handleTabChange}>
          {
            ordning?.map((v, i) =>
              <Tab key={v.ordningId} label={v.ordningNamn} />
            )
          }
          </Tabs>
        : <Skeleton variant={'rectangular'} height={ 50 } />
    }
    {
      ordning !== undefined
        ? <>
        {
          ordning.map((v, i) =>
          <TabPanel
            key={v.ordningId}
            index={tabIndex + 1}
            ordning={v.ordningNamn}
            value={v.ordningId}
            heading={v.ordningNamn}
            text={<Typography>{v.ordningBeskrivning}</Typography>} />
          )
        }
        </>
        : <></>
    }
    </Box>)
}
