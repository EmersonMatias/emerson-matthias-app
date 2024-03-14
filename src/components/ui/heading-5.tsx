import styled from "styled-components";
import { FontWeight } from "../../types/type";

export const Heading5 = styled.h5<FontWeight>`
    font-size: 2.84rem;
    font-weight: ${props => props.fontWeightPoppins ?? 400};
`

