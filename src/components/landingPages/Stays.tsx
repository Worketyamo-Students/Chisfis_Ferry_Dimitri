import SearchButton from "../buttons/search-button";
// import NavBar from "../MenuBars/MenuStays";
const Stays = () => {
  return (
    <div className="container font-poppins w-full px-[5rem] relative ">
      <div className="container">
        <div className="flex justify-between w-full pd-4 relative">
           <div id="bar" className="absolute self-end justify-end">yeag</div>

          <div className="flex py-16 w-full gap-8">
            <div id="text" className="flex w-1/2 pt-16">
              <div className="gap-8 flex flex-col">
                <h1 className="text-[5rem] text-black font-medium dark:text-white">Hotel, car <br />& experiences</h1>
                <p className="text-primary">Accompanying us, you have a trip full of experiences. With <br />
                Chisfis, booking accommodation, resort villas, hotels</p>
                <SearchButton/>
                <div className="absolute w-[20rem] h-[16rem] bg-[#E11D4833] rounded-full opacity-50 blur-[50px] shadow-3xl top-[-1]" id="rose"></div>
                <div className="absolute  w-[20rem] h-[16rem] bg-[#04785733] rounded-full opacity-50 blur-[50px] shadow-3xl bottom-[-.9rem]" id="blue"></div>

                <div>
                  {/* <ul className="flex items-center w-full justify-between">
                    <li className="font-semibold dec">Stays</li>
                    <li>Experiences</li>
                    <li>Rental Car</li>
                  </ul> */}
                {/* <NavBar/> */}
                </div>
              </div>
            </div>

            <div id="image" className=" w-1/2 gap-8 flex relative">
                <div className="flex flex-col gap-8">
                  <img src="../../src/assets/highlights places/up.png" alt="up" />
                  <img src="../../src/assets/highlights places/down.png" alt="down" />
                </div>

                <div className="flex self-end">
                  <img
                    src="../../src/assets/highlights places/right.png"
                    className="relative bottom-[-50px]"
                  />
                </div>
            </div>

          </div> 
        </div>
      </div>

    </div>
  )
}

export default Stays