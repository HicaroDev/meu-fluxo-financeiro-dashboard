
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', receita: 4000, despesas: 2400 },
  { month: 'Fev', receita: 3000, despesas: 1398 },
  { month: 'Mar', receita: 2000, despesas: 9800 },
  { month: 'Abr', receita: 2780, despesas: 3908 },
  { month: 'Mai', receita: 1890, despesas: 4800 },
  { month: 'Jun', receita: 2390, despesas: 3800 },
];

export function FinanceChart() {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" className="opacity-20" stroke="#e5e7eb" />
          <XAxis 
            dataKey="month" 
            className="text-xs"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <YAxis 
            className="text-xs"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            }}
            labelStyle={{ color: '#111827', fontWeight: '500' }}
          />
          <Line 
            type="monotone" 
            dataKey="receita" 
            stroke="#10b981" 
            strokeWidth={3}
            dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2, fill: 'white' }}
          />
          <Line 
            type="monotone" 
            dataKey="despesas" 
            stroke="#ef4444" 
            strokeWidth={3}
            dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#ef4444', strokeWidth: 2, fill: 'white' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
