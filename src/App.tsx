import React from 'react';
import { Grid, Box } from '@mui/material';
import HeaderUI from './components/HeaderUI';


function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#121212',
        display: 'flex',
        justifyContent: 'center',
        padding: 4,
      }}
    >
      <Box sx={{ maxWidth: 1200, width: '100%' }}>
        <div className="App">
          <h1 style={{ color: 'white' }}>Bienvenido a mi Dashboard</h1>
        </div>

        <Grid container spacing={5} justifyContent="center" alignItems="center">
          <Grid size={{ xs: 12, md: 12 }}> <HeaderUI></HeaderUI>Elemento: Encabezado</Grid>
          <Grid size={{ xs: 12, md: 12 }}>Elemento: Alertas</Grid>
          <Grid size={{ xs: 12, md: 3 }}>Elemento: Selector</Grid>
          <Grid size={{ xs: 12, md: 9 }}>Elemento: Indicadores</Grid>
          <Grid size={{ xs: 12, md: 6 }}>Elemento: Gráfico</Grid>
          <Grid size={{ xs: 12, md: 6 }}>Elemento: Tabla</Grid>
          <Grid size={{ xs: 12, md: 12 }}>Elemento: Información adicional</Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
