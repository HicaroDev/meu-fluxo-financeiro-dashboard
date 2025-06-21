
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
    <Card className="border border-gray-200/50 shadow-sm bg-white hover:shadow-md transition-all duration-200 hover:scale-[1.01]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
        <h3 className="text-sm font-medium text-gray-600 tracking-tight">{title}</h3>
        <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center border border-gray-100">
          <IconComponent className="h-5 w-5 text-slate-600" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
              positive
                ? "text-green-700 bg-green-50 border border-green-200"
                : "text-red-700 bg-red-50 border border-red-200"
            }`}
          >
            {change}
          </span>
          <span className="text-xs text-gray-500">em relação ao mês anterior</span>
        </div>
      </CardContent>
    </Card>
  );
}
