import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import Button from "../../components/ui/button/Button";
import { PlusIcon, PencilIcon, TrashBinIcon } from "../../icons";
import { Link } from "react-router-dom";

import Badge from "../ui/badge/Badge";

interface Order {
  id: number;
  user_name: string;
  email: string;
  contact: string;
  role: string;
  address: string;
  status: string;
}

// Define the table data using the interface
const tableData: Order[] = [
  {
    id: 1,
    user_name: "Lindsey Curtis",
    email: "test@gmail.com",
    role: "Doctor",
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

export default function DoctorTable() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="p-5 text-align-end">
        <Link to="/doctors/add">
          <Button size="sm" variant="outline" startIcon={<PlusIcon />}>
            Add
          </Button>
        </Link>
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
                <TableCell
                  isHeader
                  className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHeader>

            {/* Table Body */}
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {tableData.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="px-5 py-4 sm:px-6 text-start">
                    {order.user_name}
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
                      let badgeColor: "success" | "warning" | "error";
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
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {(() => {
                      return (
                        <>
                          <Button
                            size="sm"
                            className="mr-2 custom-btn-primary"
                            variant="success"
                          >
                            <PencilIcon />
                          </Button>
                          <Button
                            size="sm"
                            className="custom-btn-danger"
                            variant="error"
                          >
                            <TrashBinIcon />
                          </Button>
                        </>
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
