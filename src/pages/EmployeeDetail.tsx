import { useParams, useNavigate } from 'react-router-dom';
import styles from './EmployeeDetail.module.css';
import { useEmployees } from '../hooks/useEmployees';
import { PerformanceChart }  from '../components/charts/EmployeePerformance';

const EmployeeDetail = () => {
  const { employees } = useEmployees();
  const { id } = useParams();
  const navigate = useNavigate();
  const employee = employees.find((emp) => emp.id === id);

  if (!employee) return <p>Employee not found.</p>;

  return (
    <div className={styles.detailContainer}>
      <div className={styles.navigation}>
        <button className={styles.navButton} onClick={() => navigate(-1)}>
          ← Previous Page
        </button>
        <button className={styles.navButton} onClick={() => navigate('/')}>
          ⌂ Return Home
        </button>
      </div>

      <div className={styles.grid}>
        <div className={styles.leftSection}>
          <img src={employee.avatarUrl} alt={employee.name} className={styles.photo} />
          <div className={styles.basicInfo}>
            <h2>{employee.name}</h2>
            <p><strong>Email:</strong> {employee.email}</p>
            <p><strong>Department:</strong> {employee.department}</p>
            <p><strong>Role:</strong> {employee.role}</p>
            <p><strong>Location:</strong> {employee.location}</p>
            <p><strong>Join Date:</strong> {new Date(employee.joinDate).toLocaleDateString()}</p>
          </div>
        </div>

        <div className={styles.middleSection}>
          <h3>Performance Overview</h3>
          <PerformanceChart data={employee.performance} />
        </div>

        <div className={styles.rightSection}>
          <h3>Details</h3>
          <p><strong>Last Promotion:</strong> {new Date(employee.lastPromotionDate).toLocaleDateString()}</p>
          <div className={styles.achievements}>
            <strong>Key Achievements:</strong>
            <ul>
              {employee.performance[0].keyAchievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
