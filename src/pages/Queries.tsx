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

const queries = [
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
    message: "Certificate not generated",
    status: "in_progress",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    message: "Payment issue",
    status: "resolved",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "pending":
      return "bg-yellow-500";
    case "in_progress":
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

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {queries.map((query) => (
              <TableRow key={query.id}>
                <TableCell>{query.name}</TableCell>
                <TableCell>{query.email}</TableCell>
                <TableCell>{query.message}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(query.status)}>
                    {query.status.replace("_", " ").toUpperCase()}
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