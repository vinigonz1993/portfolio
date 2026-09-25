import styled from "styled-components";

const Wrapper = styled.section`
  max-width: ${({theme}) => theme.maxWidth};
  margin: auto;
  padding-left: clamp(1.25rem, 5vw, 3rem);
  padding-right: clamp(1.25rem, 5vw, 3rem);
  width: 100%;
`;

interface Props {
  id?: string;
  children: React.ReactNode;
}

export default function Section({id, children}: Props) {
  return (
    <Wrapper id={id}>
      {children}
    </Wrapper>
  );
}