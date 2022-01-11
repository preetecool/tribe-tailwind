import React from "react";

const SearchBar = () => {
	return (
		<>
			<div className="hidden lg:flex flex-grow lg:col-span-6 space-x-4">
				<div className="flex items-center flex-1">
					<div className="relative isolate w-full relative" value="">
						<div>
							<div
								role="combobox"
								aria-haspopup="listbox"
								aria-owns="downshift-57-menu"
								aria-expanded="false"
							>
								<div className="flex relative rounded-md shadow-sm isolate w-full">
									<div className="flex items-stretch flex-grow focus-within:z-10">
										<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 20 20"
												fill="currentColor"
												aria-hidden="true"
												focusable="false"
												className="h-5 w-5 text-basicSecondary-400"
											>
												<path
													fillRule="evenodd"
													d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
													clipRule="evenodd"
												></path>
											</svg>
										</div>
										<input
											type="text"
											className="block w-full rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-1 text-basicSecondary-500 bg-actionSecondary-50 placeholder-basicSecondary-300 focus:ring-actionSecondary-600 focus:border-actionSecondary-600 border border-neutral-300 pl-10"
											id="downshift-57-input"
											aria-autocomplete="list"
											aria-controls="downshift-57-menu"
											aria-labelledby="downshift-57-label"
											autoComplete="off"
											placeholder="Search..."
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchBar;
