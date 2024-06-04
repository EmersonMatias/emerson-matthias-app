import { useState } from "react";
import rightArrow from "../assets/img/rightArrow.png"
import leftArrow from "../assets/img/leftArrow.png"
import Card4 from "./ui/card-4";
import case1 from "../assets/img/case1.png"
import case2 from "../assets/img/case2.png"
import case3 from "../assets/img/case3.png"
import case4 from "../assets/img/case4.png"
import case5 from "../assets/img/case5.png"
import case6 from "../assets/img/case6.png"


export default function Carossel2() {
    const [item, setItem] = useState(1);
    const items = content;
    const length = items.length;


    function next() {
        if (item < length) {
            setItem(item + 1);
        } else {
            setItem(1);
        }
    }

    function prev() {
        if (item > 1) {
            setItem(item - 1);
        } else {
            setItem(length);
        }
    }

    return (
        <div className="w-[100%] h-fit flex items-center z-10 mt-10 justify-center">
            <button className="pr-2  h-full z-10 max-md:w-[70px]" onClick={prev}>
                <img className="w-5" src={leftArrow} alt="Flecha para a esquerda" />
            </button>

    
                <Card4 img={items[item - 1].img} title={items[item - 1].name} link={items[item - 1].link} key={items[item - 1].name} />

           


            <button className="pl-2 h-full z-10 max-md:w-[70px]" onClick={next}>
                <img className="w-5" src={rightArrow} alt="Flecha para a direita" />
            </button>
        </div>
    );
}


const content = [
    {
        img: case1,
        name: "Advocacia Alves & Nascimento",
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
        link: "https://www.gransteak.com.br/?gclid=CjwKCAiAg9urBhB_EiwAgw88mdJiRsMTlU896mvf5IxvF5KY8ze5dFt-lnahbulp2Rv8l4TviqUfUhoCj5UQAvD_BwE",
    }, {
        img: case6,
        name: "Rodízio Gran Steak",
        link: "https://www.gransteak.com.br/?gclid=CjwKCAiAg9urBhB_EiwAgw88mdJiRsMTlU896mvf5IxvF5KY8ze5dFt-lnahbulp2Rv8l4TviqUfUhoCj5UQAvD_BwE",
    }
]