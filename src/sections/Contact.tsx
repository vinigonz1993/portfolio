import styled from "styled-components";
import Section from "../components/Section";
import { Button } from "../components/Button";
import Title from "../utils/Title";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


const Wrapper = styled.div`
    text-align:center;
    max-width:700px;
    margin:auto;
`;

const Description = styled.p`
    color:${({theme})=>theme.colors.textSecondary};
    line-height:1.8;
    font-size:1.1rem;
    margin-bottom:2.5rem;
`;

const Actions = styled.div`
    display:flex;
    justify-content:center;
    gap:1rem;
    flex-wrap:wrap;
`;

const ContactButton = styled(Button)`
    display:flex;
    align-items:center;
    gap:0.5rem;
`;

const SecondaryButton = styled(ContactButton)`
    background:transparent;
    border:1px solid ${({theme})=>theme.colors.border};
`;

const Contact = () => {

    return (
        <Section id="contact">
            <Wrapper>
            <Title>
                Let's Connect
            </Title>

            <Description>
                I'm always interested in discussing new opportunities,
                interesting projects, and challenging engineering problems.
            </Description>

            <Actions>
                <ContactButton href="mailto:vinigonzalez1993@gmail.com">
                    <FaEnvelope /> Email Me
                </ContactButton>


                <SecondaryButton
                    href="https://www.linkedin.com/in/vin%C3%ADcius-gonzalez-caetano-06943044/"
                    target="_blank"
                >
                <FaLinkedin />LinkedIn
                </SecondaryButton>

                <SecondaryButton
                    href="https://github.com/vinigonz1993"
                    target="_blank"
                >
                <FaGithub />GitHub
                </SecondaryButton>

            </Actions>
            </Wrapper>
        </Section>

    )
}

export default Contact;