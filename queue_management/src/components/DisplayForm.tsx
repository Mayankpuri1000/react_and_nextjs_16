import { useState } from "react";
import { FaUserPlus } from "react-icons/fa6";

type DisplayFormProps = {
  onAdd: (name: string, service: string) => void;
};

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
    <div className="panel">
      <h1 className="panel-title">Add to Queue</h1>

      <form className="queue-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="field"
        >
          <option>Select your option...</option>
          <option>Consultation</option>
          <option>Payment</option>
          <option>Support</option>
        </select>
        <button type="submit" className="btn btn-primary">
          <FaUserPlus />
          Add to Queue
        </button>
      </form>
    </div>
  );
}

export default DisplayForm;
