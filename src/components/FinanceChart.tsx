
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
          <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
          <XAxis 
            dataKey="month" 
            className="text-xs fill-muted-foreground"
            axisLine={false}
            tickLine={false}
          />
          <YAxis 
            className="text-xs fill-muted-foreground"
            axisLine={false}
            tickLine={false}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'hsl(var(--card))',
              border: '1px solid hsl(var(--border))',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            }}
            labelStyle={{ color: 'hsl(var(--foreground))' }}
          />
          <Line 
            type="monotone" 
            dataKey="receita" 
            stroke="hsl(var(--primary))" 
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: 'hsl(var(--primary))', strokeWidth: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="despesas" 
            stroke="#ef4444" 
            strokeWidth={3}
            dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#ef4444', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
