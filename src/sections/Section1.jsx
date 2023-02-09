import { COL_1, COL_2 } from "../constants/constants"

const Section1 = () => {
  return (
    <div className="mx-auto container w-full max-w-[750px] md:max-w-none md:w-[960px] lg:w-[1170px] px-[15px] pt-[90px] pb-[50px] grid grid-cols-12">

      <h2 className="text-primary text-[1.25rem] leading-[1.950rem] md:text-[1.575rem] lg:text-[2.25rem] md:leading-[3rem] text-center  font-mulish font-medium px-[10px]		col-span-12 pb-[50px]	">En Gelişmiş Özelliklerle Dünyanın Tüm Noktalarına
        Ürünlerinizi Satmanın En İyi Yolu</h2>
      <div className="col-span-12 md:col-span-6 lg:col-span-4 px-[20px] sm:px-0 w-full">
        {COL_1.map((section, index) => (
          <div key={index} className="text-center sm:text-left min-h-[180px] sm:pr-[25px]">
            <h3 className=" text-primary text-[1.25rem] font-bold pb-[10px]">{section.title}
            </h3>
            <p className="text-primary text-[0.825rem]">{section.description}</p>
          </div>
        ))}

      </div>
      <div className="md:col-span-6 lg:col-span-4  hidden md:block">
        {COL_2.map((section, index) => (
          <div key={index} className="min-h-[180px] pr-[25px]">
            <h3 className="text-primary text-[1.25rem] font-bold pb-[10px]">{section.title}
            </h3>
            <p className="text-primary text-[0.825rem]">{section.description}</p>
          </div>
        ))}        </div>
      <div className="hidden md:block col-span-4 w-full h-full ">

        <img src="https://www.ticimax.com/images/ticimax_eihracatLP_aww.png" alt="website" className="w-full h-full" />
      </div>
    </div>
  )
}

export default Section1