// import { todosSlice, initialState } from "../redux/slices/todosSlice";

// describe("todosSlice", () => {
// 	it("should return the initial state", () => {
// 		const state = todosSlice.reducer(undefined, {});
// 		expect(state).toEqual(initialState);
// 	});

// 	it("should add a new todo", () => {
// 		const newState = todosSlice.reducer(initialState, {
// 			type: "addTodo",
// 			payload: "New Todo"
// 		});
// 		expect(newState.todos.length).toBe(initialState.todos.length + 1);
// 		expect(newState.todos[0].value).toBe("New Todo");
// 	});

// 	it("should toggle a todo", () => {
// 		const newState = todosSlice.reducer(initialState, {
// 			type: "toggleTodo",
// 			payload: "todo1"
// 		});
// 		expect(newState.todos[0].isCompleted).toBe(true);
// 	});

// 	it("should remove completed todos", () => {
// 		const newState = todosSlice.reducer(initialState, {
// 			type: "removeCompletedTodos"
// 		});
// 		expect(newState.todos.length).toBe(initialState.todos.length - 1);
// 	});

// 	it("should select all todos", () => {
// 		const allTodos = todosSlice.selectors.selectAllTodos(initialState.todos);
// 		expect(allTodos).toEqual(initialState.todos);
// 	});

// 	it("should select active todos", () => {
// 		const activeTodos = todosSlice.selectors.selectActiveTodos(initialState);
// 		expect(activeTodos.length).toBe(2);
// 	});

// 	it("should select completed todos", () => {
// 		const completedTodos =
// 			todosSlice.selectors.selectCompletedTodos(initialState);
// 		expect(completedTodos.length).toBe(1);
// 	});
// });

import { todosSlice } from "../redux/slices/todosSlice";
