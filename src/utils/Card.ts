import styled from "styled-components";

const Card = styled.div`
    padding: clamp(1.25rem, 3vw, 2rem);
    background: ${({theme}) => theme.colors.surface};
    border: 1px solid ${({theme}) => theme.colors.border};
    border-radius: ${({theme}) => theme.radius.md};
    box-shadow: 0 12px 32px rgba(23, 37, 34, 0.045);
`;

export default Card;