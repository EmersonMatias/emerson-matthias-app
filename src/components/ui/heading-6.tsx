import styled from "styled-components";

export const Heading6 = styled.h6<{fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900}>`
    font-size: 2.13rem;
    font-weight: ${props => props.fontWeight};
`

