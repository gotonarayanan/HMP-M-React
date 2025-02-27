import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import StaffTable from "../../components/tables/StaffTable";

export default function Staffs() {
  return (
    <div>
      <PageMeta
        title="HMP | Staffs"
        description="People management system Staffs control"
      />
      <PageBreadcrumb pageTitle="Staffs" />
      <div className="grid gap-6">
        <div className="space-y-3">
          <StaffTable />
        </div>
      </div>
    </div>
  );
}
