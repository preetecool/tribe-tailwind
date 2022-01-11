import React from "react";
import styled from "styled-components";

const ShowTags = () => {
	const tags = ["#bug", "#event", "#news", "#awesome", "#2022"];
	return (
		<>
			<TagsContainer>
				<SubTitle>Trending Topics: </SubTitle>
				{tags.map((trendTopic, index) => {
					return (
						<TrendingTag href="#" key={index}>
							{trendTopic}{" "}
						</TrendingTag>
					);
				})}
			</TagsContainer>
		</>
	);
};

const TagsContainer = styled.div`
	display: flex;
	justify-content: center;
	padding: 0.25rem;
`;

const SubTitle = styled.h3`
	font-size: 0.9em;
	margin-right: 1rem;
`;

const TrendingTag = styled.a`
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 0.7em;
	padding: 0 0.8rem;
	background: rgb(240, 240, 240);
	border-radius: 5px;
	margin: 0 0.5em;

	&:hover {
		background: #00b241;
		color: #fff;
	}
`;
export default ShowTags;
