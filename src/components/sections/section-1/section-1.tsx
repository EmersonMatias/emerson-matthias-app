import CallButton from "../../ui/call-button/call-button";

export default function Section1() {

    return (
        <section className="bg-desktop max-lg:bg-mobile bg-cover bg-top w-full h-dvh relative text-white px-[160px] flex flex-col justify-center gap-10 pt-[5%] max-lg:px-20 max-md:px-5 max-md:gap-8 max-md:h-fit max-md:py-20" >
            <div className="w-[800px] z-10 max-lg:w-fit">
                <p className="text-2xl font-light mb-4 max-md:text-xl">Você está preparado para estar <span className="font-bold text-pink-500">NO TOPO?</span></p>
                <p className="text-6xl font-semibold leading-tight max-md:text-4xl">Tenha hoje um site <span className="text-pink-500">bonito, rápido</span> e que gere valor ao seu négocio.</p>
            </div>

            <div className="flex flex-col justify-center items-center text-center text-2xl z-10 max-md:text-base">
                <p>Vamos aumentar as vendas do seu negócio?</p>
                <p className="w-[680px] max-lg:w-fit"> Pare de <span className="text-red-500 font-bold">PERDER DINHEIRO </span>por não ter um site ou sistema que não supre
                    suas necessidaes. Nos dias de hoje ou você está no topo ou não é visto!
                </p>
            </div>

            <div className="justify-center flex">
                <CallButton title="Quero estar no topo"  />
            </div>


            <div className="bg-gradient-to-b from-[transparent] to-[#060606] absolute top-0 left-0 w-full h-dvh bg-opacity-50 max-md:h-full" />
        </section>
    )
}