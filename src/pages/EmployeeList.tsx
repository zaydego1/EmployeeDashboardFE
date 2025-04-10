import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EmployeeList.module.css';
import { useEmployees } from '../hooks/useEmployees';

const EmployeeList = () => {
  const { employees } = useEmployees();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState<string>('');

  const departments = Array.from(new Set(employees.map(emp => emp.department)));

  const filteredEmployees = employees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = !departmentFilter || emp.department === departmentFilter;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className={styles.container}>
      <div className={styles.controls}>
        <button onClick={() => navigate('/')} className={styles.homeButton}>
          ⬅ Home
        </button>

        <input
          type="text"
          placeholder="Search employees..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={styles.searchInput}
        />
        
        <select
          value={departmentFilter}
          onChange={(e) => setDepartmentFilter(e.target.value)}
          className={styles.filterSelect}
        >
          <option value="">All Departments</option>
          {departments.map(dept => (
            <option key={dept} value={dept}>{dept}</option>
          ))}
        </select>
      </div>

      <div className={styles.listContainer}>
        {filteredEmployees.length > 0 ? (
          filteredEmployees.map(emp => (
            <div 
              key={emp.id} 
              className={styles.card} 
              onClick={() => navigate(`/employee/${emp.id}`)}
            >
              <img src={emp.avatarUrl} alt={emp.name} className={styles.avatar} />
              <h3>{emp.name}</h3>
              <p>{emp.department}</p>
            </div>
          ))
        ) : (
          <p className={styles.noResults}>No employees found matching your criteria</p>
        )}
      </div>
    </div>
  );
};

export default EmployeeList;