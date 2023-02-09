import Accordion from "../components/Accordion"
import { sikcaSorulanSorular } from "../constants/constants"

const Section2 = () => {
    return (
        <div className="text-primary py-6 md:py-8 lg:py-10 xl:py-12 mx-auto container w-full max-w-[750px] md:max-w-none md:w-[960px] lg:w-[1200px] px-[15px] grid grid-cols-2 gap-2">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-inherit text-center mb-[40px] col-span-2">Sık Sorulan E-ihracat Soruları
            </h1>
            {sikcaSorulanSorular.map((item,index)=>(
                <Accordion key={index} title={item.title} description={item.description}/>
            ))}
        </div>
    )
}

export default Section2