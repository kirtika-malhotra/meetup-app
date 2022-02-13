import MeetupList from "../components/meetups/meetupLists";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
	const [isLoading, setIsLoading] = useState(true);
	const [meetup, setMeetup] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch("https://react-test-20c6e-default-rtdb.firebaseio.com/meetups.json")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				let meetups = [];

				for (const key in data) {
					const meetup = {
						id: key,
						...data[key],
					};
					meetups.push(meetup);
				}
				setIsLoading(false);
				setMeetup(meetups);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>...Loading</p>
			</section>
		);
	} else {
		return (
			<section>
				<h1>All Meetups!</h1>
				<MeetupList meetups={meetup} />
			</section>
		);
	}
}

export default AllMeetupsPage;
