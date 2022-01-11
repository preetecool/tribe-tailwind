import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TopNav = () => {
	return (
		<nav className="flex-1 space-y-8 isolate mb-5" aria-label="Sidebar">
			<div className="space-y-1" role="group">
				<MainLink
					className="bg-main-200 text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
					aria-current="page"
					to="/"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
						focusable="false"
						className="text-basicMain-500 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
					>
						<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
					</svg>
					<span className="truncate">Home</span>
				</MainLink>
				<MainLink
					className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
					to="/spaces"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
						focusable="false"
						className="text-basicMain-400 group-hover:text-basicMain-600 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
						></path>
					</svg>
					<span className="truncate">Spaces</span>
				</MainLink>
				<MainLink
					className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
					to="/member/3kzA1awJZA"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
						focusable="false"
						className="text-basicMain-400 group-hover:text-basicMain-600 flex-shrink-0 -ml-1 mr-3 h-6 w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						></path>
					</svg>
					<span className="truncate">Profile</span>
				</MainLink>
			</div>
		</nav>
	);
};

const MainLink = styled(Link)`
	&:hover {
		background: rgb(245, 245, 245);
	}
`;

export default TopNav;
