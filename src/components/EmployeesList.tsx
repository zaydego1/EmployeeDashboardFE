import { Employee } from '../types/Employee';
import EmployeeCard from './EmployeeCard';

interface EmployeeListProps {
  employees: Employee[];
}

export default function EmployeeList({ employees }: Readonly<EmployeeListProps>) {
  return (
    <div className="employee-list">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
}