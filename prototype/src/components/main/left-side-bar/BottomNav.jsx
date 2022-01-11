import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import expandIcon from "../../../assets/icons/sidebar/expand.svg";

import aboutIcon from "../../../assets/icons/sidebar/about-icon.jpg";
import sayHelloIcon from "../../../assets/icons/sidebar/say-hello.jpg";

import knowledgeBaseIcon from "../../../assets/icons/sidebar/kb.jpg";
import communityInsightIcon from "../../../assets/icons/sidebar/ci.jpg";
import tripTricksIcon from "../../../assets/icons/sidebar/tt.jpg";

import helpIcon from "../../../assets/icons/sidebar/help.jpg";
import showTellIcon from "../../../assets/icons/sidebar/st.jpg";
import feedBackIcon from "../../../assets/icons/sidebar/gf.jpg";
import devHubIcon from "../../../assets/icons/sidebar/dh.jpg";
import betaFeedbackIcon from "../../../assets/icons/sidebar/bf.jpg";

import companyNewsIcon from "../../../assets/icons/sidebar/cn.jpg";
import productUpdateIcon from "../../../assets/icons/sidebar/pu.jpg";

import knowledgeBase1Icon from "../../../assets/icons/sidebar/kb1.png";

const BottomNav = () => {
	const [Navitems, setNavItems] = useState([
		{
			mainTitle: "Get Started",
			to: "/",
			item: [
				{ title: "About Campfire", to: "/", logosrc: aboutIcon },
				{ title: "Say Hello", to: "/", logosrc: sayHelloIcon },
			],

			view: true,
		},
		{
			mainTitle: "Resources",
			to: "/",
			item: [
				{
					title: "Knowledge Base",
					to: "/",
					logosrc: knowledgeBaseIcon,
				},
				{
					title: "Community Insights",
					to: "/",
					logosrc: communityInsightIcon,
				},
				{
					title: "Tips & Tricks",
					to: "/",
					logosrc: tripTricksIcon,
				},
			],

			view: true,
		},
		{
			mainTitle: "Connect",
			to: "/",
			item: [
				{ title: "Ask for Help", to: "/", logosrc: helpIcon },
				{ title: "Show & Tell", to: "/", logosrc: showTellIcon },
				{ title: "Give Feeback", to: "/", logosrc: feedBackIcon },
				{ title: "DevHub", to: "/tips-tricks", logosrc: devHubIcon },
				{
					title: "Beta Feedback",
					to: "/",
					logosrc: betaFeedbackIcon,
				},
			],

			view: true,
		},
		{
			mainTitle: "Announcements",
			to: "/",
			item: [
				{
					title: "Company News",
					to: "/",
					logosrc: companyNewsIcon,
				},
				{
					title: "Product Updates",
					to: "/",
					logosrc: productUpdateIcon,
				},
			],

			view: true,
		},
		{
			mainTitle: "Tribe 1.0",
			to: "/",
			item: [
				{
					title: "Knowledge Base 1.0",
					to: "/",
					logosrc: knowledgeBase1Icon,
				},
			],

			view: true,
		},
	]);

	const handleExpandIconClick = (index) => {
		const NavItemsCopy = [...Navitems];
		NavItemsCopy[index].view = !NavItemsCopy[index].view;
		setNavItems(NavItemsCopy);
	};

	return (
		<nav className="flex-1 space-y-2 isolate mb-5">
			{Navitems.map((element, index) => {
				return (
					<div key={index} className="space-y-1" role="group">
						<div id="headlessui-disclosure-panel-89">
							<MainLink
								className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
								to={element.to}
							>
								<ExpandIcon
									id={element.view ? "" : "expand-button-expanded"}
									onClick={() => handleExpandIconClick(index)}
								>
									<img src={expandIcon} />
								</ExpandIcon>
								<span className="truncate" style={{ fontWeight: "500" }}>
									{element.mainTitle}
								</span>
							</MainLink>
							{element.view &&
								element.item.map((el, index) => {
									return (
										<InnerLink
											className="text-basicMain-600 hover:bg-main-100 hover:text-basicMain-900 group flex items-center px-3 py-2 leading-5 rounded-md"
											to={el.to}
											style={{ padding: "8px 12px" }}
										>
											<MainIcon src={el.logosrc} />
											<span className="truncate">{el.title}</span>
										</InnerLink>
									);
								})}
						</div>
					</div>
				);
			})}
		</nav>
	);
};

const ExpandIcon = styled.button`
	display: flex;
	width: 24px;
	height: 24px;
	justify-content: center;
	align-items: center;
	background: rgb(240, 240, 240);
	border-radius: 100%;
	padding: 0.1rem;
	margin: 0 12px 0 -4px;

	transform: rotate(0.5turn);

	&:hover {
		background: rgb(218, 218, 218);
	}
`;

const InnerLink = styled(Link)`
	margin: 4px 6px;
	&:hover {
		background: rgb(245, 245, 245);
	}
`;

const MainLink = styled(Link)`
	&:hover {
		background: rgb(245, 245, 245);
	}
`;

const MainIcon = styled.img`
	display: flex;
	width: 24px;
	height: 24px;
	justify-content: center;
	align-items: center;
	border-radius: 6px;
	margin: 0 12px 0 -4px;
`;

export default BottomNav;
