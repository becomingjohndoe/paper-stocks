import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import screenshot from "../assets/images/screenshot.png";
const Start = () => {
	return (
		<Container fluid="sm">
			<Row>
				<Col>
					<div className="start">
						<h1>Welcome to Paper Stocks Game</h1>
						<Link to="/portfolio">
							<Button>Play Game</Button>
						</Link>
						<div className="how-to">
							<h4>How To Play</h4>
							<p>1. You are given $100 dollars to start with.</p>
							<p>2. Make as much money as possible in 45 seconds.</p>
						</div>
						<img className="start-screenshot" src={screenshot} alt="" />
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Start;
