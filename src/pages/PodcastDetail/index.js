import styled from "styled-components";
import CacheService from "../../services/CacheService";
import { useEffect, useState } from "react";
import { Link } from "wouter";
import LateralInfo from "../../components/LateralInfo";
import { formatDate, milisecsToTime } from "../../utils";
import { getPodcastDetail } from "../../services/PodcastService";
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 10rem;
  padding: 1rem;
`;
const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  border: 1px solid #ddd;
  th,
  td {
    text-align: left;
    padding: 16px;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
  th {
    background-color: white;
    color: black;
  }
`;

function PodcastDetailPage({ params }) {
  const [podcastInfo, setPodcastInfo] = useState(null);
  console.log("ID", params.id);
  useEffect(() => {
    getPodcastDetail(params.id, setPodcastInfo);
  }, []);
  const handleClick = () => {
    console.log("click");
  };

  return (
    <StyledContainer>
      {podcastInfo && <LateralInfo podcast={podcastInfo[0]} />}
      <ul>
        <StyledTable>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {podcastInfo &&
              podcastInfo.map((podcast) => (
                <tr key={podcast.trackId}>
                  <td>
                    <Link
                      href={`/podcast/${params.id}/episode/${podcast.trackId}`}
                      onClick={handleClick}
                    >
                      {podcast.trackName}
                    </Link>
                  </td>
                  <td>{formatDate(podcast.releaseDate)}</td>
                  <td>{milisecsToTime(podcast.trackTimeMillis)}</td>
                </tr>
              ))}
          </tbody>
        </StyledTable>
      </ul>
    </StyledContainer>
  );
}

export default PodcastDetailPage;
