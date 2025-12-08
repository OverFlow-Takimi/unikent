import { useState, useEffect } from 'react';
import axios from 'axios';
import { City } from '@/data/cities';
import { BackendCity } from '@/types/backend';

export const useCities = () => {
    const [cities, setCities] = useState<City[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await axios.get<City[]>('http://localhost:5037/api/cities');
                setCities(response.data || []);
            } catch (err) {
                console.error("Error fetching cities:", err);
                setError('Şehir verileri alınamadı.');
            } finally {
                setLoading(false);
            }
        };

        fetchCities();
    }, []);

    return { cities, loading, error };
};
