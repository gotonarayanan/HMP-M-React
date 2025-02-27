import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import CreateForm from "../../components/form/doctor/CreateForm";

export default function AddPatients() {
  return (
    <div>
      <PageMeta
        title="HMP | Create Patient"
        description="People management system patients control"
      />
      <PageBreadcrumb pageTitle="Add Patients" />
      <div className="grid gap-6">
        <div className="space-y-3">
          <CreateForm />
        </div>
      </div>
    </div>
  );
}
