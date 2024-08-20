import {
	removeCompletedTodos,
	selectNumberActiveTodos,
	setSelector
} from "../redux/slices/todosSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export const FooterElement = () => {
	const numberActiveTodos = useAppSelector(selectNumberActiveTodos);
	const dispatch = useAppDispatch();
	return (
		<footer className="px-4 py-2 flex flex-row items-center justify-between text-base border">
			<span>{numberActiveTodos} items left</span>
			<div className="flex flex-row gap-2 items-center justify-between">
				<button
					id="all"
					onClick={() => dispatch(setSelector("selectAllTodos"))}
				>
					All
				</button>
				<button
					id="active"
					onClick={() => dispatch(setSelector("selectActiveTodos"))}
				>
					Active
				</button>
				<button
					id="completed"
					onClick={() => dispatch(setSelector("selectCompletedTodos"))}
				>
					Completed
				</button>
			</div>
			<button onClick={() => dispatch(removeCompletedTodos())}>
				Clear Completes
			</button>
		</footer>
	);
};
