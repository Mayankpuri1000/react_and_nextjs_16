import { useState } from "react";
import DisplayForm from "./components/DisplayForm"
import DisplayList from "./components/DisplayList"

export type Customer = {
  id: string;
  name: string;
  service: string;
  status: string;
}

function App() {

  const [queue, setQueue] = useState<Customer[]>([]);

  const addToQueue = (name: string, service: string) => {
    setQueue([...queue, { id: crypto.randomUUID(), name, service, status: "waiting" }]);
  };

  const updateStatus = (id: string, status: string) => {
    setQueue(queue.map(customer => customer.id === id ? {...customer, status} : customer));
  }

  const removeFromQueue = (id: string) => {
    setQueue(queue.filter(customer => customer.id !== id));
  }


  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Queue Management Application</h1>
        <p className="app-subtitle">Manage your customers efficiently</p>
      </header>

      <main className="app-main">
        <DisplayForm onAdd={addToQueue} />
        <DisplayList queue={queue} onUpdateStatus={updateStatus} onRemoveCustomer={removeFromQueue} />
      </main>
    </div>
  );
}

export default App;
