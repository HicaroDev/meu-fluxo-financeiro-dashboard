
export function TransactionList() {
  const transactions = [
    { id: 1, description: "Supermercado ABC", amount: -250.00, date: "2024-01-15", category: "Alimentação" },
    { id: 2, description: "Salário Janeiro", amount: 4500.00, date: "2024-01-01", category: "Receita" },
    { id: 3, description: "Conta de Luz", amount: -180.50, date: "2024-01-10", category: "Utilidades" },
    { id: 4, description: "Freelance Design", amount: 800.00, date: "2024-01-08", category: "Receita" },
    { id: 5, description: "Restaurante XYZ", amount: -95.00, date: "2024-01-12", category: "Alimentação" },
  ];

  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center justify-between p-4 rounded-lg border border-gray-100 bg-gray-50/50 hover:bg-gray-100/50 transition-colors"
        >
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <div className={`h-2 w-2 rounded-full ${
                transaction.amount > 0 ? 'bg-green-500' : 'bg-red-500'
              }`} />
              <div>
                <p className="font-medium text-gray-900 text-sm">{transaction.description}</p>
                <p className="text-xs text-gray-500">{transaction.category} • {transaction.date}</p>
              </div>
            </div>
          </div>
          <div className={`text-sm font-semibold ${
            transaction.amount > 0 
              ? 'text-green-600' 
              : 'text-red-600'
          }`}>
            {transaction.amount > 0 ? '+' : ''}R$ {Math.abs(transaction.amount).toFixed(2)}
          </div>
        </div>
      ))}
    </div>
  );
}
