import styled from "styled-components";
import Background from "../../assets/img/Background.png"

export const Container = styled.section`
    width: 100%;
    height: 100dvh;
    padding: 14rem clamp(4rem, -20rem + 18.75vw, 16rem) 0 clamp(4rem, -20rem + 18.75vw, 16rem);
    background-image: url(${Background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .h1{
        margin: 2.4rem 0rem;
    }

    .contacts{
        display: flex;
        flex-direction: column;
    }

    @media screen and (max-width: 1279px){
        padding: 6rem 4rem 0rem 4rem;
        align-items: center;
        text-align: center;
    }

    @media screen and (max-width: 800px){
     
    }
`

export const Box1 = styled.div`

    @media screen and (max-width: 1279px){
        max-width: 600px;
    }
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

    .colorWord{
        font-weight: 600;
        color: #8F00FF;
    }

    @media screen and (max-width: 1279px){
        max-width: 600px;
        margin-top: 4rem;
    }

    @media screen and (max-width: 800px){
        gap: 2.4rem;
    }
`

export const Contacts = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
    gap: 1.6rem;
    right: clamp(4rem, -20rem + 18.75vw, 8rem);
    bottom: clamp(4rem, -20rem + 18.75vw, 8rem);

    .line{
        width: 0.8rem;
        height: 24rem;
        border-radius: 0.8rem;
        background: linear-gradient(180deg, ${props => props.theme.colors.purple}, #DBB7F8);
    }

    img{
        width: 40px;
        height: 40px;
        cursor: pointer;
    }

    @media screen and (max-width: 800px){
        right: 1.6rem;
        bottom: 5rem;
        gap: 0rem;

        .line{
            width: 0.4rem;
        }

        img{
            width: 2.4rem;
        }
       
    }
`