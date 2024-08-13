import { ITodo } from "../types";

export const TodoElement = ({
  todo,
}: {
  todo: ITodo;
}) => {
  const { id, value, isCompleted } = todo;
  // const handleClick = () => {
  //   onClick(id);
  // }
  const checked = "text-gray-400 line-through";
  return (
    <div
      className={`py-4 pl-2 flex items-center border ${isCompleted && checked}`}
    >
      <input
        type="checkbox"
        className="scale-[1.5] ml-1"
        checked={isCompleted}
        // onClick={handleClick}
      />
      <label className="ml-4 p-2">{value}</label>
    </div>
  );
};
