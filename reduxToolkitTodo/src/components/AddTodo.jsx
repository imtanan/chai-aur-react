import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, clearSelectedTodo } from "../features/todo/todoSlice";
import { updateTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = React.useState("");

  const dispatch = useDispatch();

  const selectedId = useSelector((state) => state.selectedId);
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (selectedId) {
      dispatch(updateTodo({ id: selectedId, text: input }));
      dispatch(clearSelectedTodo());
    } else {
      dispatch(addTodo(input));
    } //dispatch reducers use krta h store ma data manipulate krne k leay

    setInput("");
  };

  const todo = useSelector((state) =>
    state.todos.find((t) => t.id === selectedId),
  );
  React.useEffect(() => {
    if (todo) {
      setInput(todo.text);
    }
  }, [todo]);

  // console.log(todo.text);
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        {selectedId ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
