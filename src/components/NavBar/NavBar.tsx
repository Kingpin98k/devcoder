import React from "react";
import { Link } from "react-router-dom";
import { UserCircle2, Code2, FileCode2, User, LogOut } from "lucide-react";
import "./NavBar.css";
import { useAuth } from "../../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";
import styles from "./NavBar.module.css";
import { useState } from "react";

const NavBar = () => {
	const navigate = useNavigate();
	const { user } = useAuth();
	const currUser = user?.uid;
	const [showDropdown, setShowDropdown] = useState(false);
	const handleMouseEnter = () => {
		setShowDropdown(true);
	};

	const handleMouseLeave = () => {
		setShowDropdown(false);
	};

	const handleLogout = () => {
		// Add your logout logic here
		console.log("User logged out");
	};

	console.log(currUser);
	return (
		<header className={styles.header}>
			<div className="dev-navbar-logo">
				<Code2 className="dev-navbar-logo-icon" />
				<span className="dev-navbar-logo-text">DevCoder</span>
			</div>
			<nav className={styles.nav}>
				<button
					className={styles.navButton}
					onClick={() => navigate("/problemset")}
				>
					Problems
				</button>
				<button className={styles.navButton}>Contests</button>
				<button className={styles.navButton}>Discuss</button>
			</nav>
			{currUser !== undefined ? (
				<div>
					<Link to={`/u/${user?.uid}`} className="dev-navbar-item">
						<User className="dev-navbar-icon" />
						<span>Profile</span>
					</Link>
				</div>
			) : (
				<div className={styles.authButtons}>
					<button
						className={styles.loginButton}
						onClick={() => navigate("/login")}
					>
						Login
					</button>
					<button
						className={styles.registerButton}
						onClick={() => navigate("/signup")}
					>
						Register
					</button>
				</div>
			)}
		</header>
	);
};

export default NavBar;
