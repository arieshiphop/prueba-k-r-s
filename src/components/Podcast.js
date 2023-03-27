import styled from "styled-components";
import { Link } from "wouter";

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.1);
  gap: 0.5rem;
  padding: 0 1rem 1rem 1rem;
  color: black;
  height: 100%;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: all 0.1s ease-in-out;
  }
`;

const StyledImage = styled.img`
  object-fit: cover;
  border-radius: 50%;
  max-height: 8rem;
  &:hover: {
    transform: scale(1.1);
    box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
  }
`;

const StyledPTitle = styled.p`
  font-weight: 600;
  text-align: center;
`;

const StyledP = styled.p`
  text-align: center;
  font-size: 1;
`;

const savePodcastData = (podcast) => {
  localStorage.setItem("podcastData", JSON.stringify(podcast));
  console.log(podcast);
};

function Podcast({ podcast }) {
  const handleClick = () => {
    savePodcastData(podcast);
  };

  return (
    <Link
      onClick={handleClick}
      href={`/podcast/${podcast.id.attributes["im:id"]}`}
    >
      <StyledArticle>
        <StyledImage
          src={podcast["im:image"][2].label}
          alt={podcast["im:name"].label}
        />
        <StyledPTitle>{podcast["im:name"].label.toUpperCase()}</StyledPTitle>
        <StyledP>Author: {podcast["im:artist"].label}</StyledP>
      </StyledArticle>
    </Link>
  );
}

export default Podcast;
