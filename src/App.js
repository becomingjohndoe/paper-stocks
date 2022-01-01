import "./App.css";
import Header from "./components/Header";
import PopUp from "./components/PopUp";
import Portfolio from "./components/Portfolio";
import { useState } from "react";
import { Container } from "react-bootstrap";
function App() {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className="App">
			<Container>
				<Header />
				<Portfolio />
			</Container>
		</div>
	);
}

export default App;
