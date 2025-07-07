import { Grid } from '@mui/material';
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';


function App() {
   return (
      <>
         <div className="App" style={{ textAlign: 'center', margin: '10px' }}>
            <h1>Bienvenido a mi Dashboard</h1>
         </div>
         <Grid container spacing={5} justifyContent="center" alignItems="center">

            {/* Encabezado */}
            <Grid  size={{ xs: 12, md: 12 }}>Elemento: Encabezado <HeaderUI/> </Grid>

            {/* Alertas */}
            <Grid container justifyContent="right" alignItems="center"> Elemento: Alertas 
               <AlertUI description="No se preveen lluvias"/>
            </Grid>

            {/* Selector */}
            <Grid  size={{ xs: 12, md: 3 }}>Elemento: Selector</Grid>

            {/* Indicadores */}
            <Grid  size={{ xs: 12, md: 9 }}>Elemento: Indicadores</Grid>

            {/* Gráfico */}
            <Grid sx={{ display: { xs: "none", md: "block"} }} >Elemento: Gráfico</Grid>

            {/* Tabla */}
            <Grid sx={{ display: { xs: "none", md: "block" } }}>Elemento: Tabla</Grid>

            {/* Información adicional */}
            <Grid>Elemento: Tabla</Grid>

         </Grid>
      </>
   );
}

export default App;