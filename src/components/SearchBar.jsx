import { Form } from "react-bootstrap";

const SearchBar = ({ handleChange }) => {
	return (
		<div>
			<h1>To Do List</h1>
			<Form>
				<Form.Control type="search" id="input" placeholder="scrivi" onChange={handleChange}></Form.Control>
				<button type="submit" htmlFor="input">
					Search
				</button>
			</Form>
		</div>
	);
};

export default SearchBar;
