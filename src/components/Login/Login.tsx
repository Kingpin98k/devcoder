import React, { useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { Code, LogOut, Pointer, User } from "lucide-react";
const Login: React.FC = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string>("");
	const [showModal, setShowModal] = useState<boolean>(false);

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setError("");

		try {
			await signInWithEmailAndPassword(auth, email, password);
			console.log("Login Success");
			navigate("/problemset");
			/* eslint-disable-next-line */
		} catch (error: any) {
			console.error("Error:", error.message);
			setError(
				"Your password may be incorrect or if you are a new user, please register."
			);
			setShowModal(true);

			setTimeout(() => {
				setShowModal(false);
				setError("");
			}, 2000);
		}
	};

	return (
		<div className="login-page">
			<div className="credentialsContainer">
				<div className="credentialCard">
					<User className="icon" />
					<div>
						<p className="credentialLabel">Username:</p>
						<p className="credentialValue">test@test.com</p>
					</div>
				</div>
				<div className="credentialCard">
					<LogOut className="icon" />
					<div>
						<p className="credentialLabel">Password:</p>
						<p className="credentialValue">testtest</p>
					</div>
				</div>
			</div>
			<header className="login-header">
				<div className="header-content">
					<Code className="header-icon" />
					<h1> Welcome to DevCoder</h1>
				</div>
			</header>
			<div className="login-container">
				<div className="login-form-container">
					<form className="login-form" onSubmit={handleSubmit}>
						<h2>Login</h2>
						<label htmlFor="email">
							Email:
							<input
								type="text"
								id="email"
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
						</label>
						<label htmlFor="password">
							Password:
							<input
								type="password"
								id="password"
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</label>
						<button type="submit">Login</button>
						<p
							onClick={() => {
								navigate("/signup");
							}}
							style={{ cursor: "pointer" }}
						>
							Don't Have Account?{" "}
							<Link to="/signup">Register</Link>
						</p>
					</form>
				</div>
			</div>
			{showModal && (
				<div className="modal-overlay active">
					<div className="modal-content">
						<p>{error}</p>
						<span
							className="modal-close"
							onClick={() => setShowModal(false)}
						>
							&times;
						</span>
					</div>
				</div>
			)}
			<footer className="login-footer">
				<p>&copy; 2024 DevCoder. All rights reserved.</p>
			</footer>
		</div>
	);
};

export default Login;
