import { useEffect, useState } from 'react';
import type { OpenMeteoResponse, CityCoordinates  } from '../types/DashboardTypes';

interface DataFetcherProps {
    coordinates: CityCoordinates | undefined; 
}
interface DataFetcherOutput {
    data: OpenMeteoResponse | null;
    loading: boolean;
    error: string | null;
}

export default function DataFetcher({ coordinates }: DataFetcherProps): DataFetcherOutput {
    const [data, setData] = useState<OpenMeteoResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!coordinates?.latitude || !coordinates?.longitude || !coordinates?.timezone) {
            setData(null);
            setError(null);
            setLoading(false);
            return;
        }

        setLoading(true);
        setError(null);

        const encodedTimezone = encodeURIComponent(coordinates.timezone);
        // Reemplace con su URL de la API de Open-Meteo obtenida en actividades previas
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&hourly=temperature_2m,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m&timezone=${encodedTimezone}`;

        const fetchData = async () => {

            try {

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status} - ${response.statusText}`);
                }

                const result: OpenMeteoResponse = await response.json();
                setData(result);

            } catch (err: unknown) {

                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("Ocurrió un error desconocido al obtener los datos.");
                }

            } finally {
                setLoading(false);
            }
        };

        fetchData();

    }, [coordinates]); // El array vacío asegura que el efecto se ejecute solo una vez después del primer renderizado

    return { data, loading, error };

}