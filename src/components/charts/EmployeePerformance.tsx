import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { PerformanceMetric } from '../../types/Employee';

export const PerformanceChart = ({ data }: { data: PerformanceMetric[] }) => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" domain={[0, 100]} />
          <YAxis yAxisId="right" orientation="right" domain={[0, 5]} />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="productivity"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
            name="Productivity (%)"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="goalsCompleted"
            stroke="#82ca9d"
            name="Goals Completed (1-5)"
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="feedbackScore"
            stroke="#ffc658"
            name="Feedback Score (1-5)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};