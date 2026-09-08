import type { Customer } from "../App";
import {
  FaArrowsRotate,
  FaBriefcase,
  FaCheck,
  FaClock,
  FaInbox,
  FaPlay,
  FaTrash,
  FaUser,
} from "react-icons/fa6";

type DisplayListProps = {
  queue: Customer[];
  onUpdateStatus: (id: string, status: string) => void;
  onRemoveCustomer: (id: string) => void;
};

function statusIcon(status: string) {
  switch (status) {
    case "waiting":
      return <FaClock className="icon" />;
    case "in_progress":
      return <FaPlay className="icon" />;
    case "completed":
      return <FaCheck className="icon" />;
    default:
      return null;
  }
}

function DisplayList({ queue, onUpdateStatus, onRemoveCustomer }: DisplayListProps) {
  const nextStatus = (status: string) => {
    if (status === "waiting") return "in_progress";
    if (status === "in_progress") return "completed";
    return "waiting";
  };

  return (
    <div className="panel">
      <h2 className="panel-title">
        Current Queue
      </h2>

      {queue.length === 0 ? (
        <p className="empty-message">
          <FaInbox className="icon-lg" />
          No customers in the queue yet.
        </p>
      ) : (
        <ul className="queue-list">
          {queue.map((customer) => (
            <li key={customer.id} className="queue-item">
              <div className="queue-item-header">
                <div>
                  <p className="customer-name">
                    <FaUser className="icon" />
                    {customer.name}
                  </p>
                  <p className="customer-service">
                    <FaBriefcase className="icon" />
                    {customer.service}
                  </p>
                </div>
                <span className={`status-badge status-${customer.status}`}>
                  {statusIcon(customer.status)}
                  {customer.status.replace("_", " ")}
                </span>
              </div>
              <div className="queue-item-actions">
                <button
                  type="button"
                  onClick={() => onUpdateStatus(customer.id, nextStatus(customer.status))}
                  className="btn btn-secondary"
                >
                  <FaArrowsRotate className="icon" />
                  Update status
                </button>
                <button
                  type="button"
                  onClick={() => onRemoveCustomer(customer.id)}
                  className="btn btn-danger"
                >
                  <FaTrash className="icon" />
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DisplayList;
