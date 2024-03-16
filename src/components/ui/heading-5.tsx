import styled from "styled-components";
import { FontWeight } from "../../types/type";

export const Heading5 = styled.h5<FontWeight>`
    font-size: clamp(2.3rem, 1.94rem + 1.125vw, 2.84rem);
    font-weight: ${props => props.fontWeightPoppins ?? 400};

    @media screen and (max-width: 800px){
        font-size: 1.8rem;
    }
`

