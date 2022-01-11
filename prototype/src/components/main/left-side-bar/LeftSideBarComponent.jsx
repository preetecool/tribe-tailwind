import React, { useContext } from "react";
import { Link } from "react-router-dom";

import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

import { AppContext } from "../../../hooks/Context";

const LeftSideBarComponent = () => {
	const { isSticky } = useContext(AppContext);
	return (
		<aside
			className={
				isSticky
					? " sticky top-0 hidden lg:block lg:col-span-3 xl:col-span-3 pt-5 sm:pt-7"
					: "hidden lg:block lg:col-span-3 xl:col-span-3 pt-5 sm:pt-7"
			}
			aria-label="Sidebar"
			style={{ cursor: "auto" }}
		>
			<div id={isSticky ? "stickySide" : null}>
				<TopNav />
				<BottomNav />

				<div className="flex flex-col space-y-3 mt-8 px-3">
					<div className="flex space-x-2">
						<Link
							className="cursor-pointer transition duration-100 ease-in-out text-basicMain-600 hover:text-actionAccentHover-500 text-xs"
							rel="noopener noreferrer"
							to="https://tribe.so/terms-of-service"
						>
							Terms of Service
						</Link>
						<Link
							className="cursor-pointer transition duration-100 ease-in-out text-basicMain-600 hover:text-actionAccentHover-500 text-xs"
							rel="noopener noreferrer"
							to="https://tribe.so/privacy-policy"
						>
							Privacy Policy
						</Link>
					</div>
				</div>
				<div className="text-xs text-basicMain-600" aria-label="Copyright">
					© Copyright 2022, Tribe Campfire
				</div>
			</div>
		</aside>
	);
};

export default LeftSideBarComponent;
