import classes from "./meetupItem.module.css";
import Card from "../ui/card";
import { useState } from "react";

function MeetupItem(props) {
	const [favorite, setFavorite] = useState(false);

	function addFavHandler() {
		setFavorite(true);
	}
	function removeFavHandler() {
		setFavorite(false);
	}
	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={props.image} alt={props.title} />
				</div>
				<div className={classes.content}>
					<h3>{props.title}</h3>
					<address>{props.address}</address>
					<p>{props.description}</p>
				</div>
				{favorite ? (
					<div className={classes.actions} onClick={removeFavHandler}>
						<button>Remove Favorite</button>
					</div>
				) : (
					<div className={classes.actions} onClick={addFavHandler}>
						<button>To Favorites</button>
					</div>
				)}
			</Card>
		</li>
	);
}

export default MeetupItem;
