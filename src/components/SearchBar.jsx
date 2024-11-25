import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Col, Form, InputGroup, Row } from "react-bootstrap";

const SearchBar = ({ handleChange, handleSubmit, input }) => {
	return (
		<div>
			<h1 className="mt-5 text-white titleFont">To Do List</h1>
			<Form onSubmit={handleSubmit}>
				<Row className="justify-content-center mt-4 mb-5">
					<Col xs={10} md={4} xl={3} className="mb-3">
						<InputGroup>
							<Form.Control
								className="formControl"
								value={input}
								type="search"
								id="input"
								placeholder="Add something to do..."
								onChange={handleChange}
							></Form.Control>
						</InputGroup>
					</Col>
					<Col xs={3} md={1} className="d-flex justify-content-center p-0">
						<button className="plusBtn rounded-5 ms-3 mb-3" type="submit" htmlFor="input">
							<FontAwesomeIcon icon={faPlus} />
						</button>
					</Col>
				</Row>
			</Form>
		</div>
	);
};

export default SearchBar;
