import styled from "styled-components";
import { Link } from "wouter";
const StyledLateralInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  border-radius: 10px;
  padding: 20px;
  margin-left: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 1rem;
`;

const Author = styled.p`
  font-style: italic;
  font-size: 0.8rem;
`;

const Description = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  text-align: left;
`;
const SeparatorLine = styled.hr`
  width: 100%;
  margin: 10px 0;
`;
const DescriptionText = styled.p`
  font-size: 0.8rem;
  text-align: left;
  max-width: 95%;
`;
function LateralInfo({ podcast }) {
  const podcastData = JSON.parse(localStorage.getItem("podcastData"));
  return (
    <StyledLateralInfo>
      <Link href={`/podcast/${podcast.collectionId}`}>
        <img src={podcast.artworkUrl160} alt={podcast.collectionName} />
      </Link>
      <SeparatorLine />
      <Title>{podcast.collectionName}</Title>
      <Author>by {podcastData["im:artist"].label}</Author>
      <SeparatorLine />
      <Description>Description: </Description>
      <DescriptionText>{podcast.description}</DescriptionText>
    </StyledLateralInfo>
  );
}

export default LateralInfo;
