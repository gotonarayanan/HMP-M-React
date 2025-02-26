import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Button from "../../components/ui/button/Button";
import { PlusIcon } from "../../icons";

import Badge from "../ui/badge/Badge";

interface Order {
  id: number;
  user: {
    image: string;
    name: string;
    role: string;
  };
  projectName: string;
  team: {
    images: string[];
  };
  status: string;
  budget: string;
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    user_name: "Lindsey Curtis",
    email: "test@gmail.com",
    role: "Web Designer",
    address: "3.9K",
    contact: "9789641697",
    status: "Active",
  },
  {
    id: 2,
    user_name: "Kaiya George",
    email: "test@gmail.com",
    role: "Doctor",
    address: "24.9K",
    contact: "9789641697",
    status: "Pending",
  },
  {
    id: 3,
    user_name: "Zain Geidt",
    email: "test@gmail.com",
    role: "Doctor",
    address: "12.7K",
    contact: "9789641697",
    status: "Active",
  },
  {
    id: 4,
    user_name: "Abram Schleifer",
    email: "test@gmail.com",
    contact: "9789641697",
    role: "Doctor",
    address: "2.8K",
    status: "Cancel",
  },
  {
    id: 5,
    user_name: "Carla George",
    email: "test@gmail.com",
    contact: "9789641697",
    role: "Staff",
    address: "4.5K",
    status: "Active",
  },
];

export default function UserTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="p-5 text-align-end">
        <Button
          size="sm"
          variant="outline"
          startIcon={<PlusIcon className="size-5" />}
        >
          Add
        </Button>
      </div>
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-100%">
          <Table>
            {/* Table Header */}
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  User
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Email
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Mobile
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Address
                </TableCell>
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Status
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    <div className="flex items-center gap-3">
                      <div>
                        <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                          {order.user_name}
                        </span>
                        <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                          {order.role}
                        </span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {order.email}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {order.contact}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                    {order.address}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {(() => {
                      let badgeColor;
                      if (order.status === "Active") {
                        badgeColor = "success";
                      } else if (order.status === "Pending") {
                        badgeColor = "warning";
                      } else {
                        badgeColor = "error";
                      }
                      return (
                        <Badge size="sm" color={badgeColor}>
                          {order.status}
                        </Badge>
                      );
                    })()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
