import styled from "styled-components";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;

  background: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(5px);

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: auto;

  height: 70px;

  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.a`
  font-size: 1.2rem;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.text};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Links = styled.div`
  display: flex;
  gap: 2rem;

  @media(max-width:768px){
    display:none;
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};

  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Container>
      <Logo href="#">
        V<span>G</span>
      </Logo>

      <Links>

        <Link href="#about">
        About
        </Link>

        <Link href="#experience">
        Experience
        </Link>

        <Link href="#skills">
        Skills
        </Link>

        <Link href="#contact">
        Contact
        </Link>

      </Links>

      </Container>

    </Nav>
  )

}

export default Navbar;