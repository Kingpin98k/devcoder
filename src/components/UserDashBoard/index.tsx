import React from "react";
import "./style.css";
import { ProblemCircle, ProfileCard, StatsCard } from "../ui";
import { mockProblemStats } from "../../data";
import ActivityCalendar from "../ui/ActivityCalendarComponent";

const UserDashBoard: React.FC = () => {
	const userProfile = {
		name: "Dhruv",
		username: "coderack",
		rank: 2800,
		contestRating: 1972,
		globalRanking: 3654,
		attended: 52,
		topPercentage: 3.05,
	};

	return (
		<div className="dashboard-container">
			<div className="dashboard-grid">
				<div className="left-column">
					<ProfileCard profile={userProfile} />
					<div className="community-stats mt-md">
						{/* Community stats implementation */}
					</div>
				</div>
				<div className="main-content">
					<StatsCard
						contestRating={userProfile.contestRating}
						globalRanking={userProfile.globalRanking}
						totalParticipants={622576}
						attended={userProfile.attended}
					/>
					<ActivityCalendar />
					<ProblemCircle stats={mockProblemStats} />
				</div>
			</div>
		</div>
	);
};

export default UserDashBoard;
