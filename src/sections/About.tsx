import styled from "styled-components";
import Section from "../components/Section";
import { FaCode, FaCloud, FaBriefcase } from "react-icons/fa";
import TechCarousel from "../components/TechCarousel";
import Title from "../utils/Title";

const Content = styled.div`
    color:${({theme})=>theme.colors.textSecondary};
    line-height:1.8;
    font-size:1.1rem;
`;

const Stats = styled.div`
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    gap:2rem;
    margin-top:3rem;
    @media(max-width:768px){
        grid-template-columns:1fr;
    }
`;

const StatCard = styled.div`
    background:${({theme})=>theme.colors.surface};
    border:1px solid ${({theme})=>theme.colors.border};
    border-radius:${({theme})=>theme.radius.md};
    padding:1.5rem;
    display:flex;
    align-items:center;
    gap:2rem;
    transition:0.2s;

    &:hover{
        transform:translateY(-5px);
        border-color:${({theme})=>theme.colors.primary};
    }
`;

const Icon = styled.div`
    font-size:2rem;
    color:${({theme})=>theme.colors.primary};
    display:flex;
    align-items:center;
    justify-content:center;
`;

const StatContent = styled.div`
    strong{
        display:block;
        font-size:1.8rem;
        color:${({theme})=>theme.colors.text};
    }

    span{
        font-size:0.9rem;
        color:${({theme})=>theme.colors.textSecondary};
    }
`;

const Highlight = styled.span`
    color:${({theme})=>theme.colors.primary};
    font-weight:600;
`;

const About = () => {

    return (
        <Section id="about">

        <Title>
        About Me
        </Title>

        <Content>

        <Stats>
            <StatCard>

                <Icon>
                <FaBriefcase />
                </Icon>

                <StatContent>
                <strong>8+</strong>
                <span>Years Experience</span>
                </StatContent>

            </StatCard>
            <StatCard>

                <Icon>
                <FaCode />
                </Icon>

                <StatContent>
                <strong>20+</strong>
                <span>Technologies Used</span>
                </StatContent>

            </StatCard>
            <StatCard>

                <Icon>
                <FaCloud />
                </Icon>

                <StatContent>
                <strong>Cloud</strong>
                <span>AWS • Docker • Kubernetes • AI</span>
                </StatContent>

            </StatCard>

        </Stats>

        <TechCarousel />

        <p>
            I'm a <Highlight>Senior Full Stack Developer, </Highlight>
            with experience building scalable web applications,
            cloud infrastructure, and AI-powered solutions.
        </p>

        <br />

        <p>
            My main focus is backend development with
            <Highlight> Python and Django</Highlight>,
            combined with modern frontend applications using
            <Highlight> React and TypeScript</Highlight>.
        </p>


        <br />


        <p>
            I enjoy designing reliable systems, improving
            developer workflows, and solving complex problems
            through clean architecture and automation.
        </p>

        </Content>

        </Section>
    )
}

export default About;