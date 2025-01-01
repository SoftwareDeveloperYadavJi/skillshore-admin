import { AdminLayout } from "@/components/layout/AdminLayout";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const reports = [
  {
    id: 1,
    reportedBy: "Alice Cooper",
    reportedUser: "Bob Dylan",
    reason: "Inappropriate behavior in comments",
    status: "under_review",
  },
  {
    id: 2,
    reportedBy: "Charlie Brown",
    reportedUser: "David Smith",
    reason: "Spam in discussion forum",
    status: "resolved",
  },
  {
    id: 3,
    reportedBy: "Eve Johnson",
    reportedUser: "Frank Miller",
    reason: "Fake profile information",
    status: "pending",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-yellow-500";
    case "under_review":
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

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Reported By</TableHead>
              <TableHead>Reported User</TableHead>
              <TableHead>Reason</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.id}>
                <TableCell>{report.reportedBy}</TableCell>
                <TableCell>{report.reportedUser}</TableCell>
                <TableCell>{report.reason}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(report.status)}>
                    {report.status.replace("_", " ").toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </AdminLayout>
  );
}