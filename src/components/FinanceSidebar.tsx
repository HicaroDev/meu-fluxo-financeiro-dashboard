
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
import { LayoutDashboard, BarChart, Activity, Menu } from "lucide-react";

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
    icon: Menu,
    url: "/settings",
  },
];

export function FinanceSidebar() {
  return (
    <Sidebar className="border-r bg-sidebar">
      <SidebarHeader className="border-b border-sidebar-border p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
            F
          </div>
          <div>
            <h2 className="text-lg font-semibold text-sidebar-foreground">financeFlow</h2>
            <p className="text-sm text-sidebar-foreground/60">Seu assistente financeiro</p>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="px-3 py-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60 text-xs font-medium uppercase tracking-wide px-3 pb-2">
            Menu Principal
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className="w-full justify-start hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors rounded-lg"
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
      
      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="text-xs text-sidebar-foreground/60 text-center">
          © 2024 financeFlow
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
