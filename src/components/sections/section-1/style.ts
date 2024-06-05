import styled from "styled-components";
import backgroundDesktop from "../../../assets/img/backgroundDesktop.webp"
import backgroundMobile from "../../../assets/img/background2.png"

export const Container = styled.div`
    background-image: url(${backgroundDesktop});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;

    @media not all and (min-width: 1024px) {
    background-image: url(${backgroundMobile});
    }
`

export const TestZ = styled.div`
    z-index: 10;
    height: 200px;
    position: relative;
    background: black;
    
    .myElement{
        opacity: 0;
        transition: all 1s ease-in-out;
       
    }


    .visible{
        opacity: 1;
    }

`
