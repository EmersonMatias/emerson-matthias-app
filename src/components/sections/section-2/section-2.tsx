import styled from "styled-components";
import Carossel2 from "../../carrossel-2";
import diamond from "../../../assets/img/diamond.webp"


export default function Section2() {
    return (
        <Container>
            <section className="p-20 flex flex-col items-center w-full max-xl:px-10 max-lg:px-5 max-md:py-10">
                <h3 className="text-3xl text-center font-medium z-10">Portifólio</h3>
                <h6 className="text-center text-xl font-semibold z-10 mb-16 max-md:mb-8">Projetos que já geraram mais de <span className="text-pink-500">R$ 500.000,00</span></h6>

                <Carossel2 />

            </section>
        </Container>
    )
}

const Container = styled.div`
    background-image: url(${diamond});
    background-repeat: no-repeat;
    background-position: left;
    height: fit-content;

    @media not all and (min-width: 1024px) {

        background-size: contain;
    }
`
