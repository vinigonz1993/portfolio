import styled from "styled-components";
import Section from "../components/Section";
import { technologies } from "../data/technologies";
import Title from "../utils/Title";
import Card from "../utils/Card";


const Grid = styled.div`
    display:grid;
    grid-template-columns:repeat(2, 1fr);
    gap:2rem;

    @media(max-width:768px){
        grid-template-columns:1fr;
    }

`;


const Category = styled.h3`
    font-size:1.3rem;
    margin-bottom:1.5rem;
    color:${({theme})=>theme.colors.text};
`;

const Items = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:0.8rem;
`;

const Skill = styled.div`
    display:flex;
    align-items:center;
    gap:0.5rem;
    padding:0.5rem 0.8rem;
    border-radius:${({theme})=>theme.radius.sm};
    background:${({theme})=>theme.colors.background};
    border:1px solid ${({theme})=>theme.colors.border};
    color:${({theme})=>theme.colors.textSecondary};
    font-size:0.9rem;

    svg{
        font-size:1.4rem;
        color:${({theme})=>theme.colors.primary};
    }

`;



const Skills = () => {

    const categories = [
        ...new Set(
            technologies.map(
            tech => tech.category
            )
        )
    ];

    return (
        <Section id="skills">
        <Title>
            Technical Skills
        </Title>
        <Grid>
        {categories.map(category => (
            <Card key={category}>
            <Category>
                {category}
            </Category>
            <Items>

            {technologies.filter(tech => tech.category === category).map(tech => {
                const Icon = tech.icon;
                    return (

                        <Skill key={tech.name}>
                        <Icon />

                        {tech.name}

                        </Skill>
                    )
            })}

            </Items>
            </Card>

        ))}

        </Grid>
        </Section>
    )
}

export default Skills;