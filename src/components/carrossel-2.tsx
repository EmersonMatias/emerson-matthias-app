import { useState } from "react";
import Card4 from "./ui/card-4";
import case1 from "../assets/img/case1.webp"
import case2 from "../assets/img/case2.webp"
import case3 from "../assets/img/case3.webp"
import case4 from "../assets/img/case4.webp"
import case5 from "../assets/img/case5.webp"
import case6 from "../assets/img/case6.webp"
import styled from "styled-components";
import nextSvg from "../assets/svg/prev.svg"
import prevSvg from "../assets/svg/next.svg"

export default function Carossel2() {
    const [card, setCard] = useState(1)


    function prev() {
        if (card === 1) {
            setCard(6)
        } else {
            setCard(card - 1)
        }
    }

    function next() {
        if (card === 6) {
            setCard(1)
        } else {
            setCard(card + 1)
        }
    }


    return (
        <Container>

            <Card4 img={content[0].img} link={content[0].link} title={content[0].name} atributes={`myElement ${card === 1 && "showCard"}`} />
            <Card4 img={content[1].img} link={content[1].link} title={content[1].name} atributes={`myElement ${card === 2 && "showCard"}`} />
            <Card4 img={content[2].img} link={content[2].link} title={content[2].name} atributes={`myElement ${card === 3 && "showCard"}`} />
            <Card4 img={content[3].img} link={content[3].link} title={content[3].name} atributes={`myElement ${card === 4 && "showCard"}`} />
            <Card4 img={content[4].img} link={content[4].link} title={content[4].name} atributes={`myElement ${card === 5 && "showCard"}`} />
            <Card4 img={content[5].img} link={content[5].link} title={content[5].name} atributes={`myElement ${card === 6 && "showCard"}`} />

            <div className="absolute bottom-0 flex gap-10 hidden">
                <button onClick={prev}> <img src={prevSvg} className="w-10" alt="Botão de anterior" /> </button>
                <button onClick={next}> <img src={nextSvg} className="w-10" alt="Botão de próximo" /> </button>
            </div>
 


        </Container>
    );
}



const Container = styled.div`
    width: 100%;
    height: fit-content;
    gap: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .myElement{
        opacity: 1;
        transition: all 1s ease-in-out;
       
    }

    .showCard{
        opacity: 1;
    }


   /*
    @media not all and (min-width: 768px) {
        height: 520px;
    }
   */
`


const content = [
    {
        img: case1,
        name: "Alves & Nascimento",
        link: "https://alvesenascimento.com.br/",
    },
    {
        img: case2,
        name: "Farm RIO",
        link: "https://www.farmrio.com.br/",
    }, {
        img: case3,
        name: "Expert Beauty Center",
        link: "https://www.expertbeautycenter.com.br/",
    }, {
        img: case4,
        name: "Barbearia Corleone",
        link: "https://www.barbeariacorleone.com.br/",
    }, {
        img: case5,
        name: "Rodízio Ritorno",
        link: "https://ritornopizzaria.com.br/",
    }, {
        img: case6,
        name: "Rodízio Gran Steak",
        link: "https://www.gransteak.com.br/?gclid=CjwKCAiAg9urBhB_EiwAgw88mdJiRsMTlU896mvf5IxvF5KY8ze5dFt-lnahbulp2Rv8l4TviqUfUhoCj5UQAvD_BwE",
    }
]