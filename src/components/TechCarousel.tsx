import styled from "styled-components";
import { technologies } from "../data/technologies";


const Wrapper = styled.div`
    overflow:hidden;
    width:100%;
    margin-top:3rem;
    margin-bottom:3rem;
`;

const Track = styled.div`
    display:flex;
    gap:1rem;
    width:max-content;
    animation:scroll 30s linear infinite;

    @keyframes scroll {
        from {
            transform:translateX(0);
        }

        to {
            transform:translateX(-50%);
        }
    }

    &:hover{
        animation-play-state:paused;
    }
`;

const Tech = styled.div`
    min-width:120px;
    height:100px;
    border-radius:${({theme})=>theme.radius.md};

    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    gap:0.5rem;

    color:${({theme})=>theme.colors.textSecondary};

    svg{
        font-size:2.5rem;
        color:${({theme})=>theme.colors.primary};
    }
`;


const TechCarousel = () => {
    const items = [
        ...technologies,
        ...technologies
    ];

    return (
        <Wrapper>
            <Track>

            {items.map((tech,index)=>{

                const Icon = tech.icon;

                return (

                <Tech key={index}>
                    <Icon />
                    <span>
                    {tech.name}
                    </span>

                </Tech>

                )
            })}

        </Track>

        </Wrapper>

    )
}

export default TechCarousel;