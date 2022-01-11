import React from "react";
import MakeSticky from "./MakeSticky";
import ShowTags from "./ShowTags";

const RightSideHeader = () => {
	return (
		<div className="flex items-center space-x-4 lg:col-span-3 col-span-7 justify-end">
			<button
				type="button"
				className="inline-flex items-center relative focus:outline-none focus-visible:ring text-basicSecondary-500 font-medium shadow-sm py-2 text-sm rounded-full border border-neutral-300 bg-actionSecondary-50 hover:bg-actionSecondary-100 lg:hidden w-10 h-10 px-0 justify-center flex-shrink-0"
			>
				<span className="flex">
					<span className="inline-flex items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
							className="h-5 w-5"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							></path>
						</svg>
					</span>
				</span>
			</button>
			<div className="flex items-center space-x-4 flex-shrink-0">
				<MakeSticky />
				<div className="relative inline-block text-left">
					<button
						className="rounded-full flex text-basicSecondary-400 hover:text-basicSecondary-600 focus:outline-none focus-visible:ring w-10 h-10 items-center justify-center"
						id="headlessui-menu-button-1"
						type="button"
						aria-haspopup="true"
						aria-expanded="false"
					>
						<div className="inline-flex items-center relative focus:outline-none focus-visible:ring text-basicSecondary-500 font-medium shadow-sm py-2 text-sm rounded-full border border-neutral-300 bg-actionSecondary-50 hover:bg-actionSecondary-100 w-10 h-10 px-0 justify-center">
							<span className="flex">
								<span className="inline-flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
										className="h-5 w-5 h-5 w-5"
										focusable="false"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
										></path>
									</svg>
								</span>
							</span>
						</div>
					</button>
				</div>
				<div className="relative inline-block text-left">
					<button
						className="flex items-center text-basicSecondary-400 hover:text-basicSecondary-600 focus:outline-none focus-visible:ring rounded-full"
						id="headlessui-menu-button-2"
						type="button"
						aria-haspopup="true"
						aria-expanded="false"
						style={{
							background: "#00b241",
							color: "#fff",
						}}
					>
						<div className="inline-flex items-center relative focus:outline-none focus-visible:ring text-basicPrimary-500 font-medium shadow-sm py-2 text-sm rounded-full border border-transparent bg-actionPrimary-600 hover:bg-actionPrimary-700 w-10 h-10 px-0 justify-center">
							<span className="flex">
								<span className="inline-flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
										className="h-5 w-5 h-5 w-5"
										focusable="false"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M12 4v16m8-8H4"
										></path>
									</svg>
								</span>
							</span>
						</div>
					</button>
				</div>
				<div className="relative inline-block text-left">
					<button
						className="rounded-full flex items-center text-basicSecondary-400 hover:text-basicSecondary-600 focus:outline-none focus-visible:ring"
						id="headlessui-menu-button-3"
						type="button"
						aria-haspopup="true"
						aria-expanded="false"
						style={{ background: "rgb(240, 240, 240)" }}
					>
						<span className="sr-only">Show Profile</span>
						<span className="inline-flex relative items-center justify-center flex-shrink-0 bg-surface-200 rounded-full h-10 w-10 h-8 w-8 rounded-full">
							<span
								className="text-md font-medium leading-none text-basicSurface-500"
								style={{
									fontSize: "0.59em",
									fontWeight: "500",
									color: "rgb(120, 120, 120)",
								}}
							>
								pd
							</span>
						</span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default RightSideHeader;
