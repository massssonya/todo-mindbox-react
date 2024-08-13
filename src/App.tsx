import "./App.css";
import { InputElement } from "./components/InputElement";
import { TodoList } from "./components/TodoList";
import { FooterElement } from "./components/FooterElement";

function App() {
	return (
		<main className="w-[600px]">
			<h1>Todos</h1>
			<div className="mt-2 text-xl">
				<InputElement />
				<TodoList />
				<FooterElement />
			</div>
		</main>
	);
}

export default App;
