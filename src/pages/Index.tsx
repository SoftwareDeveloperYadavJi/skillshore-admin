import { Card } from "@/components/ui/card";
import { AdminLayout } from "@/components/layout/AdminLayout";
import { MessageSquare, Flag, CheckCircle, AlertCircle } from "lucide-react";

const stats = [
  {
    title: "Total Queries",
    value: "156",
    icon: MessageSquare,
    color: "text-blue-500",
  },
  {
    title: "Open Reports",
    value: "23",
    icon: Flag,
    color: "text-red-500",
  },
  {
    title: "Resolved Today",
    value: "45",
    icon: CheckCircle,
    color: "text-green-500",
  },
  {
    title: "Pending Review",
    value: "12",
    icon: AlertCircle,
    color: "text-yellow-500",
  },
];

export default function Index() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your platform's activity and metrics
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="p-6">
              <div className="flex items-center gap-4">
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <h2 className="text-3xl font-bold">{stat.value}</h2>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}