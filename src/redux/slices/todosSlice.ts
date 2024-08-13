import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface ITodo {
	id: string;
	value: string;
	isCompleted: boolean;
}

interface IState {
	todos: ITodo[];
	selector: string;
}

export const initialState: IState  = {
	todos: [
		{
			id: "todo1",
			value: "Task 1",
			isCompleted: false
		},
		{
			id: "todo2",
			value: "Task 2",
			isCompleted: true
		},
		{
			id: "todo3",
			value: "Task 3",
			isCompleted: false
		}
	],
	selector: "selectAllTodos"
};

export const todosSlice = createSlice({
	name: "todos",
	initialState,
	selectors: {
		selectAllTodos: (state) => state.todos,
		selectActiveTodos: (state) =>
			state.todos.filter((todo) => !todo.isCompleted),
		selectCompletedTodos: (state) =>
			state.todos.filter((todo) => todo.isCompleted),
		selectNumberActiveTodos: (state) =>
			state.todos.filter((todo) => !todo.isCompleted).length,
		selectSelector: (state) => state.selector
	},
	reducers: {
		addTodo: (state, action: PayloadAction<ITodo["value"]>) => {
			const newId = Date.now().toString();
			state.todos.push({
				id: newId,
				value: action.payload,
				isCompleted: false
			});
		},
		toggleTodo: (state, action: PayloadAction<ITodo["id"]>) => {
			return {
				...state,
				todos: state.todos.map((todo) => {
					if (todo.id === action.payload) {
						return { ...todo, isCompleted: !todo.isCompleted };
					}
					return todo;
				})
			};
		},
		removeCompletedTodos: (state) => {
			return {
				...state,
				todos: state.todos.filter((todo) => !todo.isCompleted)
			};
		},
		setSelector: (state, action: PayloadAction<IState["selector"]>) => {
			state.selector = action.payload;
		}
	}
});

export const { addTodo, toggleTodo, removeCompletedTodos, setSelector } =
	todosSlice.actions;
export const {
	selectAllTodos,
	selectNumberActiveTodos,
	selectActiveTodos,
	selectCompletedTodos,
	selectSelector
} = todosSlice.selectors;

export default todosSlice.reducer;
