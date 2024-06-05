import imgSection4 from "../../../assets/img/imgSection4.webp"
import CallButton from "../../ui/call-button/call-button"
import Card2 from "../../ui/card-2"
import { contentCards2 } from "./cotent"

export default function Section4() {
    return (
        <section className="flex flex-col items-center px-20 py-20 max-md:px-10 max-md:py-10">
            <h3 className="text-3xl text-center font-medium z-10 mb-5 max-md:mb-2">Estratégia <span className="text-pink-500">personalizada</span>  para cada cliente</h3>
            <h6 className="text-center text-lg font-normal z-10 w-[1000px] max-lg:w-fit max-md:text-sm">Sem uma estratégia personalizada desenvolvida por profissionais qualificados, você continuará gastando rios de dinheiro em anúncios, direcionando as pessoas para uma estrutura que não influência o visitante na tomada de decisão, impedindo assim que obtenha o máximo de resultado para seu negócio.</h6>

            <div className="flex gap-5 mt-10 mb-20">


                <div className="flex flex-col justify-between gap-4">
                    {contentCards2.map(({ text, title }) => (
                        <Card2 text={text} title={title} key={title} />
                    ))}

                </div>

                <img src={imgSection4} alt="Mão futurista" className="w-[500px] max-lg:hidden" />
            </div>


            <CallButton title="Entre em contato"/>
        </section>
    )
}