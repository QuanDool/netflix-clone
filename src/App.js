import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NarBar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
	return (
		<div className="App">
			<AuthContextProvider>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default App;
