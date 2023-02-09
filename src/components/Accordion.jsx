import { useState } from "react"
const Accordion = ({title,description}) => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={`col-span-2 md:col-span-1    ${!isOpen &&"" }` }>
        <button onClick={()=>setIsOpen(prev=>!prev)} className="bg-[#e7eaef] px-2 sm:px-4 py-3 sm:py-5 flex w-full justify-between items-center text-primary">
            <h3 className="text-[0.6rem] sm:text-[1rem] text-primary">{title}</h3>
            <h4 className="pl-[30px] pr-[15px] font-bold">{isOpen ? "-":"+"}</h4>
        </button>
        {isOpen && <p className="text-sm px-4 text-primary py-2 pb-5 bg-[#e7eaef]">{description}</p>}
    </div>
    )
}

export default Accordion