import React, { useEffect } from "react";
import { db } from "../../utils/firebase";
import { getDocs, query, where, collection } from "firebase/firestore";
import "./style.css";
import { useLocation, useParams } from "react-router-dom";

const ProblemDescriptionComponent= () => {
	const [problem, setProblem] = React.useState<Problem | null>(null);
	const { problem_id } = useParams<{ problem_id: string }>();
	const id = parseInt(problem_id || "0");

	const fetchProblem = async (id: number) => {
		if(id > 0) {
			const q = query(collection(db, "problems"), where("id", "==", id));
			const querySnapshot = await getDocs(q);

			console.log(querySnapshot.docs.map((doc) => doc.data()));
			if (querySnapshot.docs.length === 1) {
				setProblem(querySnapshot.docs[0].data() as Problem);
			}
		}
		else{
			setProblem(null);
		}
	};

	useEffect(() => {
		fetchProblem(id);
	}, []);

  return (
    <div className='problem-description'>
	  {problem ? (
		<div>
			<div className='description-header'>
				<h1>{id+'.  '}{problem.title}</h1>
				<span className={`difficulty-tag-${problem.difficulty.toLowerCase()}`}>{problem.difficulty}</span>
			</div>
		  <p>{problem.description}</p> 
		  {problem.example ? (
			<div className='examples'>
				<p>Examples:</p>
				{Array.isArray(problem.example) ? (
					<ul className='example-list'>
						{problem.example.map((ex, index) => (
							<li key={index}>{ex}</li>
						))}
					</ul>
				) : (
					<p>{problem.example}</p>
				)}
			</div>
		  ): null}

					{problem.constraints &&
					Array.isArray(problem.constraints) ? (
						<div className="constraints">
							<p>Constraints:</p>
							<ul className="constraints-list">
								{problem.constraints.map(
									(constraint: string, index: number) => (
										<li key={index}>{constraint}</li>
									)
								)}
							</ul>
						</div>
					) : null}
				</div>
			) : (
				<p>Loading...</p>
			)}
		</div>
	);
};

export default ProblemDescriptionComponent;
