import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as reduxHooks from "../../redux/hooks";
import { TodoList } from "../TodoList";

const initialState = [
	{ id: "1", value: "test", isCompleted: false },
	{ id: "2", value: "test2", isCompleted: true }
];

jest.mock("../../redux/hooks");

describe("TodoList", () => {
	const useAppSelector = jest.spyOn(reduxHooks, "useAppSelector");

	it("should render correctly", () => {
		useAppSelector.mockReturnValue(initialState);
		render(<TodoList />);
		expect(screen.getByText("test")).toBeInTheDocument();
		expect(document.querySelectorAll("input[type='checkbox']")).not.toHaveLength(0);
	});

	it("should render no todos", () => {
		useAppSelector.mockReturnValue([]);
		render(<TodoList />);
		expect(screen.getByText("No todos")).toBeInTheDocument();
	});

	it("should render todos", () => {
		useAppSelector.mockReturnValue(initialState);
		const { container } = render(<TodoList />);
		expect(container).toMatchSnapshot();
	});
});
