
import { useParams } from 'react-router-dom';
import styles from './EmployeeDetail.module.css';
import { Employee } from '../types/Employee';

interface EmployeeListProps {
  employees: Employee[];
}

const EmployeeDetail = ({ employees }: EmployeeListProps) => {
  const { id } = useParams();
  const employee = employees.find((emp: { id: string | undefined; }) => emp.id === id);

  if (!employee) return <p>Employee not found.</p>;

  return (
    <div className={styles.detailContainer}>
      <div className={styles.profile}>
        <img src={employee.avatarUrl} alt={employee.name} className={styles.photo} />
        <div>
          <h2>{employee.name}</h2>
          <p><strong>Department:</strong> {employee.department}</p>
          <p><strong>Email:</strong> {employee.email}</p>
          <p><strong>Join Date:</strong> {employee.joinDate}</p>
          <p><strong>Active:</strong> {employee.isActive}</p>
        </div>
      </div>
      {}
    </div>
  );
};

export default EmployeeDetail;
