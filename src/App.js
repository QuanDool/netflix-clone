import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NarBar";
import Home from "./pages/Home";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
