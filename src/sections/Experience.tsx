import styled from "styled-components";
import Section from "../components/Section";
import { experiences } from "../data/experience";
import Title from "../utils/Title";
import Card from "../utils/Card";


const Timeline = styled.div`
    position:relative;
    max-width: 880px;
    margin: auto;
    &::before{
        content:"";
        position:absolute;
        top: 0.5rem;
        bottom: 2.5rem;
        left: 7px;
        width: 1px;
        background:${({theme})=>theme.colors.border};
    }

    @media(max-width:768px){
        &::before{
            left: 7px;
        }
    }
`;

const TimelineItem = styled.div`
    position:relative;
    padding: 0 0 1.5rem 2.5rem;

    @media(max-width:768px){
        width:100%;
        padding-left: 2.5rem;
        padding-right: 0;
        text-align: left;
    }
`;


const Dot = styled.div`
    position:absolute;
    top: 0.6rem;
    left: 0;
    width: 15px;
    height: 15px;
    border-radius:50%;
    background:${({theme})=>theme.colors.primary};
    border: 4px solid ${({theme})=>theme.colors.background};
    box-shadow: 0 0 0 1px ${({theme})=>theme.colors.primary};
`;

const Period = styled.span`
    color:${({theme})=>theme.colors.primary};
    font-weight:600;
`;

const Role = styled.h3`
    font-size:1.5rem;
    margin:0.5rem 0;
`;

const Company = styled.h4`
    color:${({theme})=>theme.colors.textSecondary};
    margin-bottom:1rem;
`;

const List = styled.ul`
    padding-left:1.2rem;
    color:${({theme})=>theme.colors.textSecondary};
    line-height:1.8;
`;

const Tags = styled.div`
    display:flex;
    flex-wrap:wrap;
    gap:0.5rem;
    margin-top:1.5rem;
`;

const Tag = styled.span`
    padding:0.25rem 0.65rem;
    border-radius:${({theme})=>theme.radius.sm};
    background:${({theme})=>theme.colors.background};
    border:1px solid ${({theme})=>theme.colors.border};
    font-size:0.85rem;
`;

const Experience = () => {
    return (
    <Section id="experience">
        <Title>
        Experience
        </Title>


        <Timeline>

        {experiences.map((item,index)=>(

            <TimelineItem key={index}>
                <Card>
                    <Dot />
                    <Period>
                        {item.period}
                    </Period>

                    <Role>
                        {item.role}
                    </Role>

                    <Company>
                        {item.sector}
                    </Company>

                    <List>

                    {item.description.map((d,i)=>(
                        <li key={i}>
                        {d}
                        </li>
                    ))}

                    </List>
                    <Tags>

                    {item.technologies.map((tech)=>(
                        <Tag key={tech}>
                        {tech}
                        </Tag>
                    ))}

                    </Tags>
                </Card>
            </TimelineItem>

        ))}

        </Timeline>

    </Section>

    )

}

export default Experience;