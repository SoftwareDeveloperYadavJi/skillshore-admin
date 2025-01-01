import { AdminLayout } from "@/components/layout/AdminLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

type Status = "pending" | "under-review" | "resolved";

type Report = {
  id: number;
  reportedBy: string;
  reportedUser: string;
  reason: string;
  status: Status;
};

const mockReports: Report[] = [
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

const getStatusColor = (status: Status) => {
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
  const [reports, setReports] = useState<Report[]>(mockReports);

  const handleStatusChange = (reportId: number, newStatus: Status) => {
    setReports((prevReports) =>
      prevReports.map((report) =>
        report.id === reportId ? { ...report, status: newStatus } : report
      )
    );
    toast({
      title: "Status Updated",
      description: `Report status has been updated to ${newStatus}`,
    });
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Reports</h1>
          <p className="text-muted-foreground">Review and manage user reports</p>
        </div>

        <div className="grid gap-4">
          {reports.map((report) => (
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
                <div className="flex items-center gap-2">
                  <Select
                    value={report.status}
                    onValueChange={(value: Status) =>
                      handleStatusChange(report.id, value)
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="under-review">Under Review</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                  <Badge className={getStatusColor(report.status)}>
                    {report.status}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}