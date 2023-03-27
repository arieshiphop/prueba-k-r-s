import styled from "styled-components";
import { useEffect, useState } from "react";
import CacheService from "../services/CacheService";
import Podcast from "./Podcast";
import SearchInput from "./SearchInput";
import { getAllPodcasts } from "../services/PodcastService";
const StyledGridSection = styled.section`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  height: 100%;
  width: 100%;
`;
const StyledTopDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

function PodcastList() {
  const [rawPodcasts, setRawPodcasts] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllPodcasts(setRawPodcasts);
  }, []);

  const filterPodcasts = (podcast) => {
    const podcastName = podcast["im:name"].label.toLowerCase();
    const artistName = podcast["im:artist"].label.toLowerCase();
    const term = searchTerm.toLowerCase();
    return podcastName.includes(term) || artistName.includes(term);
  };

  const podcastList = rawPodcasts?.contents
    ? JSON.parse(rawPodcasts.contents).feed.entry.filter(filterPodcasts)
    : [];

  return (
    <div>
      <StyledTopDiv>
        <SearchInput setSearchTerm={setSearchTerm} />
      </StyledTopDiv>
      <StyledGridSection>
        {podcastList.map((podcast, index) => (
          <Podcast key={index} podcast={podcast} />
        ))}
      </StyledGridSection>
    </div>
  );
}

export default PodcastList;
