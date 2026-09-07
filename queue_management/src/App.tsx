import { useState } from "react";
import DisplayForm from "./components/DisplayForm"
import DisplayList from "./components/DisplayList"

type Customer = {
  id: string;
  name: string;
  service: string;
  status: string;
}

function App() {

  const [queue, setQueue] = useState([]);

  const addToQueue = (customer: Customer) => {
    // add the customer to the queue
  }

  const updateStatus = (id: string, status: string) => {
    // update the status of the customer
  }

  const removeFromQueue = (id: string) => {
    // remove the customer from the queue
  }


  return (
    <div className="flex flex-col items-center justify-center gap-3 w-full">
      <header className="flex flex-col items-center justify-center gap-3">
        <h1 className="text-3xl font-extrabold text-purple-600">Queue Management Application</h1>
        <p>Manage your customers efficiently</p>
      </header>

      <main className="flex items-center justify-center mt-5 gap-3 w-full">
        <DisplayForm onAdd={addToQueue} />
        <DisplayList />
      </main>
    </div>

  )
}

export default App