import { useState } from "react";
import styles from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";
import { UserCircle2, Code2, FileCode2, User, LogOut } from "lucide-react";

export default function LandingPage() {
	const [code, setCode] = useState(`function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`);
	const navigate = useNavigate();
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className={styles.credentialsContainer}>
					<div className={styles.credentialCard}>
						<User className={styles.icon} />
						<div>
							<p className={styles.credentialLabel}>Username:</p>
							<p className={styles.credentialValue}>
								test@test.com
							</p>
						</div>
					</div>
					<div className={styles.credentialCard}>
						<LogOut className={styles.icon} />
						<div>
							<p className={styles.credentialLabel}>Password:</p>
							<p className={styles.credentialValue}>testtest</p>
						</div>
					</div>
				</div>
				<h1 className={styles.logo}>DEVCODER</h1>
				<p className={styles.tagline}>
					Master Algorithms, Interview Questions
				</p>
				<div className={styles.editorContainer}>
					<div className={styles.problemStatement}>
						<h2>Two Sum</h2>
						<p>
							Given an array of integers nums and an integer
							target, return indices of the two numbers such that
							they add up to target.
						</p>
					</div>
					<div className={styles.codeEditor}>
						<div className={styles.editorHeader}>
							<select className={styles.languageSelect}>
								<option>JavaScript</option>
								<option>Python</option>
								<option>Java</option>
							</select>
							<button className={styles.runButton}>
								Run Code
							</button>
						</div>
						<textarea
							className={styles.codeArea}
							value={code}
							onChange={(e) => setCode(e.target.value)}
						/>
					</div>
				</div>
				<div className={styles.features}>
					<div className={styles.featureCard}>
						<h3>Global Chat</h3>
						<p>
							While solving problems, use our global chat to
							connect, share ideas, and collaborate with others in
							real time.
						</p>
					</div>
					<div className={styles.featureCard}>
						<h3>Learn and Grow with Expert-Led Courses</h3>
						<p>
							Learn step-by-step and gain expertise in various
							topics with our curated courses.
						</p>
					</div>
					<div className={styles.featureCard}>
						<h3>Notes</h3>
						<p>
							You can also add your own notes and practice
							regularly to improve.
						</p>
					</div>
				</div>
			</main>
			<footer className={styles.footer}>
				<p>&copy; 2023 CODEEDITOR. All rights reserved.</p>
			</footer>
		</div>
	);
}
