import { sendToSite } from "../../contents";

export default function Card4({img,link,title}: {img: string, title: string, link:string}){
    return(
        <div className="bg-[#0000000f] gap-10 flex items-center backdrop-blur-sm py-16 px-10 rounded-lg border-gray-500 border-x-[1px] border-y-[0.5px] max-xl:flex-col max-xl:justify-center max-md:h-[440px]">

            <img src={img} className="w-[70%] h-fit max-w-[800px] max-xl:max-w-[800px] max-md:w-[100%]" alt="Casos de sucesso"/>

            <div className="max-w-[500px] flex flex-col max-xl:w-[100%]">
                <p className="text-2xl border-b mb-5">{title}</p>

                <button onClick={() => sendToSite(link)}   className="bg-pink-500 py-5 px-10 rounded-full backdrop-blur-md bg-opacity-40 hover:border-[2px] hover:border-pink-500">Ver projeto completo</button>
            </div>
        </div>
    )
}