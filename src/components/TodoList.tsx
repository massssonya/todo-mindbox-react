import { Fragment } from "react";
import { TodoElement } from "./TodoElement";
import { ITodo } from "../types";
import {
	selectAllTodos,
	selectActiveTodos,
	selectCompletedTodos,
	selectSelector
} from "../redux/slices/todosSlice";
import { useAppSelector } from "../redux/hooks";

export const TodoList = () => {
	const selector = useAppSelector(selectSelector);
	const todos = useAppSelector((state) => {
		switch (selector) {
			case "selectAllTodos":
				return selectAllTodos(state);
			case "selectActiveTodos":
				return selectActiveTodos(state);
			case "selectCompletedTodos":
				return selectCompletedTodos(state);
			default:
				return [];
		}
	});

	return (
		<div className="h-[250px] overflow-y-scroll">
			{todos.map((todo: ITodo) => (
				<Fragment key={todo.id}>
					<TodoElement todo={todo} />
				</Fragment>
			))}
		</div>
	);
};
