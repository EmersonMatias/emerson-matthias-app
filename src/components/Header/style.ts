import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    border-bottom: 1px solid #4A4A4A;
    position: absolute;
    top: 0;
    right: 0;

    @media screen and (max-width: 800px){
        gap: 1.6rem;
    }
`

export const Logo = styled.div`
    font-size: 3.79rem;
    font-family: ${props => props.theme.fontFamily.cinzelDecorative};
    letter-spacing: -1rem;
    position: absolute;
    left: clamp(4rem, -20rem + 18.75vw, 16rem);

    @media screen and (max-width: 800px){
        font-size: 3rem;
        position: static;
    }
`

