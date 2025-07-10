import Box from '@mui/material/Box';
import { DataGrid, type GridColDef} from '@mui/x-data-grid';
import Typography from '@mui/material/Typography'; 
import type { OpenMeteoResponse } from '../types/DashboardTypes'; 


interface TableUIProps {
    data: OpenMeteoResponse | null;
}

export default function TableUI({ data }: TableUIProps) {

    
    if (!data || !data.hourly?.time || !data.hourly?.temperature_2m || !data.hourly?.wind_speed_10m) {
        return (
            <Typography variant="h6" component="div" sx={{ mt: 2 }}>
                Esperando datos del clima para la tabla...
            </Typography>
        );
    }

   
    const rows = data.hourly.time.map((timeString: string, index: number) => {
        const date = new Date(timeString);
        const formattedTime = date.getHours() + ':00'; // Formatear a HH:00

        return {
            id: index, 
            time: formattedTime,
            temperature_2m: data.hourly.temperature_2m[index],
            wind_speed_10m: data.hourly.wind_speed_10m[index],
            
            // relative_humidity_2m: data.hourly.relative_humidity_2m[index], 
        };
    });

    // Definir las columnas para DataGrid basadas en los datos de la API
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 50 },
        {
            field: 'time',
            headerName: 'Hora',
            width: 100,
        },
        {
            field: 'temperature_2m',
            headerName: `Temp. (${data.current_units.temperature_2m})`, // Unidades dinámicas
            width: 150,
            valueFormatter: (params: { value: number | null | undefined }) => {
                
                return `${params.value ?? ''} ${data.current_units.temperature_2m}`;
            }
        },
      
         {
               field: 'wind_speed_10m',
            headerName: `Viento (${data.current_units.wind_speed_10m})`, // Unidades dinámicas
            width: 150,
            valueFormatter: (params: { value: number | null | undefined }) => {
                
                return `${params.value ?? ''} ${data.current_units.wind_speed_10m}`;
            }
        },
        
    ];

    return (
        <Box sx={{ height: 350, width: '100%' }}>
            <Typography variant="h5" component="div" sx={{ mb: 2 }}>
                Datos Horarios del Clima
            </Typography>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5, 10, 25]} 
                disableRowSelectionOnClick
            />
        </Box>
    );
}