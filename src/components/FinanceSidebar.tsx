
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { LayoutDashboard, BarChart, Activity, Settings } from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    url: "/",
  },
  {
    title: "Relatórios",
    icon: BarChart,
    url: "/reports",
  },
  {
    title: "Transações",
    icon: Activity,
    url: "/transactions",
  },
  {
    title: "Configurações",
    icon: Settings,
    url: "/settings",
  },
];

export function FinanceSidebar() {
  return (
    <Sidebar className="border-r border-gray-200 bg-white">
      <SidebarHeader className="border-b border-gray-100 p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white font-bold text-lg">
            F
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">financeFlow</h2>
            <p className="text-sm text-gray-500">Seu assistente financeiro</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-500 text-xs font-medium uppercase tracking-wide px-3 pb-2">
            Menu Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="w-full justify-start hover:bg-gray-50 hover:text-gray-900 transition-colors rounded-lg text-gray-700"
                  >
                    <a href={item.url} className="flex items-center gap-3 p-3">
                      <item.icon className="h-5 w-5" />
                      <span className="font-medium">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="border-t border-gray-100 p-4">
        <div className="text-xs text-gray-400 text-center">
          © 2024 financeFlow
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
