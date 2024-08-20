import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as reduxHooks from "../../redux/hooks";
import * as actions from "../../redux/slices/todosSlice";
import { TodoElement } from "../TodoElement";

const initialState = { id: "1", value: "test", isCompleted: false };

jest.mock("../../redux/hooks");

const useAppDispatch = jest.spyOn(reduxHooks, "useAppDispatch");
const toggleTodo = jest.spyOn(actions, "toggleTodo");

describe("TodoList", () => {
	it("should render correctly", () => {
		const component = render(<TodoElement todo={initialState} />);
		expect(screen.getByText("test")).toBeInTheDocument();
		expect(
			document.querySelectorAll("input[type='checkbox']")
		).not.toHaveLength(0);
		expect(component).toMatchSnapshot();
	});

	it("should toggle a todo", () => {
		const dispatch = jest.fn();
		useAppDispatch.mockReturnValue(dispatch);

		render(<TodoElement todo={initialState} />);
		const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
		fireEvent.click(checkbox);
		expect(toggleTodo).toHaveBeenCalledWith("1");
		expect(toggleTodo).toHaveBeenCalledTimes(1);

		fireEvent.click(checkbox);
		expect(toggleTodo).toHaveBeenCalledWith("1");
		expect(toggleTodo).toHaveBeenCalledTimes(2);

	});


});
