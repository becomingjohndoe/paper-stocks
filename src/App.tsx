import "./App.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Start from "./components/Start";
import Portfolio from "./components/Portfolio";
function App() {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Start />} />
				<Route path="/portfolio" element={<Portfolio />} />
			</Routes>
		</div>
	);
}

export default App;
