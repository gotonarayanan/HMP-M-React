import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import TextArea from "../input/TextArea";
import Select from "../Select";
import Button from "../../ui/button/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [message, setMessage] = useState("");
  const options = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Transgender", label: "Transgender" },
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
          <ComponentCard title="Doctors">
            <form>
              <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="username">Patient Name</Label>
                    <Input
                      type="text"
                      id="username"
                      placeholder="type your name"
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
                    <Label htmlFor="mobile">Date of Birth</Label>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Select a date"
                      className="rounded bg-transparent text-gray-800 border-gray-300 focus:border-brand-300 focus:ring-brand-500/20 dark:border-gray-700 dark:text-white/90  dark:focus:border-brand-800 w-100"
                    />
                  </div>
                  <div>
                    <Label htmlFor="age">Age</Label>
                    <Input type="number" id="age" placeholder="type your age" />
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
                    <Label htmlFor="mobile">Emergency Contact</Label>
                    <Input
                      type="text"
                      id="emg_mobile"
                      placeholder="type your contact number"
                    />
                  </div>
                  <div>
                    <Label>Select Gender</Label>
                    <Select
                      options={options}
                      placeholder="Select an option"
                      onChange={handleSelectChange}
                      className="dark:bg-dark-900"
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
