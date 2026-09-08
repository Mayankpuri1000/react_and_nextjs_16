import { useState } from "react";

type ButtonProps = {
  text: string;
  color: string;
  size?: string;
  onClick: () => void;
  disabled?: boolean;
};

function Button({ text, color, size, onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 
      ${size === "small" ? "text-sm px-4 py-1" : ""}
      ${size === "medium" ? "text-4xl px-6 py-2" : ""}
      ${size === "large" ? "text-6xl px-8 py-3" : ""}
      ${color === "primary" ? "bg-blue-600 hover:bg-blue-500 text-white" : ""}
      ${color === "secondary" ? "bg-gray-600 hover:bg-gray-500 text-white" : ""}
      ${color === "danger" ? "bg-red-600 hover:bg-red-500 text-white" : ""}
      ${color === "success" ? "bg-green-600 hover:bg-green-500 text-white" : ""}
      ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
      
      `}
    >
      {text}
    </button>
  );
}
function BasicProps() {
  const [clickCount, setClickCount] = useState(0);
  return (
    <section className="p-8 bg-white text-black rounded-xl shadow-2xl">
      <h2 className="font-extrabold text-3xl">Basic Props</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
        cupiditate reiciendis voluptates saepe quasi iusto!
      </p>

      <div className="space-y-4">
        <h3>Different Colors</h3>

        <div className="flex flex-wrap gap-3">
          <Button
            text="Primary Button"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Secondary Button"
            color="secondary"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Danger Button"
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Success Button"
            color="success"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>
      <div className="space-y-4">
        <h3>Different Sizes</h3>

        <div className="flex flex-wrap gap-3">
          <Button
            text="Small Button"
            color="primary"
            size="small"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Large Button"
            color="secondary"
            size="large"
            disabled
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Danger Button"
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
          />
          <Button
            text="Success Button"
            color="success"
            onClick={() => setClickCount(clickCount + 1)}
          />
        </div>
      </div>
    </section>
  );
}

export default BasicProps;
