import styled from "styled-components";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import Section from "../components/Section";
import { Button } from "../components/Button";
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

const Preview = styled.div`
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.background};
`;

const ProjectName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
`;

const ProjectImage = styled.img`
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  transition: transform 0.35s ease;

  ${Preview}:hover & {
    transform: scale(1.025);
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.25rem;
`;

const ProjectButton = styled(Button)`
  gap: 0.65rem;
  padding: 0.4rem 0.8rem;
  font-size: 0.7rem;
  box-shadow: 0 8px 18px rgba(20, 125, 112, 0.16);

  svg {
    font-size: 0.8rem;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translate(2px, -2px);
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.4rem;
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
                <Preview>
                  <ProjectImage src={project.image} alt={`${project.name} preview`} />
                </Preview>
              </Col>

              <Col $order={isEven ? 1 : 2}>
                <ProjectName>{project.name}</ProjectName>
                <Description>{project.description}</Description>

                {project.url && (
                  <ProjectButton href={project.url} target="_blank" rel="noopener noreferrer">
                    View Project <FaArrowUpRightFromSquare aria-hidden="true" />
                  </ProjectButton>
                )}

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