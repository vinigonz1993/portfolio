import styled from "styled-components";

const Wrapper = styled.section`
  max-width: ${({theme}) => theme.maxWidth};
  margin: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
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