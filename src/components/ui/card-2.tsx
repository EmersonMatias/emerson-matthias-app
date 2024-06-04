import sphere from "../../assets/img/sphere.png"

export default function Card2({ text, title }: Card2Props) {
    return (
        <div className="w-[530px] max-xl:w-fit">
            <div className="flex items-center gap-5 mb-2">
                <img src={sphere} alt="Esfera Futurista" className="w-10" />
                <p className="text-2xl font-medium max-md:text-xl">{title}</p>
            </div>

            <p className="text-lg max-md:text-base">{text}</p>
        </div>
    )
}

type Card2Props = {
    text: string
    title: string
}