import { ThemeProvider } from '@mui/material';
import Button from './components/Button';
import { H1 } from './components/Typography';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <H1 variant="h1" color={'primary.light'}>Welcome</H1>
      <Button variant="contained" disableElevation>Text</Button>
    </ThemeProvider>
  )
}


export default App;
