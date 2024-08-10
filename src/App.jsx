import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "./App.css";
import List from "./components/List";
import SearchBar from "./components/SearchBar";

function App() {
	const [input, setInput] = useState("");
	const [todo, setTodo] = useState([]);

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input !== "") {
			setTodo([...todo, input]);
		}
		setInput("");
	};

	const handleDelete = (index) => {
		const updateTodo = todo.filter((element) => todo.indexOf(element) !== index);
		setTodo(updateTodo);
	};

	return (
		<div className="App">
			<SearchBar input={input} handleChange={handleChange} handleSubmit={handleSubmit} />
			<List todo={todo} handleDelete={handleDelete} />
		</div>
	);
}

export default App;
