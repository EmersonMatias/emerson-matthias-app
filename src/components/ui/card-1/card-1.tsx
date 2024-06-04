export default function Card1({img,text,title}: Card1Props){
    return(
        <div className="bg-[#0000000f] w-[380px] backdrop-blur-lg py-8 px-5 rounded-lg border-gray-500 border-x-[1px] border-y-[0.5px] hover:border-white hover:scale-110 max-lg:w-[320px] max-md:w-[300px] max-md:hover:scale-100">
            <img className="w-16 mb-2" src={img} alt={title}/>
            <h6 className="text-2xl font-medium mb-5">{title}</h6>
            <p>{text}</p>
        </div>
    )
}

type Card1Props = {
    img: string
    title: string
    text: string
}