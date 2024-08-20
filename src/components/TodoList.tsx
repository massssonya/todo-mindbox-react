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

const selectorsDict: { [key: string]: string } = {
	selectAllTodos: "",
	selectActiveTodos: "Active",
	selectCompletedTodos: "Completed"
};

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
		<div className="relative flex flex-col w-full h-[250px] overflow-y-scroll">
			{todos?.length === 0 && (
				<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-center">
					No {selectorsDict[selector]} todos
				</p>
			)}
			{todos?.map((todo: ITodo) => (
				<Fragment key={todo.id}>
					<TodoElement todo={todo} />
				</Fragment>
			))}
		</div>
	);
};
