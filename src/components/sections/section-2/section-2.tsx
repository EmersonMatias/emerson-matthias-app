import Carossel2 from "../../carrossel-2";
import case1 from "../../../assets/img/case1.png"
import case2 from "../../../assets/img/case2.png"
import case3 from "../../../assets/img/case3.png"
import case4 from "../../../assets/img/case4.png"
import case5 from "../../../assets/img/case5.png"
import case6 from "../../../assets/img/case6.png"
import Card4 from "../../ui/card-4";


export default function Section2() {
    return (
        <section className="p-20 bg-section2 bg-no-repeat bg-left flex flex-col items-center w-full max-xl:px-10 max-lg:px-5 max-lg:bg-contain max-md:py-10">
            <h3 className="text-3xl text-center font-medium z-10">Portifólio</h3>
            <h6 className="text-center text-xl font-semibold z-10 mb-16 max-md:mb-0">Projetos que já geraram mais de <span className="text-pink-500">R$ 500.000,00</span></h6>




            <div className="flex flex-col gap-10">
                {content.map(({img,link,name}) => (
                    <Card4  img={img} link={link} title={name}/>
                ))}
            </div>

            <Carossel2 />


        </section>
    )
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