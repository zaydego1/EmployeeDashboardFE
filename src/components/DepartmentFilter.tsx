import { useContext } from 'react';
import { EmployeeContext } from '../context/EmployeeContext';

export default function DepartmentFilter() {
  const { employees, setFilters } = useContext(EmployeeContext);
  const departments = Array.from(new Set(employees.map(emp => emp.department)));

  return (
    <select 
      onChange={(e) => setFilters?.({ department: e.target.value})}
      className="filter-select"
    >
      <option value="">All Departments</option>
      {departments.map(dept => (
        <option key={dept} value={dept}>{dept}</option>
      ))}
    </select>
  );
}