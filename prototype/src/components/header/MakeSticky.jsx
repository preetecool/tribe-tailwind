import React, { useContext } from "react";
import styled from "styled-components";

import { AppContext } from "../../hooks/Context";

const MakeSticky = () => {
	const { isSticky, setIsSticky } = useContext(AppContext);
	const handleStickyClick = () => {
		setIsSticky(!isSticky);
	};

	return (
		<>
			<StickyButton id={isSticky ? "green" : null} onClick={handleStickyClick}>
				Sticky Nav
			</StickyButton>
		</>
	);
};

const StickyButton = styled.button`
	font-size: 0.95em;
	font-weight: 500;
	background: rgb(240, 240, 240);
	padding: 0.5rem 1rem;
	border-radius: 5px;
	box-shadow: rgba(0, 0, 0, 0.11) 0px 1px 4px;

	&:hover {
		background: #00b241;
		color: #fff;
	}

	@media (max-width: 768px) {
		font-size: 0.7em;
		max-width: 90px;
	}
`;

export default MakeSticky;
