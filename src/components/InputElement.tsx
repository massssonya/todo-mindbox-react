import { useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { addTodo } from "../redux/slices/todosSlice";
import { ChevronDown } from "lucide-react";

export const InputElement = () => {
	const [value, setValue] = useState("");
	const dispatch = useAppDispatch();
	const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (value === "") return;
		if (event.key === "Enter") {
			dispatch(addTodo(value));
			setValue("");
		}
	};
	return (
		<div className="py-0 pl-2 flex items-center border">
			<ChevronDown />
			<input
				type="text"
				placeholder="What needs to be done?"
				className="ml-4 p-2 h-full w-full focus:outline-none"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onKeyUp={handleKeyPress}
			/>
		</div>
	);
};
