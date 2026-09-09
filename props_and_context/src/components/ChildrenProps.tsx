import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  title: string;
  color: string;
}

function Card({ children, title, color = "blue" }: CardProps) {
  const colorClasses = {
    blue: "border-blue-500 bg-blue-500",
    green: "border-green-500 bg-green-500",
    purple: "border-purple-500 bg-purple-500",
    red: "border-red-500 bg-red-500",
  };
  
  return (
    <div className={`border-l-4 p-6 rounded-lg shadow-md ${colorClasses[color as keyof typeof colorClasses]}`}>
      {title && <h2 className="text-lg text-gray-600 font-bold mb-4">{title}</h2>}
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

function ChildrenProps() {
  return (
    <div>
      <Card title="Card Title" color="blue">
        <h2>Card Title</h2>
      </Card>
    </div>
  );
}

export default ChildrenProps;
