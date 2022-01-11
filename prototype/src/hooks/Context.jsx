import React, { useState, createContext } from "react";

export const AppContext = createContext();

const Context = ({ children }) => {
	const [isSticky, setIsSticky] = useState(false);
	return (
		<>
			<AppContext.Provider value={{ isSticky, setIsSticky }}>
				{children}
			</AppContext.Provider>
		</>
	);
};

export default Context;
