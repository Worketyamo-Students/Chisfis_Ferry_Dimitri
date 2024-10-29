import FormTitle from "../../Connect/FormTitle"
import HowitWorksCard from "./HowitWorksCard"

const ParentHowitWorks = () => {
  return (
    <div className="px-[9rem]">
      <div className="flex flex-col items-center justify-center pb-[7rem]">
        <div className=" mb-[10rem] px-[30rem]">
          <FormTitle title="How it work" comment="Keep calm & travel on" />
        </div>

        <div className="relative flex flex-col justify-center items-center">
          <img
            src="../../../../src/assets/Vector 1.svg"
            className="absolute w-full h-auto top-1/2 transform -translate-y-1/2 z-0"
          />
          
          <div className="z-10">
            <HowitWorksCard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParentHowitWorks
