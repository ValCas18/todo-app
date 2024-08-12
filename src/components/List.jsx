import { Col, Container, Row } from "react-bootstrap";

const List = ({ todo, handleDelete }) => {
	return (
		<Container>
			<Row className="gy-3 justify-content-center">
				{todo &&
					todo.map((e, i) => (
						<Col className="postit p-2 d-flex flex-column justify-content-between" key={i} xs={12} md={5} lg={4}>
							<h3 className="my-2">To Do {i + 1}:</h3>
							<div className="d-flex justify-content-center align-items-center">
								<p className="font px-1">{e.length > 50 ? e.slice(0, 49) + "..." : e}</p>
							</div>
							<button className=" w-50" onClick={() => handleDelete(i)}>
								Cancella
							</button>
						</Col>
					))}
			</Row>
		</Container>
	);
};

export default List;
