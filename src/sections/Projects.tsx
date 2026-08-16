import styled from "styled-components";
import Section from "../components/Section";
import Title from "../utils/Title";
import Card from "../utils/Card";
import { projects } from "../data/projects";

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Row = styled(Card)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

interface ColProps {
  $order: number;
}

const Col = styled.div<ColProps>`
  order: ${({ $order }) => $order};

  @media (max-width: 900px) {
    order: initial;
  }
`;

const ProjectName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
`;

const ProjectImage = styled.img`
width: 100%;
height: auto;
max-height: 260px;
object-fit: cover;

border-radius: ${({ theme }) => theme.radius.md};
border: 1px solid ${({ theme }) => theme.colors.border};

&:hover {
    transition: 0.375s;
    transform: scale(1.1);
}

transition: 0.2s;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.4rem;
`;

const Tag = styled.span`
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Projects = () => {
  return (
    <Section id="projects">
      <Title>Projects</Title>

      <List>
        {projects.map((project, index) => {
          const isEven = (index + 1) % 2 === 0;

          return (
            <Row key={project.name}>
              <Col $order={isEven ? 2 : 1}>
                <ProjectImage src={project.image} alt={`${project.name} preview`} />
              </Col>

              <Col $order={isEven ? 1 : 2}>
                <ProjectName>{project.name}</ProjectName>
                <Description>{project.description}</Description>

                <Tags>
                  {project.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </Tags>
              </Col>
            </Row>
          );
        })}
      </List>
    </Section>
  );
};

export default Projects;