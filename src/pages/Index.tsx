
import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { FinanceSidebar } from '@/components/FinanceSidebar';
import { FinanceCard } from '@/components/FinanceCard';
import { TransactionList } from '@/components/TransactionList';
import { FinanceChart } from '@/components/FinanceChart';
import { Activity, BarChart, LayoutDashboard, Menu } from 'lucide-react';

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <FinanceSidebar />
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <SidebarTrigger className="lg:hidden" />
                <div>
                  <h1 className="text-3xl font-bold gradient-text">Dashboard Financeiro</h1>
                  <p className="text-muted-foreground">Acompanhe suas finanças em tempo real</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Último acesso</p>
                <p className="font-medium">Hoje, {new Date().toLocaleDateString('pt-BR')}</p>
              </div>
            </div>

            {/* Finance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <FinanceCard
                title="Saldo Total"
                value="R$ 12.450"
                subtitle="Disponível"
                icon={LayoutDashboard}
                gradient="bg-success-gradient"
                trend={{ value: "+8.2%", isPositive: true }}
              />
              <FinanceCard
                title="Receitas"
                value="R$ 6.200"
                subtitle="Este mês"
                icon={Activity}
                gradient="bg-finance-gradient"
                trend={{ value: "+12.5%", isPositive: true }}
              />
              <FinanceCard
                title="Despesas"
                value="R$ 4.100"
                subtitle="Este mês"
                icon={BarChart}
                gradient="bg-danger-gradient"
                trend={{ value: "-3.1%", isPositive: false }}
              />
              <FinanceCard
                title="Economia"
                value="R$ 2.100"
                subtitle="Este mês"
                icon={Menu}
                gradient="bg-finance-gradient"
                trend={{ value: "+15.8%", isPositive: true }}
              />
            </div>

            {/* Charts */}
            <div className="mb-8">
              <FinanceChart />
            </div>

            {/* Recent Transactions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <TransactionList />
              </div>
              
              {/* Quick Stats */}
              <div className="finance-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Resumo Rápido</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Meta de Economia</span>
                    <span className="font-semibold text-finance-success">85%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-finance-success h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-muted-foreground">Cartão de Crédito</span>
                    <span className="font-semibold text-finance-warning">R$ 1.250</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-finance-warning h-2 rounded-full" style={{ width: '35%' }}></div>
                  </div>

                  <div className="mt-6 p-4 bg-finance-gradient rounded-lg">
                    <p className="text-white text-sm font-medium">💡 Dica do Dia</p>
                    <p className="text-white/90 text-sm mt-1">
                      Você gastou 15% menos em alimentação este mês. Continue assim!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
