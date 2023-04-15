import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

function SignIn() {
	const [userFields, setUserFields] = useState({ email: "", password: "" });
	const { user, signUp } = UserAuth();
	console.log(user);

	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await signUp(userFields.email, userFields.password);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="w-full h-screen">
				<img
					className="hidden sm:block bg-black opacity-50 absolute w-full h-full object-cover"
					src="https://blog.vpncity.com/wp-content/uploads/2020/01/xx.png"
					alt="netflix-background"
				/>
				<div className="fixed w-full px-4 py-24 z-50">
					<div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
						<div className="max-w-[320px] mx-auto py-16">
							<h1 className="text-3xl font-bold">Sign Up</h1>
							<form
								onSubmit={handleSubmit}
								className="w-full flex flex-col py-4"
							>
								<input
									onChange={(event) =>
										setUserFields({
											...userFields,
											email: event.target.value,
										})
									}
									className="p-3 my-2 bg-gray-600 rounded"
									type="email"
									placeholder="Email"
									autoComplete="email"
								/>
								<input
									onChange={(event) =>
										setUserFields({
											...userFields,
											password: event.target.value,
										})
									}
									className="p-3 my-2 bg-gray-600 rounded"
									type="password"
									placeholder="Password"
									autoComplete="current-password"
								/>
								<button className="bg-red-600 py-3 my-6 rounded font-bold">
									Sign Up
								</button>
								<div className="flex flex-row justify-between items-center text-gray-400">
									<p>
										<input className="mr-1" type="checkbox" />
										Remember me
									</p>
									<p>Need help?</p>
								</div>
								<div className="mt-3 flex flex-row gap-2">
									<p className="text-gray-400">
										Already subscribed to Netflix?
									</p>
									<span className="text-white">
										<Link to="/signin">Sign In</Link>
									</span>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SignIn;
