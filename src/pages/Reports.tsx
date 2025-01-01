import { AdminLayout } from "@/components/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockReports = [
  {
    id: 1,
    reportedBy: "John Doe",
    reportedUser: "Alice Smith",
    reason: "Inappropriate behavior in comments",
    status: "pending",
  },
  {
    id: 2,
    reportedBy: "Jane Smith",
    reportedUser: "Bob Johnson",
    reason: "Spam in discussion forum",
    status: "under-review",
  },
  {
    id: 3,
    reportedBy: "Mike Johnson",
    reportedUser: "Carol Williams",
    reason: "Fake profile",
    status: "resolved",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-yellow-500";
    case "under-review":
      return "bg-blue-500";
    case "resolved":
      return "bg-green-500";
    default:
      return "bg-gray-500";
  }
};

export default function Reports() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Reports</h1>
          <p className="text-muted-foreground">
            Review and manage user reports
          </p>
        </div>

        <div className="grid gap-4">
          {mockReports.map((report) => (
            <Card key={report.id} className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex gap-2 items-center">
                    <h3 className="font-semibold">{report.reportedBy}</h3>
                    <span className="text-muted-foreground">reported</span>
                    <h3 className="font-semibold">{report.reportedUser}</h3>
                  </div>
                  <p className="text-sm">{report.reason}</p>
                </div>
                <Badge className={getStatusColor(report.status)}>
                  {report.status}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}