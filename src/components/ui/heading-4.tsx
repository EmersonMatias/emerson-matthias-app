import styled from "styled-components";
import { FontWeight } from "../../types/type";

export const Heading4 = styled.h4<FontWeight>`
    font-size: 3.79rem;
    font-weight: ${props => props.fontWeightPoppins ?? 400};
`
export const Heading4Cinzel = styled(Heading4)`
    font-family: ${props => props.theme.fontFamily.cinzelDecorative};
`
