import { Heading6 } from "../ui/heading-6";
import { Container, Logo } from "./style";

export default function Header() {
    return (
        <Container>
            <Logo>E<span className="purple"> M</span></Logo>

            <Heading6 fontWeight={300}>Inicio</Heading6>

            <Heading6 fontWeight={300}>Serviços</Heading6>

            <Heading6 fontWeight={300}>Portfólio</Heading6>

            <Heading6 fontWeight={300}>Sobre mim</Heading6>
        </Container>
    )
}