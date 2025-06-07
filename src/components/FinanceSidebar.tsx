
import React from 'react';
import { 
  LayoutDashboard, 
  BarChart, 
  Activity,
  Menu
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger
} from '@/components/ui/sidebar';

const menuItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    url: '#dashboard',
    isActive: true
  },
  {
    title: 'Transações',
    icon: Activity,
    url: '#transactions',
    isActive: false
  },
  {
    title: 'Relatórios',
    icon: BarChart,
    url: '#reports',
    isActive: false
  },
  {
    title: 'Configurações',
    icon: Menu,
    url: '#settings',
    isActive: false
  }
];

export function FinanceSidebar() {
  return (
    <Sidebar className="border-r border-border/50 bg-sidebar backdrop-blur-sm">
      <SidebarHeader className="border-b border-border/50 p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-finance-gradient rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">F</span>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-sidebar-foreground">FinanceApp</h2>
            <p className="text-sm text-muted-foreground">Controle suas finanças</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="p-4">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                asChild 
                className={`w-full justify-start ${item.isActive ? 'bg-sidebar-primary text-sidebar-primary-foreground' : ''}`}
              >
                <a href={item.url} className="flex items-center space-x-3 px-3 py-3 rounded-lg transition-all duration-200">
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
