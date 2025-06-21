
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LayoutDashboard, BarChart, Activity, Menu } from "lucide-react";

interface FinanceCardProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: "layout-dashboard" | "bar-chart" | "activity" | "menu";
}

const iconMap = {
  "layout-dashboard": LayoutDashboard,
  "bar-chart": BarChart,
  "activity": Activity,
  "menu": Menu,
};

export function FinanceCard({ title, value, change, positive, icon }: FinanceCardProps) {
  const IconComponent = iconMap[icon];

  return (
    <Card className="border-0 shadow-sm bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/80 hover:shadow-md transition-all duration-200">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <h3 className="text-sm font-medium text-muted-foreground tracking-tight">{title}</h3>
        <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
          <IconComponent className="h-4 w-4 text-primary" />
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <div className="flex items-center gap-1">
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              positive
                ? "text-emerald-700 bg-emerald-50 dark:text-emerald-400 dark:bg-emerald-950"
                : "text-red-700 bg-red-50 dark:text-red-400 dark:bg-red-950"
            }`}
          >
            {change}
          </span>
          <span className="text-xs text-muted-foreground">em relação ao mês anterior</span>
        </div>
      </CardContent>
    </Card>
  );
}
