import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NarBar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
	return (
		<div className="App">
			<AuthContextProvider>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route
						path="/account"
						element={
							<ProtectedRoute>
								<Account />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</AuthContextProvider>
		</div>
	);
}

export default App;
