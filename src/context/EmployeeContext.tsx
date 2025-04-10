import { createContext, useState, ReactNode, useMemo } from 'react';
import { Employee } from '../types/Employee';
import { useContext } from 'react';

interface EmployeeContextType {
  employees: Employee[];
  setEmployees: (employees: Employee[]) => void;
  setFilters?: (filters: { department: string}) => void;
}

export const EmployeeContext = createContext<EmployeeContextType>({
  employees: [],
  setEmployees: () => {},
});

export const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);

  const value = useMemo(() => ({ employees, setEmployees }), [employees]);
  console.log("EmployeeProvider value:", value);

  return (
    <EmployeeContext.Provider value={value}>
      {children}
    </EmployeeContext.Provider>
  );
};

export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error('useEmployeeContext must be used within EmployeeProvider');
  }
  return context;
};