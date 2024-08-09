import { Col, Container, Row } from "react-bootstrap";

const List = ({ todo, handleDelete }) => {
	return (
		<Container>
			<Row className="gy-3 justify-content-center">
				{todo &&
					todo.map((e, i) => (
						<Col className="p-2 postit" key={i} xs={12} md={5} lg={4}>
							<h3 className="my-2">To Do:</h3>
							<p>{e}</p>
							<button onClick={() => handleDelete(i)}>Cancella</button>
						</Col>
					))}
			</Row>
		</Container>
	);
};

export default List;
