import { useRef } from "react";

type CustomInputProps = {
  label: string;
  placeholder: string;
  className?: string;
  ref?: React.Ref<HTMLInputElement>;
};
function CustomInput({ label, placeholder, className, ref }: CustomInputProps) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      <input
        ref={ref}
        type="text"
        placeholder={placeholder}
        className={`w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      />
    </div>
  );
}

CustomInput.displayName = "CustomInput"

function RefProps() {
  const inputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  function focusSecondInput() {
    secondInputRef.current?.focus();
  }

  function getInputValue() {
    return inputRef.current?.value;
  }

  function clearInputValue() {
    inputRef.current!.value = "";
    inputRef.current?.focus();
  }

  return <section className="p-8 bg-white rounded-xl shadow-lg">
    <h2 className="text-2xl font-bold mb-6 text-center">Ref Props Example</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem temporibus possimus voluptatum eligendi quasi corporis?</p>

    <div>
      <div>
        <h3>Try it out</h3>
        <CustomInput ref={inputRef} label="First Name" placeholder="Enter your first name"  />
      </div>

      <button className="text-black bg-blue-500 px-4 py-2 rounded-lg" onClick={focusInput}>Focus Input</button>
      <button className="text-black bg-blue-500 px-4 py-2 rounded-lg" onClick={focusSecondInput}>Focus Second Input</button>
      <button className="text-black bg-blue-500 px-4 py-2 rounded-lg" onClick={getInputValue}>Get Input Value</button>
      <button className="text-black bg-blue-500 px-4 py-2 rounded-lg" onClick={clearInputValue}>Clear Input Value</button>
    </div>
  </section>;
}

export default RefProps;
