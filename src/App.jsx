import { Button, Container, Typography, Box } from '@mui/material';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

function App() {
  return (
    <Container maxWidth="lx">
      <h1>Hola Mundo!</h1>
      <Typography variant='h1' component="span">Hola Mundo</Typography>
      <Box sx={{border: 2, p: 5, m: 5, borderColor: 'peru', bgcolor: '#111'}} component="article"></Box>
      <Button color='error' startIcon={<FingerprintOutlinedIcon />}>Boton</Button>
      <Button color='warning' variant='contained' endIcon={<MonetizationOnOutlinedIcon />}>Contained</Button>
      <Button color='success' variant='outlined' startIcon={<CreditCardOutlinedIcon />} >Outlined</Button>
    </Container>
  )
}

export default App
