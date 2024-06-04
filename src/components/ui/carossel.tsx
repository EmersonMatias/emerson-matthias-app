import { useState } from "react";
import { contentCards1 } from "../sections/section-3/content";
import Card1 from "./card-1/card-1";
import rightArrow from "../../assets/img/rightArrow.png"
import leftArrow from "../../assets/img/leftArrow.png"


export default function Carossel() {
    const [item, setItem] = useState(1);
    const items = contentCards1;
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
        <div className="w-fit h-fit flex items-center z-10 mt-10 md:hidden">
            <button className="p-2 h-full" onClick={prev}>
                <img className="w-5" src={leftArrow} alt="Flecha para a esquerda"/>
            </button>

            <Card1 img={items[item - 1].img} text={items[item - 1].text} title={items[item - 1].title} key={items[item - 1].title} />


            <button className="p-2 h-full" onClick={next}>
                <img className="w-5" src={rightArrow} alt="Flecha para a direita"/>
            </button>
        </div>
    );
}
