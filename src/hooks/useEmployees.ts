import { useEffect } from 'react';
import { fetchEmployees } from '../services/EmployeeApi';
import { EmployeeContext } from '../context/EmployeeContext';
import { useContext } from 'react';
import { useState } from 'react';

export const useEmployees = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadEmployees = async () => {
      setIsLoading(true);
      try {
        const data = await fetchEmployees();
        setEmployees(data);
      } catch (error) {
        console.error("Failed to fetch employees:", error);
      } finally {
        setIsLoading(false);
      }
    };
    loadEmployees();
  }, [setEmployees]);

  return { employees, isLoading };
};
