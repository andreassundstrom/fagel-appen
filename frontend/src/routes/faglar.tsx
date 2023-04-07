import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import { useState, type ReactElement } from 'react'

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
  const [tabIndex, setTabIndex] = useState(0)
  function handleTabChange (event: React.SyntheticEvent, newValue: number): void {
    setTabIndex(newValue)
  }
  return (<Box>
    <Tabs value={tabIndex} onChange={handleTabChange}>
      <Tab label="Andfåglar" />
      <Tab label="Tättingar" />
      <Tab label="Ugglefåglar" />
    </Tabs>
    <TabPanel index={0} ordning='Anseriformes' value={tabIndex} heading='Andfåglar'
      text={<>
        <Typography>Andfåglar (Anseriformes) är en ordning fåglar, som innehåller cirka 150 arter med tre nu förekommande familjer: värnfåglar (Anhimidae), änder (Anatidae) och skatgäss (Anseranatidae). Den överlägset största familjen är Anatidae som omfattar över 140 arter av vattenlevande fåglar, som änder, gäss och svanar.</Typography>
        <Typography>Alla arterna inom familjen är mycket väl anpassade för ett liv på vattenytan. De har alla simhud på fötterna för att effektivare kunna simma. Trots denna anpassning till ett liv i vatten så lever ett flertal arter ändå sina liv till stora delar på land.</Typography>
      </>}></TabPanel>
    <TabPanel index={1} ordning="Passeriformes" value={tabIndex} heading="Tättingar" text={<>
      <Typography>Tättingar (Passeriformes) är den största ordningen inom klassen fåglar. Ungefär hälften av alla världens fågelarter är tättingar och majoriteten av dem är sångfåglar. Välutvecklade muskler i syrinx tillåter dem en bred och diversifierad kommunikationsförmåga. Deras bon är ofta mycket välbyggda. Ungarna är vid födseln blinda, nästan nakna och fullständigt beroende av sina föräldrar. De skriker typiskt i en klunga och tigger efter maten när föräldrarna anländer till boet med sin fångst.</Typography>
    </>
    }></TabPanel>
    <TabPanel index={2} ordning='Strigiformes' value={tabIndex} heading='Ugglefåglar'
      text={<>
        <Typography variant='body1'>Ugglefåglar (Strigiformes) är en ordning fåglar med ett mycket karaktäristiskt utseende, som skiljer sig från andra fågelarter.</Typography>
        <Typography variant='body1'>Ugglor livnär sig på rov och tar ofta sitt byte med överrumpling. De flesta ugglor är mest aktiva i gryning, skymning och på natten. De har oerhört bra syn och hörsel. Ögonen är placerade frontalt för stereoskopisk syn och många har ett platt ansikte. Vissa har örontofsar. En del av ugglans dun omvandlas till ett slags vitt mjöligt puder som täcker fjäderdräkten. Detta tillsammans med att deras handpennor har en sågtandad mjuk kant gör att ugglor kan flyga nästan ljudlöst och på det sättet överraska sina byten.</Typography>
        </>
        }></TabPanel>
  </Box>)
}
