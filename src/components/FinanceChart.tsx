
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const monthlyData = [
  { month: 'Jan', receitas: 4800, despesas: 3200 },
  { month: 'Fev', receitas: 5200, despesas: 3800 },
  { month: 'Mar', receitas: 4900, despesas: 3500 },
  { month: 'Abr', receitas: 5500, despesas: 4200 },
  { month: 'Mai', receitas: 5800, despesas: 3900 },
  { month: 'Jun', receitas: 6200, despesas: 4100 }
];

const categoryData = [
  { name: 'Alimentação', value: 1200, color: '#F97316' },
  { name: 'Transporte', value: 600, color: '#3B82F6' },
  { name: 'Moradia', value: 1800, color: '#8B5CF6' },
  { name: 'Lazer', value: 400, color: '#10B981' },
  { name: 'Outros', value: 300, color: '#F59E0B' }
];

export function FinanceChart() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="finance-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Receitas vs Despesas</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
            <Bar dataKey="receitas" fill="#10B981" radius={[4, 4, 0, 0]} />
            <Bar dataKey="despesas" fill="#EF4444" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="finance-card p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Gastos por Categoria</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(var(--card))',
                border: '1px solid hsl(var(--border))',
                borderRadius: '8px'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-2 gap-2 mt-4">
          {categoryData.map((item) => (
            <div key={item.name} className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-sm text-muted-foreground">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
