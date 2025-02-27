import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import UserTable from "../../components/tables/UserTable";

export default function Users() {
  return (
    <div>
      <PageMeta
        title="HMP | Users"
        description="People management system user control"
      />
      <PageBreadcrumb pageTitle="Users" />
      <div className="grid gap-6">
        <div className="space-y-3">
          <UserTable />
        </div>
      </div>
    </div>
  );
}
