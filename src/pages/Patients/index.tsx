import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import PatientTable from "../../components/tables/PatientTable";

export default function Patients() {
  return (
    <div>
      <PageMeta
        title="HMP | Patients"
        description="People management system Patients control"
      />
      <PageBreadcrumb pageTitle="Patients" />
      <div className="grid gap-6">
        <div className="space-y-3">
          <PatientTable />
        </div>
      </div>
    </div>
  );
}
