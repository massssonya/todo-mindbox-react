import { Fragment } from "react";
import { TodoElement } from "./TodoElement";
import { ITodo } from "../types";
import { selectAllTodos } from "../redux/slices/todosSlice";
import { useAppSelector } from "../redux/hooks";

export const TodoList = () => {
  const todos = useAppSelector(selectAllTodos)
  return (
    <div className="h-[250px] overflow-y-scroll">
      {todos.map((todo: ITodo) => (
        <Fragment key={todo.id}>
          <TodoElement todo={todo}  />
        </Fragment>
      ))}
    </div>
  );
};
