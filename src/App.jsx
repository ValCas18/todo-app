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

	return (
		<div className="App">
			<div className="bg-book"></div>
			<SearchBar handleChange={handleChange} input={input} />
			<List />
		</div>
	);
}

export default App;
