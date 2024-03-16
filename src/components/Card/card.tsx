import S from "./style";

export default function Card({img,text,title, background}: Card) {
    return (
        <S.Container>
            <S.Background src={background} alt={text}/>

            <img className="image" src={img} alt={text} />
            <h6>{title}</h6>
            <p>{text}</p>
        </S.Container>
    )
}

interface Card {
    img: string,
    background: string
    title: string,
    text: string,
}