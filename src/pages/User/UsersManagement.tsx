import ComponentCard from "../../components/common/ComponentCard";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";
import Select from "../../components/form/Select";
import { useState } from "react";
import TextArea from "../../components/form/input/TextArea";

export default function FormElements() {
    const options = [
      { value: "Doctor", label: "Doctor" },
      { value: "Lab_Person", label: "Lab Person" },
      { value: "Staff", label: "Staff" },
    ];
    const handleSelectChange = (value: string) => {
      console.log("Selected value:", value);
    };
  const [message, setMessage] = useState("");


    
  return (
    <ComponentCard title="User Creation">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <div className="space-y-6">
        <div>
          <Label htmlFor="inputTwo">Name</Label>
          <Input type="text" id="inputTwo" placeholder="Enter the user Name" />
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <Label htmlFor="inputTwo">Email</Label>
          <Input type="text" id="inputTwo" placeholder="example@email.com" />
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <Label htmlFor="inputTwo">Mobile Number</Label>
          <Input type="text" id="inputTwo" placeholder="xxxxxxxxxx" />
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <Label>Select User Type</Label>
          <Select
            options={options}
            placeholder="Select an option"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
        </div>
      </div>
      <div className="space-y-6">
        <div>
          <Label>Address</Label>
          <TextArea
            value={message}
            onChange={(value) => setMessage(value)}
            rows={6}
          />
        </div>
      </div>

      </div>
    </ComponentCard>
  );
}
