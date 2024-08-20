import { useAppDispatch } from "../redux/hooks";
import { toggleTodo } from "../redux/slices/todosSlice";
import { ITodo } from "../types";

export const TodoElement = ({ todo }: { todo: ITodo }) => {
	const { id, value, isCompleted } = todo;
	const dispatch = useAppDispatch();
	const handleChange = () => {
		dispatch(toggleTodo(id));
	};
	const checked = "text-gray-400 line-through";
	return (
		<div
			className={`w-full py-4 pl-2 flex items-center border ${
				isCompleted ? checked : ""
			}`}
		>
			<Checkbox handleChange={handleChange} isCompleted={isCompleted} />
			<label className="ml-2 text-left">{value}</label>
		</div>
	);
};

const Checkbox = ({
	handleChange,
	isCompleted = false
}: {
	handleChange: () => void;
	isCompleted: boolean;
}) => {
	return (
		<div className="inline-flex items-center">
			<label
				className="relative flex items-center p-3 rounded-full cursor-pointer"
				htmlFor="customStyle"
			>
				<input
					type="checkbox"
					className="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-900/20 bg-gray-900/10 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:scale-105 hover:before:opacity-0"
					id="customStyle"
					checked={isCompleted}
					onChange={handleChange}
				/>
				<span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-3.5 w-3.5"
						viewBox="0 0 20 20"
						fill="currentColor"
						stroke="currentColor"
						strokeWidth="1"
					>
						<path
							fillRule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clipRule="evenodd"
						></path>
					</svg>
				</span>
			</label>
		</div>
	);
};
