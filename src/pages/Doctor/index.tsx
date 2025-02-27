import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import DoctorTable from "../../components/tables/DoctorTable";

export default function Doctors() {
  return (
    <div>
      <PageMeta
        title="HMP | Doctors"
        description="People management system Doctors control"
      />
      <PageBreadcrumb pageTitle="Doctors" />
      <div className="grid gap-6">
        <div className="space-y-3">
          <DoctorTable />
        </div>
      </div>
    </div>
  );
}
