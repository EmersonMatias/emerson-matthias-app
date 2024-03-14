import styled from "styled-components";
import { FontWeight } from "../../types/type";

export const Heading6 = styled.h6<FontWeight>`
   font-size: clamp(1.6rem, 1.25rem + 1.1042vw, 2.13rem);
    font-weight: ${props => props.fontWeightPoppins ?? 400};
`

