
import { FinanceSidebar } from "@/components/FinanceSidebar";
import { FinanceCard } from "@/components/FinanceCard";
import { TransactionList } from "@/components/TransactionList";
import { FinanceChart } from "@/components/FinanceChart";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <FinanceSidebar />
        <main className="flex-1 flex flex-col">
          <header className="border-b border-gray-200 bg-white">
            <div className="flex h-16 items-center px-6 gap-4">
              <SidebarTrigger className="hover:bg-gray-100 hover:text-gray-900 transition-colors p-2 rounded-lg" />
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-gray-900">
                  financeFlow
                </h1>
              </div>
            </div>
          </header>
          
          <div className="flex-1 p-6 space-y-6 bg-gray-50">
            {/* Cards Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <FinanceCard
                title="Receita Total"
                value="R$ 12.500,00"
                change="+12.5%"
                positive={true}
                icon="bar-chart"
              />
              <FinanceCard
                title="Despesas"
                value="R$ 8.200,00" 
                change="-3.2%"
                positive={false}
                icon="activity"
              />
              <FinanceCard
                title="Saldo Atual"
                value="R$ 4.300,00"
                change="+8.1%"
                positive={true}
                icon="layout-dashboard"
              />
              <FinanceCard
                title="Investimentos"
                value="R$ 15.800,00"
                change="+15.3%"
                positive={true}
                icon="bar-chart"
              />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Chart Section */}
              <div className="lg:col-span-2">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h2 className="text-xl font-semibold mb-6 text-gray-900">Visão Geral Mensal</h2>
                  <FinanceChart />
                </div>
              </div>

              {/* Transactions Section */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-6 text-gray-900">Transações Recentes</h2>
                <TransactionList />
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
