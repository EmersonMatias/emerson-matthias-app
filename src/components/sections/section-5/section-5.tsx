import emerson from "../../../assets/img/emerson.png"

export default function Section5(){

    return(
        <section className="w-full flex gap-10 p-20 justify-center items-center max-xl:px-10 max-lg:px-5 max-lg:flex-col max-lg:py-10 max-lg:gap-3">
            <img  src={emerson} alt="Emerson Matthias" className="w-[40%] max-w-[600px] h-fit rounded-lg max-lg:w-[70%]"/>
            
            <div className="max-w-[700px] max-lg:text-center">
                <h3 className="text-3xl font-medium mb-5 max-lg:mb-3">Quem sou eu</h3>
                <h4 className="text-xl font-medium mb-3">Emerson Matthias</h4>
                <p className="text-lg mb-3 max-lg:text-justify">{text1}</p>
                <p className="text-lg mb-3 max-lg:text-justify">{text2}</p>
                <p className="text-lg mb-10 max-lg:text-justify">{text3}</p>

                <h4 className="text-xl font-medium mb-5">Minhas Habilidades</h4>
                <div className="flex  flex-wrap gap-5 max-lg:justify-center">
                    {habilities.map((hability) => (
                        <div className="bg-pink-600 w-fit px-5 py-2 rounded-md font-bold" key={hability}>{hability}</div>
                    ))}
                </div>

            </div>
        </section>
    )
}

const text1 = "Com mais de 5 anos de experiência no mercado digital, Emerson Matthias é um especialista em Desenvolvimento de Sites e Sistemas."
const text2 = "Sendo Engenheiro de Software e com cursos em User Experience Design (UX Design), projetou e concluiu mais de 30 projetos transformadores, tornando ideias inovadoras em sites e sistemas excelentes."
const text3 = "Sendo um cara apaixonado por tecnologia e  marketing, com a missão de ajudar pessoas e empresas que querem deixar sua marca 🚀 no mundo! Com experiência tanto em UX Design como em desenvolvimento, está sempre mostrando para o mercado que design  e perfomance podem e devem andar juntos."
const habilities = ["HTML", "CSS", "Javascript", "React", "MySQL", "Postgres", "Figma", "WordPress", "Elementor", "NodeJS", "AdobeXD", "UX Design", "Gestor Tráfego Pago"]