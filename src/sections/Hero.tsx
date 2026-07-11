import styled from "styled-components";
import Section from "../components/Section";
import { Button } from "../components/Button";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/profile.jpg";


const Wrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:4rem;

  @media(max-width:768px){
    flex-direction:column-reverse;
    text-align:center;
  }
`;

const Content = styled.div`
  flex:1;
`;

const ProfileImage = styled.img`
  width:280px;
  height:280px;
  object-fit:cover;
  border-radius:50%;
  border:4px solid ${({theme})=>theme.colors.border};

  @media(max-width:768px){
    width:220px;
    height:220px;
}
`;

const Title = styled.h1`
  font-size:4rem;
  margin-bottom:1rem;
  span{
    color:${({theme})=>theme.colors.primary};
  }

  @media(max-width:768px){
    font-size:3rem;
  }
`;

const Subtitle = styled.h2`
  color:${({theme})=>theme.colors.textSecondary};
  font-weight:400;
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
  display:flex;
  align-items:center;
  gap:0.5rem;
`;

const Hero = () => {

  return (
    <Section>
    <Wrapper>
    <Content>
    <Title>
      Hi, I'm <span>Vinicius Gonzalez</span>
    </Title>

    <Subtitle>
      Senior Full Stack Developer
    </Subtitle>

    <Description>
      I build scalable web applications using
      Python, Django, React, AWS and AI.
    </Description>

    <Actions>

    <Button
      href="https://github.com/vinigonz1993"
      target="_blank"
    >
    <FaGithub />
    </Button>

    <SecondaryButton
      href="https://www.linkedin.com/in/vin%C3%ADcius-gonzalez-caetano-06943044/"
      target="_blank"
    >
    <FaLinkedin />
    </SecondaryButton>


    <SecondaryButton href="/vinicius_resume.pdf" target="_blank">
      Resume
    </SecondaryButton>


    </Actions>

    </Content>


    <ProfileImage
    src={profile}
    alt="Vinicius Gonzalez"
    />


    </Wrapper>

    </Section>
  )

}

export default Hero;