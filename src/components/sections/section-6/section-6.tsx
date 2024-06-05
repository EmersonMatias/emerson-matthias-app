import styled from "styled-components"
import faq from "../../../assets/img/faq.png"
import Card3 from "../../ui/card-3"
import background from "../../../assets/img/backgroundSection6.webp"

export default function Section6() {
    return (
        <Container>
            <section className=" relative flex p-20 gap-10 justify-center items-center max-xl:px-10 max-lg:px-5 max-lg:flex-col max-lg:py-10">

                <img src={faq} alt="Perguntas e Respostas" className="w-[40%] max-w-[700px] h-fit lg:hidden max-lg:w-[70%] z-10" />

                <div className="flex flex-col items-center z-10">
                    <h3 className="text-3xl font-medium mb-2 max-lg:text-center">Perguntas Frequentes</h3>
                    <h4 className="text-xl font-medium mb-8 max-lg:text-center">Tire suas dúvidas aqui</h4>

                    <div className="flex flex-col gap-3  max-lg:items-center max-lg:w-[100%]">
                        {content.map(({ pergunta, resposta }) => (
                            <Card3 pergunta={pergunta} resposta={resposta} key={pergunta} />
                        ))}

                    </div>

                </div>

                <img src={faq} alt="Perguntas e Respostas" className="w-[40%] max-w-[600px] h-fit max-lg:hidden z-10" />

                <div className="bg-gradient-to-b from-[transparent] to-[#060606] absolute top-0 left-0 w-full h-full bg-opacity-50 max-md:h-full" />
            </section>
        </Container>
    )
}

const Container = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-position: left top;
`

const content = [
    {
        pergunta: "Como funciona o processo de criação?",
        resposta: `Marcamos uma reunião para você contar mais sobre o seu negócio e falar das suas expectativas. Criamos um Wire-frame de baixa fidelidade para que você aprove o layout inicial.
        A partir do wire-frame partirmos para a parte de design estratégico completo.
        Você aprova ou solicita ajustes no design final para que possamos ir para a implantação.
        Nessa etapa faremos todo trabalho de otimização para sua página ficar super rápida.
        Nessa fase é onde deixaremos seu site no e pronto para você começar a vender.`
    },
    {
        pergunta: "Quantas revisões posso solicitar no projeto?",
        resposta: "Nosso foco é garantir que você esteja plenamente satisfeito com o resultado final. Embora busquemos entender profundamente suas necessidades desde o início, através de reuniões e briefing detalhado, para minimizar a necessidade de alterações, não estabelecemos um limite rígido de revisões. Faremos as alterações necessárias, sempre com base no briefing inicial, para garantir o sucesso do projeto e a sua total satisfação."
    },
    {
        pergunta: "Quais são as formas de pagamento?",
        resposta: `Você poderá fazer o pagamento dos serviços por PIX à vista com 20% de desconto ou com o
        Cartão de crédito em até 12x sem juros.`
    },
    {
        pergunta: "Como garantimos a segurança da sua contratação?",
        resposta: "Sua tranquilidade é nossa prioridade. Antes de iniciarmos, fornecemos um contrato detalhado, com assinatura digital, garantindo transparência em prazos, valores e responsabilidades."
    },
    {
        pergunta: "Qual é o tempo estimado para a entrega do meu site?",
        resposta: "Cada projeto tem suas particularidades! Para landing pages, o prazo pode variar entre 2 a 5 dias úteis, dependendo da complexidade e das especificações. Já para sites, o desenvolvimento geralmente leva de 4 a 7 dias. A colaboração do cliente e outros fatores podem influenciar nesses prazos."
    }
]