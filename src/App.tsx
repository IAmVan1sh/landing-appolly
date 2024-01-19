import "./App.scss";
import {Fragment} from "react";
import NavBar from "./components/layout/navbar/NavBar.tsx";
import Intro from "./components/layout/intro/Intro.tsx";
import About from "./components/layout/about/About.tsx";
import Features from "./components/layout/features/Features.tsx";

const App = () => {
	return (
		<Fragment>
			<NavBar />
			<main>
				<Intro />
				<About />
				<Features />
			</main>
		</Fragment>
	);
};

export default App;