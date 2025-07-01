import { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const InputField = ({
  label,
  type = "text",
  placeholder,
  register,
  error,
}: InputFieldProps) => (
  <div>
    {label && (
      <label className="block text-sm font-semibold text-black mb-1">
        {label}
      </label>
    )}
    <input
      type={type}
      placeholder={placeholder}
      {...register}
      className="border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none text-black placeholder:text-black w-full"
    />
    {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
  </div>
);

export default InputField;
