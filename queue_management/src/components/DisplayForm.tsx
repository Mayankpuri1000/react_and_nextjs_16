import { useState } from "react";
import { FaUserPlus } from "react-icons/fa6";

type DisplayFormProps = {
  onAdd: (name: string, service: string) => void;
};
const fieldClassName =
  "w-full rounded-lg border border-zinc-600 bg-[#1c1e22] px-4 py-3 text-white outline-none transition-colors placeholder:text-zinc-400 focus:border-purple-600 focus:ring-1 focus:ring-purple-600";

function DisplayForm({ onAdd }: DisplayFormProps) {
  const [name, setName] = useState<string>("");
  const [service, setService] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !service.trim()) return;

    onAdd(name, service);
    setName("");
    setService("");
  };

  return (
    <div className="w-full max-w-md rounded-xl border border-zinc-700/60 bg-[#1c1e22] p-6 shadow-lg">
      <h1 className="text-3xl font-extrabold text-purple-600">Add to Queue</h1>

      <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className={fieldClassName}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className={fieldClassName}
        >
          <option>Select your option...</option>
          <option>Consultation</option>
          <option>Payment</option>
          <option>Support</option>
        </select>
        <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-purple-700"
        >
          <FaUserPlus />
          Add to Queue
        </button>
      </form>
    </div>
  );
}

export default DisplayForm;
