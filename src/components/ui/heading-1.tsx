import styled from "styled-components";
import { FontWeight } from "../../types/type";

export const Heading1 = styled.h1<FontWeight>`
    font-size: 8.98rem;
    font-weight: ${props => props.fontWeightPoppins ?? 400};
`

export const Heading1Cinzel = styled(Heading1)`
    font-weight: ${props => props.fontWeightCinzel ?? 400};
    font-family: ${props => props.theme.fontFamily.cinzelDecorative};
`



