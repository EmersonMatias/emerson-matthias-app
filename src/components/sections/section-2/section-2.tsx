import Carossel2 from "../../carrossel-2";

export default function Section2() {
    return (
        <section className="p-20 bg-section2 bg-no-repeat bg-left flex flex-col items-center w-full max-xl:px-10 max-lg:px-5 max-lg:bg-contain max-md:py-10">
            <h3 className="text-3xl text-center font-medium z-10">Portifólio</h3>
            <h6 className="text-center text-xl font-semibold z-10 mb-16 max-md:mb-0">Projetos que já geraram mais de <span className="text-pink-500">R$ 500.000,00</span></h6>



            <Carossel2 />


        </section>
    )
}