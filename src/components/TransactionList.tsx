
import React from 'react';

interface Transaction {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: string;
  type: 'income' | 'expense';
}

const mockTransactions: Transaction[] = [
  {
    id: '1',
    description: 'Salário',
    amount: 5000,
    category: 'Renda',
    date: '2024-06-05',
    type: 'income'
  },
  {
    id: '2',
    description: 'Supermercado',
    amount: -350,
    category: 'Alimentação',
    date: '2024-06-04',
    type: 'expense'
  },
  {
    id: '3',
    description: 'Combustível',
    amount: -120,
    category: 'Transporte',
    date: '2024-06-03',
    type: 'expense'
  },
  {
    id: '4',
    description: 'Freelance',
    amount: 800,
    category: 'Renda Extra',
    date: '2024-06-02',
    type: 'income'
  },
  {
    id: '5',
    description: 'Internet',
    amount: -89,
    category: 'Serviços',
    date: '2024-06-01',
    type: 'expense'
  }
];

const categoryColors: Record<string, string> = {
  'Renda': 'bg-finance-success',
  'Alimentação': 'bg-finance-orange',
  'Transporte': 'bg-finance-info',
  'Renda Extra': 'bg-finance-teal',
  'Serviços': 'bg-finance-purple'
};

export function TransactionList() {
  return (
    <div className="finance-card p-6">
      <h3 className="text-lg font-semibold text-foreground mb-4">Transações Recentes</h3>
      <div className="space-y-3">
        {mockTransactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${categoryColors[transaction.category] || 'bg-muted'}`}></div>
              <div>
                <p className="font-medium text-foreground">{transaction.description}</p>
                <p className="text-sm text-muted-foreground">{transaction.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-semibold ${transaction.type === 'income' ? 'text-finance-success' : 'text-finance-danger'}`}>
                {transaction.type === 'income' ? '+' : ''}R$ {Math.abs(transaction.amount).toLocaleString('pt-BR')}
              </p>
              <p className="text-sm text-muted-foreground">{new Date(transaction.date).toLocaleDateString('pt-BR')}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
