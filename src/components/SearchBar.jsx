import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Col, Form, InputGroup, Row } from "react-bootstrap";

const SearchBar = ({ handleChange, handleSubmit, input }) => {
	return (
		<div>
			<h1>To Do List</h1>
			<Form onSubmit={handleSubmit}>
				<Row className="justify-content-center mt-4 mb-5">
					<Col xs={12} sm={8} md={5} xl={3}>
						<InputGroup>
							<Form.Control
								className="formControl"
								value={input}
								type="search"
								id="input"
								placeholder="Add something to do..."
								onChange={handleChange}
							></Form.Control>
							<button className="rounded-5 px-3 ms-2" type="submit" htmlFor="input">
								<FontAwesomeIcon icon={faPlus} />
							</button>
						</InputGroup>
					</Col>
				</Row>
			</Form>
		</div>
	);
};

export default SearchBar;
