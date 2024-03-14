import Header from "../Header/header";
import { Heading1Cinzel } from "../ui/heading-1";
import { Heading4, Heading4Cinzel } from "../ui/heading-4";
import { Heading5 } from "../ui/heading-5";
import { Box1, Box2, Container } from "./style";

export default function HeroSection() {
    return (
        <Container>
            <Header />

            <Box1>
                <Heading4 fontWeightPoppins={200}>Olá, eu sou</Heading4>
                <Heading1Cinzel className="purple h1" >EMERSON MATTHIAS</Heading1Cinzel>
                <Heading4 fontWeightPoppins={200}>Engenheiro de Software & Gestor de Tráfego Pago</Heading4>
            </Box1>

            <Box2>
                <div className="gradient">
                    <Heading4Cinzel>REVOLUCIONE SUA PRESENÇA <br /> DIGITAL</Heading4Cinzel>
                </div>

                <Heading5 fontWeightPoppins={300}>Se posicione no mercado com um visual atrativo e <br /> domine o jogo.</Heading5>
            </Box2>

        </Container>
    )
}