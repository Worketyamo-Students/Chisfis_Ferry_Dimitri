 
const SuggCard = () => {
  return (
    <div>
        <div className="bg-transparent border-none outline-none">
        <div className="flex flex-col text-[#111827] items-center justify-center gap-y-2">
            <div className="relative flex">
                <div className="w-full h-full bg-black hover:absolute"></div>
                <img src="../../../src/assets/sugg1.svg" alt="suggestion1" className="rounded-[20px]"/>
            </div>
            <h4 className="text-[1.8rem] dark:text-white font-semibold">Enjoy the great cold</h4>
            <h6 className="text-[#6B7280] text-[1.4rem]">188,288 properties</h6>
        </div>
        </div>
    </div>
  )
}

export default SuggCard