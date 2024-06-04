import Card1 from "../../ui/card-1/card-1";
import Carossel from "../../ui/carossel";
import { contentCards1 } from "./content";


export default function Section3() {

    return (
        <section className="bg-teste bg-cover bg-no-repeat  bg-center relative h-fit py-32 flex flex-col items-center px-10 my-10 max-lg:px-5 max-md:px-5 max-md:py-16">
            <h3 className="text-3xl text-center font-medium z-10">Nossos Serviços</h3>
            <h6 className="text-center text-xl font-semibold z-10">Não importa o negócio, estamos <span className="text-pink-500">prontos para lhe atender</span></h6>

            <div className="mt-10 mb-10 flex flex-wrap gap-7 justify-center max-w-[1260px] z-10 max-md:hidden">
                {
                    contentCards1.map(({ img, text, title }) => (
                        <Card1 img={img} text={text} title={title} key={title} />
                    ))
                }
            </div>

            <Carossel />

            <div className="bg-[#060606] absolute top-0 left-0 w-full h-full bg-opacity-50" />
        </section>
    )
}