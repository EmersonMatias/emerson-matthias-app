import { useState } from "react"
import downArrow from "../../assets/svg/downArrow.svg"

export default function Card3({ pergunta, resposta }: { pergunta: string, resposta: string }) {
    const [show, setShow] = useState(false)

    function toggle() {
        setShow(!show)
    }

    return (
        <div className="w-[600px] max-w-[600px] max-xl:w-[500px] max-lg:w-[100%]">
            <button className="text-left w-full flex gap-5 bg-gradient-to-r from-pink-900 to-pink-700 px-12 py-3 rounded-md text-xl justify-between mb-3 items-center max-lg:w-[100%]" onClick={toggle}>
                {pergunta} <img src={downArrow} alt="Flecha para baixo" className="w-8" />
            </button>

            <div className={`pl-5 text-lg leading-relaxed ${!show && "hidden"} mb-5 font-light max-w-[100%]`}>
                {resposta}
            </div>
        </div>

    )
}