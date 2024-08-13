import { useState } from "react";

export const InputElement = ({
  addTodo
}: {
  addTodo: (e:string) => void;
}) => {
  const [value, setValue] = useState("");
  const handleKeyPress = (event:React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      addTodo(value)
      setValue("")
    }
    
  };
  return (
    <div className="py-4 pl-2 flex items-center border">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-chevron-down"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
      <input
        type="text"
        placeholder="What needs to be done?"
        className="ml-4 p-2 h-full focus:outline-none"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyUp={handleKeyPress}
      />
    </div>
  );
};
