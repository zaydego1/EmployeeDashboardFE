import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PerformanceByDept } from '../../types/PerformanceByDept';

interface DepartmentPerformanceProps {
  data: PerformanceByDept[]
}

export default function DepartmentPerformance({ data }: Readonly<DepartmentPerformanceProps>) {
  return (
    <div className="chart-container">
      <h3>Performance Metrics by Department</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="department" />
            <YAxis yAxisId="left" orientation="left" domain={[0, 100]} />
            <YAxis yAxisId="right" orientation="right" domain={[0, 5]} />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="avgProductivity" fill="#A6C8FF" name="Productivity (%)" />
            <Bar yAxisId="right" dataKey="avgGoalsCompleted" fill="#A7D7C5" name="Goals Completed" />
            <Bar yAxisId="right" dataKey="avgFeedbackScore" fill="#D4A6FF" name="Feedback (1-5)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}