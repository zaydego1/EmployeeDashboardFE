import { Employee } from '../types/Employee';
import styles from './EmployeeCard.module.css'; // Assuming you have CSS modules set up

export default function EmployeeCard({ employee }: Readonly<{ employee: Employee }>) {
    return (
      <div className={styles['employee-card']}>
        <h3 className={styles.title}>{employee.name}</h3>
        <p>Department: {employee.department}</p>
        <p>Latest Productivity: {employee.performance[0].productivity}%</p>
      </div>
    );
  }