import styled from "styled-components";
import { FontWeight } from "../../types/type";

export const Heading4 = styled.h4<FontWeight>`
    font-size: clamp(2.77rem, 2.1rem + 2.125vw, 3.79rem);
    font-weight: ${props => props.fontWeightPoppins ?? 400};

    @media screen and (max-width: 800px){
        font-size: 2.4rem;
    }
`
export const Heading4Cinzel = styled(Heading4)`
    font-family: ${props => props.theme.fontFamily.cinzelDecorative};
`
