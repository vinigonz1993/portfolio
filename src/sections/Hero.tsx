import styled from "styled-components";
import Section from "../components/Section";
import { Button } from "../components/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpg";


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(2rem, 8vw, 7rem);
  min-height: min(650px, calc(100svh - 76px));

  @media(max-width:768px){
    min-height: auto;
    flex-direction: column-reverse;
    text-align: center;
    gap: 2.5rem;
  }
`;

const Content = styled.div`
  flex:1;
  max-width: 690px;
`;

const Eyebrow = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  color: ${({theme}) => theme.colors.primary};
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1.5rem;

  &::before {
    content: "";
    width: 24px;
    height: 2px;
    background: ${({theme}) => theme.colors.accent};
  }

  @media(max-width:768px) {
    justify-content: center;
  }
`;

const ProfileImage = styled.img`
  width: clamp(220px, 27vw, 330px);
  aspect-ratio: 1;
  object-fit:cover;
  border-radius: ${({theme})=>theme.radius.lg};
  border: 1px solid ${({theme})=>theme.colors.border};
  box-shadow: 18px 18px 0 ${({theme})=>theme.colors.border};

  @media(max-width:768px){
    width: 220px;
    box-shadow: 10px 10px 0 ${({theme})=>theme.colors.border};
}
`;

const Title = styled.h1`
  font-size: clamp(3rem, 6vw, 5.25rem);
  line-height: 1.05;
  font-weight: 800;
  margin-bottom: 1.25rem;
  letter-spacing: 0;
  span{
    display: block;
    margin-top: 0.4rem;
    font-size: 0.56em;
    color:${({theme})=>theme.colors.primary};
  }
`;

const Subtitle = styled.p`
  color:${({theme})=>theme.colors.textSecondary};
  font-weight:500;
  font-size: clamp(1.2rem, 2.4vw, 1.6rem);
  margin-bottom:1.5rem;
`;

const Description = styled.p`
  max-width:650px;
  line-height:1.7;
  color:${({theme})=>theme.colors.textSecondary};
  margin-bottom:2rem;
`;

const Actions = styled.div`
  display:flex;
  gap:1rem;
  flex-wrap:wrap;
  @media(max-width:768px){
    justify-content:center;
  }
`;

const SecondaryButton = styled(Button)`
  background:transparent;
  border:1px solid ${({theme})=>theme.colors.border};
  color: ${({theme})=>theme.colors.text};
  display:flex;
  align-items:center;
  gap:0.5rem;

  &:hover {
    background: ${({theme})=>theme.colors.surface};
    border-color: ${({theme})=>theme.colors.primary};
    filter: none;
  }
`;

const Hero = () => {

  return (
    <Section>
    <Wrapper>
    <Content>
    <Eyebrow>Ottawa-based senior software engineer · Open to meaningful work</Eyebrow>
    <Title>
      Vinicius Gonzalez
      <span>Senior Software Engineer</span>
    </Title>

    <Subtitle>
      Full-stack development · Cloud infrastructure
    </Subtitle>

    <Description>
      I build scalable full-stack applications and cloud infrastructure with
      Python, Django, TypeScript, React, Next.js, AWS, Kubernetes, Docker, and PostgreSQL.
    </Description>

    <Actions>
    <Button href="mailto:vinigonzalez1993@gmail.com">
      Let's talk
    </Button>

    <SecondaryButton
      href="https://github.com/vinigonz1993"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub profile"
    >
    <FaGithub />
    </SecondaryButton>

    <SecondaryButton
      href="https://www.linkedin.com/in/vin%C3%ADcius-gonzalez-caetano-06943044/"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn profile"
    >
    <FaLinkedin />
    </SecondaryButton>


    <SecondaryButton href="https://vinigonz1993.github.io/portfolio/vinicius_resume.pdf" target="_blank" rel="noreferrer">
      Resume
    </SecondaryButton>


    </Actions>

    </Content>


    <ProfileImage
    src={profile}
    alt="Portrait of Vinicius Gonzalez, Senior Software Engineer"
    fetchPriority="high"
    />


    </Wrapper>

    </Section>
  )

}

export default Hero;