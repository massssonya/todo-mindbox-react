import {
  selectAllTodos,
  selectActiveTodos,
  selectCompletedTodos,
  selectNumberActiveTodos,
} from "../redux/slices/todosSlice";
import { useAppSelector } from "../redux/hooks";

export const FooterElement = () => {
  const counterActiveTodos = useAppSelector(selectNumberActiveTodos);
  const handleAllTodos = useAppSelector(selectAllTodos);
  const handleActiveTodos = useAppSelector(selectActiveTodos);
  const handleCompletedTodos = useAppSelector(selectCompletedTodos);

  return (
    <footer className="flex flex-row items-center justify-between text-base">
      <span>{counterActiveTodos} items left</span>
      <div className="flex flex-row gap-2 items-center justify-between">
        <button id="all" onClick={() => handleAllTodos}>All</button>
        <button id="active" onClick={() => handleActiveTodos}>Active</button>
        <button id="completed" onClick={() => handleCompletedTodos}>Completed</button>
      </div>
      <button>Clear Completes</button>
    </footer>
  );
};
