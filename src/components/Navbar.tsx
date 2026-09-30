import styled from "styled-components";
import logo from "../assets/vinicius-gonzalez-logo.png";

const Nav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;

  background: rgba(245, 247, 244, 0.92);
  backdrop-filter: blur(14px);

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: auto;

  min-height: 76px;

  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width:768px) {
    flex-wrap: wrap;
    padding-top: 0.85rem;
  }
`;

const Logo = styled.a`
  display: inline-flex;
  align-items: center;

  img {
    display: block;
    width: 280px;
    height: auto;

    @media (max-width: 768px) {
      width: 220px;
    }
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 5px;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 1.75rem;

  @media(max-width:768px){
    display: flex;
    order: 3;
    width: 100%;
    gap: 1.4rem;
    overflow-x: auto;
    padding: 0.4rem 0 0.85rem;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.88rem;
  font-weight: 600;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 5px;
  }

  @media(max-width:768px) {
    white-space: nowrap;
  }
`;

const ContactLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 0.55rem 0.9rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  @media(max-width:768px) {
    margin-left: auto;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.surface};
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Container>
      <Logo href="#" aria-label="Vinicius Gonzalez home">
        <img src={logo} alt="" />
      </Logo>

      <Links>

        <Link href="#about">
        About
        </Link>

        <Link href="#experience">
        Experience
        </Link>

        <Link href="#projects">
        Projects
        </Link>

        <Link href="#skills">
        Skills
        </Link>

        <Link href="#contact">
        Contact
        </Link>

      </Links>

      <ContactLink href="mailto:vinigonzalez1993@gmail.com">
        Let's talk
      </ContactLink>

      </Container>

    </Nav>
  )

}

export default Navbar;