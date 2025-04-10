import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PerformanceMetric } from '../../types/Employee';

interface ProductivityTrendProps {
  data: PerformanceMetric[];
}

export default function ProductivityTrend({ data }: Readonly<ProductivityTrendProps>) {
  return (
    <div className="chart-container">
      <h3>Productivity Trend (Last 12 Months)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="productivity" stroke="#000000" name="Productivity (%)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}