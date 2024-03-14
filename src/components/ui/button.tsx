import styled from "styled-components";


export const Button = styled.button`
    padding: 2.4rem 4.8rem;
    border-radius: 1.6rem;
    border-color: ${props => props.theme.colors.purple};
    margin-top: 3.2rem;
    font-size: 1.6rem;
    font-weight: bold;
    color: white;
    background-color: transparent;
    align-self: center;
    cursor: pointer;

    &:hover{
        background-color: ${props => props.theme.colors.purple};
    }

    @media screen and (max-width: 800px){
        padding: 0.8rem  2.4rem;
        border-radius: 0.8rem;
    }
`