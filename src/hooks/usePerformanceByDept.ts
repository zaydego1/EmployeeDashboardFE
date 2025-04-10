import { useState, useEffect } from 'react';
import { PerformanceByDept } from '../types/PerformanceByDept';
import axios from 'axios';

const usePerformanceByDept = () => {
    const [data, setData] = useState<PerformanceByDept[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPerformanceByDept = async () => {
            try {
                setLoading(true);
                const response = await axios.get<PerformanceByDept[]>(
                    'http://localhost:8080/employees/department/performance'
                );
                setData(response.data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchPerformanceByDept();
    }, []);

    return { data, loading, error };
};

export default usePerformanceByDept;