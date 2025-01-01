import { AdminLayout } from "@/components/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockQueries = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    message: "Need help with course access",
    status: "pending",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    message: "Technical issue with video playback",
    status: "in-progress",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    message: "Certificate not generated",
    status: "resolved",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-yellow-500";
    case "in-progress":
      return "bg-blue-500";
    case "resolved":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
};

export default function Queries() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Queries</h1>
          <p className="text-muted-foreground">
            Manage and respond to user queries
          </p>
        </div>

        <div className="grid gap-4">
          {mockQueries.map((query) => (
            <Card key={query.id} className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="font-semibold">{query.name}</h3>
                  <p className="text-sm text-muted-foreground">{query.email}</p>
                  <p className="text-sm">{query.message}</p>
                </div>
                <Badge className={getStatusColor(query.status)}>
                  {query.status}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}