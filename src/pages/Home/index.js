import styled from "styled-components";
import PodcastList from "../../components/PodcastList";
const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 1rem 0 1rem 0;
  overflow: hidden;
`;
function HomePage() {
  return (
    <StyledMain>
      <PodcastList />
    </StyledMain>
  );
}

export default HomePage;
