import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Col, Form, Row } from "react-bootstrap";

const SearchBar = ({ handleChange, handleSubmit, input }) => {
	return (
		<div>
			<h1>To Do List</h1>
			<Form onSubmit={handleSubmit}>
				<Row className="justify-content-center">
					<Col xs={12} sm={8} md={5} xl={3}>
						<Form.Control value={input} type="search" id="input" placeholder="scrivi" onChange={handleChange}>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</Form.Control>
					</Col>
				</Row>
				<button type="submit" htmlFor="input">
					Search
				</button>
			</Form>
		</div>
	);
};

export default SearchBar;
