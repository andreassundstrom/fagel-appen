import createTheme from '@mui/material/styles/createTheme'
/* https://color.adobe.com/sv/explore
  .Crevasse-1-hex { color: #B4BEC9; }
  .Crevasse-2-hex { color: #159A9C; }
  .Crevasse-3-hex { color: #002333; }
  .Crevasse-4-hex { color: #DEEFE7; }
  .Crevasse-5-hex { color: #FFFFFF; }
*/

const theme = createTheme({
  palette: {
    primary: {
      main: '#002333'
    },
    secondary: {
      main: '#159A9C'
    }
  }
})

export default theme
/* Color Theme Swatches in Hex */
