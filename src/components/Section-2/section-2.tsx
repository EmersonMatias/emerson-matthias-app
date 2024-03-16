import { Heading2Cinzel } from "../ui/heading-2";
import { Heading5 } from "../ui/heading-5";
import S from "./style";
import Sphere from "../../assets/img/Sphere.png"
import Card from "../Card/card";
import { Section2Content } from "./constants";

export default function Section2() {

    return (
        <S.Container>

            <S.Box1>
                <Heading2Cinzel>SERVIÇOS</Heading2Cinzel>
                <Heading5 fontWeightPoppins={200}>Algumas das formas da qual posso te ajudar</Heading5>
            </S.Box1>

            <img className="aa" src={Sphere} alt="Sphere"/>

            <div className="center">

            {Section2Content.map(({background,img,text,title}) => {
               return <Card key={title} title={title} text={text} img={img} background={background}/>
            })}
         
            </div>



        </S.Container>
    )
}