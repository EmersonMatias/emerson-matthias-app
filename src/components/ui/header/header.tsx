import whatsapp from "../../../assets/svg/whatsapp.svg"
import { sendToWpp } from "../../../contents"

export default function Header() {
    return (
        <header className="flex justify-center items-center h-20 absolute w-full z-10" >
            <span className="font-cinzel font-semibold text-6xl tracking-[-16px] absolute  left-10 top-4 max-md:left-5 max-md:text-4xl">E<span className="text-pink-500">M</span></span>

            <button id="buttonAds" onClick={() => sendToWpp("Olá Emerson. Gostaria de tirar uma dúvida!")} className="flex items-center text-lg bg-pink-500 px-10 py-2 rounded-2xl absolute right-10 top-5 hover:bg-pink-700 max-md:hidden">
                Solicitar Orçamento <img className="ml-2 h-6" alt="Whatsapp" src={whatsapp} />
            </button>

        </header>
    )
}