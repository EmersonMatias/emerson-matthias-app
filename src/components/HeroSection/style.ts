import styled from "styled-components";
import Background from "../../assets/img/Background.png"

export const Container = styled.section`
    width: 100%;
    height: 100dvh;
    padding: 0rem 16rem;
    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    .h1{
        margin: 2.4rem 0rem;
    }
`

export const Box1 = styled.div`
    margin-top: 15%;
`

export const Box2 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 8rem;
    gap: 4rem;

    .gradient{
        background-image: linear-gradient(0deg, ${props => props.theme.colors.purple}, white);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent; 
    }
`