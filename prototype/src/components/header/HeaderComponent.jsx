import React, { useContext } from "react";

import Logo from "./Logo";
import SearchBar from "./SearchBar";
import RightSideHeader from "./RightSideHeader";
import ShowTags from "./ShowTags";

import { AppContext } from "../../hooks/Context";

const HeaderComponent = () => {
	const { isSticky } = useContext(AppContext);
	return (
		<div id={isSticky ? "sticky" : null} style={{ background: "#ffffff" }}>
			<div className="bg-actionSecondary-50 text-basicSecondary-500 shadow-sm lg:overflow-y-visible">
				<div className="max-w-8xl mx-auto px-3 lg:px-8">
					<div className="grid grid-cols-12 h-16 gap-5">
						<div className="flex overflow-hidden items-center lg:col-span-3 col-span-5">
							<a className="lg:hidden mr-3" href="/spaces">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
									className="h-8 w-8"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							</a>
							<Logo />
						</div>
						<SearchBar />
						<RightSideHeader />
					</div>
					<ShowTags />
				</div>
			</div>
		</div>
	);
};

export default HeaderComponent;
