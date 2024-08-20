import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as reduxHooks from "../../redux/hooks";
import { FooterElement } from "../FooterElement";
import * as actions from "../../redux/slices/todosSlice";

jest.mock("../../redux/hooks");

const initialState = {
	todos: [
		{ id: "1", value: "test", isCompleted: false },
		{ id: "2", value: "test2", isCompleted: true }
	],
	selector: "selectAllTodos"
};

const useAppDispatch = jest.spyOn(reduxHooks, "useAppDispatch");
const useAppSelector = jest.spyOn(reduxHooks, "useAppSelector");
const selectNumberActiveTodos = jest.fn(
	(state: actions.IState) =>
		state.todos.filter((todo) => !todo.isCompleted).length
);

describe("FooterElement", () => {
	it("should render correctly", () => {
		useAppSelector.mockReturnValue(selectNumberActiveTodos(initialState));
		const component = render(<FooterElement />);
		expect(component).toMatchSnapshot();
	});

	it("should render number of active todos", () => {
		useAppSelector.mockReturnValue(selectNumberActiveTodos(initialState));
		render(<FooterElement />);
		expect(screen.getByText(/1/)).toBeInTheDocument();
	});

	it("should return zero if click on Clear Completes", () => {
		useAppSelector.mockReturnValue(selectNumberActiveTodos(initialState));
		const dispatch = jest.fn();
		useAppDispatch.mockReturnValue(dispatch);
		render(<FooterElement />);
		const clearCompleted = screen.getByText(/Clear Completes/);
		fireEvent.click(clearCompleted);
		expect(dispatch).toHaveBeenCalledWith(actions.removeCompletedTodos());
		expect(dispatch).toHaveBeenCalledTimes(1);
		waitFor(() => {
			expect(screen.getByText(/0/)).toBeInTheDocument();
		});
	});
});
