import { todosSlice, initialState } from "./todosSlice";

//check reducers in todosSlice
describe("todosSlice", () => {
	beforeEach(() => {
		jest.clearAllMocks();
	})
	afterEach(() => {
		jest.clearAllMocks();
	})
	it("should return the initial state", () => {
		const state = todosSlice.reducer(undefined, { type: "unknown" });
		expect(state).toEqual(initialState);
	});

	it("should add a new todo", () => {
		const newState = todosSlice.reducer(initialState, {
			type: todosSlice.actions.addTodo.type,
			payload: "new todo"
		});
		expect(newState.todos.length).toBe(4);
		expect(newState.todos[3].value).toEqual("new todo");
	});

	it("should toggle a todo", () => {
		const newState = todosSlice.reducer(initialState, {
			type: todosSlice.actions.toggleTodo.type,
			payload: "todo1"
		});
		expect(newState.todos[0].isCompleted).toBe(true);
	});

	it("should remove completed todos", () => {
		const newState = todosSlice.reducer(initialState, {
			type: todosSlice.actions.removeCompletedTodos.type
		});
		expect(newState.todos.length).toBe(2);
		expect(newState.todos[0].isCompleted).toBe(false);
	});

	it("should set the selector", () => {
		const newState = todosSlice.reducer(initialState, {
			type: todosSlice.actions.setSelector.type,
			payload: "selectActiveTodos"
		});
		expect(newState.selector).toBe("selectActiveTodos");
	});
});

//check selectors in todosSlice
describe("selectors", () => {
	it("should select all todos", () => {
		const result = todosSlice.selectors.selectAllTodos({ todos: initialState });
		expect(result).toEqual(initialState.todos);
		expect(result.length).toBe(3);
	});

	it("should select active todos", () => {
		const result = todosSlice.selectors.selectActiveTodos({
			todos: initialState
		});
		expect(result.length).toBe(2);
		expect(result[0].isCompleted).toBe(false);
	});

	it("should select number of active todos", () => {
		const result = todosSlice.selectors.selectNumberActiveTodos({
			todos: initialState
		});
		expect(result).toBe(2);
	});

	it("should select completed todos", () => {
		const result = todosSlice.selectors.selectCompletedTodos({
			todos: initialState
		});
		expect(result.length).toBe(1);
		expect(result[0].isCompleted).toBe(true);
	});

	it("should select the selector", () => {
		const result = todosSlice.selectors.selectSelector({
			todos: initialState
		});
		expect(result).toBe("selectAllTodos");
	});
});
