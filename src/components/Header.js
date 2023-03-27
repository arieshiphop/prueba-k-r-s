import styled from "styled-components";
import { Link } from "wouter";
const Title = styled.h1`
  font-size: 1.5rem;
  color: #4a658f;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;
const TopBar = styled.header`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 4rem;
  max-width: 100%;
  padding: 1rem;
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
`;

function Header() {
  return (
    <TopBar>
      <Link href="/">
        <Title>Podcaster</Title>
      </Link>
    </TopBar>
  );
}

export default Header;
