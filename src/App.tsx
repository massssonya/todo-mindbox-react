import "./App.css";
import { FooterElement } from "./components/FooterElement";
import { InputElement } from "./components/InputElement";
// import { useEffect, useState } from "react";
import { TodoList } from "./components/TodoList";
// import { ITodo } from "./types";



function App() {
  // const [currentTodos, setCurrentTodos] = useState(todos);
  // const initialCountLeft = todos.filter(
  //   (todo) => todo.isCompleted == false
  // ).length;
  // const [countLeft, setCountLeft] = useState(initialCountLeft);

  // const handleAddTodo = (value: string) => {
  //   const newId = Date.now().toString();
  //   const newTodoItem: ITodo = {
  //     id: newId,
  //     value: value,
  //     isCompleted: false,
  //   };
  //   setTodos([...todos, newTodoItem]);
  // };

  // const handleCompleteTodo = (id: string) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id === id) {
  //         return { ...todo, isCompleted: !todo.isCompleted };
  //       }
  //       return todo;
  //     })
  //   );
  // };

  // const handleFilterTodos = (param: string) => {
  //   switch (param) {
  //     case "all":
  //       setCurrentTodos(todos)
  //       return
  //     case "active":
  //       setCurrentTodos(todos.filter(todo => !todo.isCompleted))
  //       return
  //     case "completed":
  //       setCurrentTodos(todos.filter(todo => todo.isCompleted))
  //       return
  //     default:
  //       setCurrentTodos(todos)
  //       return
  //   }
  // };

  // const handleRemoveCompletes = () => {
  //   setTodos(todos.filter((todo) => !todo.isCompleted));
  // };

  // useEffect(() => {
  //   setCountLeft(todos.filter((todo) => todo.isCompleted == false).length);
  //   setCurrentTodos(todos);
  // }, [todos]);

  return (
    <main className="w-[600px]">
      <h1>Todos</h1>
      <div className="mt-2 text-xl">
        {/* <InputElement addTodo={handleAddTodo} /> */}
        <TodoList />
        <FooterElement />
      </div>
    </main>
  );
}

export default App;
