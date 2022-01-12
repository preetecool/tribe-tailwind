import React from "react";
import LeftSideBarComponent from "./left-side-bar/LeftSideBarComponent";
import ContentComponent from "./content/ContentComponent";

const MainComponent = () => {
	return (
		<>
			<div
				className="max-w-8xl  mx-auto sm:px-6 lg:px-8 w-full grid grid-cols-12 gap-5 pb-5"
				style={{ minHeight: "100vh" }}
			>
				<LeftSideBarComponent />
				<ContentComponent />
			</div>
		</>
	);
};

export default MainComponent;
