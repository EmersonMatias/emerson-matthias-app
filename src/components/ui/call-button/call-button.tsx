import whatsapp from "../../../assets/svg/whatsapp.svg"
import { sendToWpp } from "../../../contents"

export default function CallButton({ title }: { title: string }) {
    return (
        <button id="buttonAds" onClick={() => sendToWpp("Olá Emerson. Gostaria de tirar uma dúvida!")}  className="text-2xl flex gap-4 items-center bg-green-500 px-16 py-4 rounded-2xl hover:bg-green-700 z-10 max-md:text-xl max-md:px-8">
            {title}
            <img className="w-10 max-md:w-7" alt="Whatsapp" src={whatsapp}/>
        </button>
    )
}