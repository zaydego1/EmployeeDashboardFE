import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductivityTrend from '../components/charts/ProductivityTrend';
import DepartmentPerformance from '../components/charts/DepartmentPerformance';
import { useEmployees } from '../hooks/useEmployees';
import usePerformanceByDept from '../hooks/usePerformanceByDept';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const { employees } = useEmployees();
  const { data: departmentData } = usePerformanceByDept();
  const [searchTerm, setSearchTerm] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const filteredEmployees = employees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEmployeeSelect = (id: string) => {
    navigate(`/employee/${id}`);
    setSearchTerm('');
    setShowDropdown(false);
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.header}>
        <h1 className={styles.title}>Employee Performance Dashboard</h1>
        <div className={styles.controls}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search employees..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setShowDropdown(e.target.value.length > 0);
              }}
              className={styles.searchInput}
            />
            {showDropdown && filteredEmployees.length > 0 && (
              <div className={styles.dropdown}>
                {filteredEmployees.map(emp => (
                  <div
                    key={emp.id}
                    className={styles.dropdownItem}
                    onClick={() => handleEmployeeSelect(emp.id)}
                  >
                    {emp.name} ({emp.department})
                  </div>
                ))}
              </div>
            )}
          </div>
          <button 
            onClick={() => navigate('/employees')} 
            className={styles.viewButton}
          >
            View All Employees
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <DepartmentPerformance data={departmentData} />
        </div>
        <div className={styles.card}>
          <ProductivityTrend
            data={employees.reduce((acc: any[], employee) => {
              employee.performance.forEach((metric, index) => {
                if (!acc[index]) {
                  acc[index] = { ...metric, value: 0 };
                }
                acc[index].value += metric.value;
              });
              return acc;
            }, []).map(metric => ({
              ...metric,
              value: metric.value / employees.length,
            }))}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;