import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import UserForm from "../../components/form/user/UserForm";

export default function AddUsers() {
  return (
    <div>
      <PageMeta
        title="HMP | CreateUsers"
        description="People management system user control"
      />
      <PageBreadcrumb pageTitle="Add Users" />
      <div className="grid gap-6">
        <div className="space-y-3">
          <UserForm />
        </div>
      </div>
    </div>
  );
}
