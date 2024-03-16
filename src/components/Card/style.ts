import styled from "styled-components"

const Container = styled.div`
        position: relative;
        max-width: 60rem;
        padding: 3.2rem 1.6rem;
        border-radius: 0.8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.02);
        text-align: center;
        overflow: hidden;
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
        border: solid rgba(255, 255, 255, 0.2) 1px;

        .image{
            width: 4rem;
        }

        h6{
            margin-top: 0.8rem;
            font-size: 1.92rem;
        }

        p{
            margin-top: 1.6rem;
            z-index: 5;
            font-size: 1.6rem;
            line-height: 1.3;
            font-weight: 300;
        }
`

const Background = styled.img`
    position: absolute;
    height: 100%;
    top: 0;
    right: -5%;
    opacity: 0.3;
`


const Style = {
    Container,Background
}

export default Style