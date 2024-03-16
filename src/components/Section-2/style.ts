import styled from "styled-components";

const Container = styled.section`
    width: 100%;
    padding: 14rem clamp(4rem, -20rem + 18.75vw, 16rem) 14rem clamp(4rem, -20rem + 18.75vw, 16rem);
    background-color: #08010E;
    display: flex;
    flex-direction: column;


    .center{
        width: fit-content;
       display: grid;
       grid-template-columns: 1fr 1fr;
       grid-gap: 20px; 
       justify-items: center;
       align-self: center;
    }

    .aa{
        position: absolute;
    }


   
`

const Box1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`


const Style = {
    Container, Box1
}

export default Style