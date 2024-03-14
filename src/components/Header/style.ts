import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    border-bottom: 1px solid #4A4A4A;
`

export const Logo = styled.div`
    font-size: 3.79rem;
    font-family: ${props => props.theme.fontFamily.cinzelDecorative};
    letter-spacing: -1rem;
    position: fixed;
    left: 16rem;
`

