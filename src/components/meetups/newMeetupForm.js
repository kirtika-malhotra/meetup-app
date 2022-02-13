import Card from "../ui/card";
import classes from "./newMeetupForm.module.css";
import { useRef } from "react";

function NewMeetupForm(props) {
	const titleInputRef = useRef();
	const imageInputRef = useRef();
	const addressInputRef = useRef();
	const descInputRef = useRef();

	function submitHandler(event) {
		event.preventDefault();
		let currentTitle = titleInputRef.current.value;
		let currentAddress = addressInputRef.current.value;
		let currentImage = imageInputRef.current.value;
		let currentDesc = descInputRef.current.value;

		const meetupData = {
			title: currentTitle,
			image: currentImage,
			address: currentAddress,
			description: currentDesc,
		};

		props.onAddMeetup(meetupData);
	}
	return (
		<Card>
			<form className={classes.form} onSubmit={submitHandler}>
				<div className={classes.control}>
					<label htmlFor="title">Title</label>
					<input type="text" required id="title" ref={titleInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="image">Image</label>
					<input type="url" required id="image" ref={imageInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="address">Address</label>
					<input type="text" required id="address" ref={addressInputRef} />
				</div>
				<div className={classes.control}>
					<label htmlFor="description">Description</label>
					<textarea
						rows="5"
						required
						id="description"
						ref={descInputRef}
					></textarea>
				</div>
				<div className={classes.actions}>
					<button>Add Meetup</button>
				</div>
			</form>
		</Card>
	);
}

export default NewMeetupForm;
