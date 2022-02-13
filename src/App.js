import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/layout";
import MainNavigation from "./components/layout/mainNavigation";
import AllMeetupsPage from "./pages/allMeetups";
import FavouritesPage from "./pages/favourite";
import NewMeetupPage from "./pages/newMeetup";

function App() {
	return (
		<Layout>
			<Switch>
				<Route path="/" exact>
					<AllMeetupsPage />
				</Route>
				<Route path="/new-meetup" exact>
					<NewMeetupPage></NewMeetupPage>
				</Route>
				<Route path="/favorites" exact>
					<FavouritesPage></FavouritesPage>
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
