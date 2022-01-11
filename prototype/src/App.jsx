import React, { useContext } from "react";
import "./App.css";
import HeaderComponent from "./components/header/HeaderComponent";
import MainComponent from "./components/main/MainComponent";

function App() {
	return (
		<div className="bg-main-50 min-h-screen pb-10">
			<HeaderComponent />
			<MainComponent />
		</div>
	);
}

export default App;
