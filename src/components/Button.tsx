import styled from "styled-components";

export const Button = styled.a`

display:inline-flex;

align-items:center;
justify-content:center;

gap:0.5rem;

padding:0.75rem 1.5rem;

border-radius:${({theme})=>theme.radius.md};

background:${({theme})=>theme.colors.primary};

color:white;

font-weight:600;

transition:0.2s;

cursor:pointer;

&:focus-visible {
  outline: 3px solid ${({theme})=>theme.colors.primary};
  outline-offset: 3px;
}

&:hover{
  transform:translateY(-2px);
  filter: brightness(0.95);
}

`;