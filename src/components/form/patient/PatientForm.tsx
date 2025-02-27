import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import TextArea from "../input/TextArea";
import Select from "../Select";
import Button from "../../ui/button/Button";

export default function PatientForm() {
  const [message, setMessage] = useState("");
  const options = [
    { value: "Doctor", label: "Doctor" },
    { value: "Staff", label: "Staff" },
    { value: "Patient", label: "Patient" },
  ];
  const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };

  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <div className="min-w-100%">
          <ComponentCard title="Users">
            <form>
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="username">User Name</Label>
                    <Input
                      type="text"
                      id="username"
                      placeholder="type your username"
                    />
                  </div>
                  <div>
                    <Label htmlFor="mobile">Mobile Number</Label>
                    <Input
                      type="text"
                      id="mobile"
                      placeholder="type your mobile number"
                    />
                  </div>
                  <div>
                    <Label>Address</Label>
                    <TextArea
                      value={message}
                      onChange={(value) => setMessage(value)}
                      rows={6}
                      placeholder="type your address"
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="info@gmail.com"
                    />
                  </div>
                  <div>
                    <Label>Select Type</Label>
                    <Select
                      options={options}
                      placeholder="Select an option"
                      onChange={handleSelectChange}
                      className="dark:bg-dark-900"
                    />
                  </div>
                </div>
                <div className="flex items-end gap-3 px-2 mt-6 lg:justify-end">
                  <Button size="sm" onClick={handleSave}>
                    Save
                  </Button>
                </div>
              </div>
            </form>
          </ComponentCard>
        </div>
      </div>
    </div>
  );
}
