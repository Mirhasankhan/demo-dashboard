import { useForm } from "react-hook-form";
import { useState } from "react";

type FormValues = {
  textInput: string;
  selectInput: string;
  files?: FileList;
};

type Option = {
  value: string;
  label: string;
};

type ReusableFormProps = {
  onSubmit: (data: FormValues) => void;
  options: Option[];
};

const ReusableForm: React.FC<ReusableFormProps> = ({ onSubmit, options }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-4 bg-white rounded-lg shadow-md space-y-4"
    >
      <div>
        <label className="block text-sm font-medium">Text Input</label>
        <input
          type="text"
          {...register("textInput", { required: "This field is required" })}
          className="w-full mt-1 p-2 border rounded-lg"
        />
        {errors.textInput && (
          <p className="text-red-500 text-sm">{errors.textInput.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Select Option</label>
        <select
          {...register("selectInput", { required: "Please select an option" })}
          className="w-full mt-1 p-2 border rounded-lg"
        >
          <option value="">Select an option</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.selectInput && (
          <p className="text-red-500 text-sm">{errors.selectInput.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium">Upload Files</label>
        <input
          type="file"
          multiple
          {...register("files", {
            onChange: (e) => handleFileChange(e),
          })}
          className="w-full mt-1 p-2 border rounded-lg"
        />

        {files.length > 0 && (
          <ul className="mt-2 text-sm">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default ReusableForm;
