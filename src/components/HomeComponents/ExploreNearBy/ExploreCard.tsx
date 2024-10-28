import { useNavigate } from "react-router-dom"
const ExplorePlaces = [
  {name:"New York", time:"11 minnutes drive",suits: "1,882",path:"../../../src/assets/Rectangle 16.svg"},
  {name:"New York", time:"19 minnutes drive",suits: "1,156",path:"../../../src/assets/Rectangle 16 (1).svg"},
  {name:"New York", time:"10 minnutes drive",suits: "1,900",path:"../../../src/assets/Rectangle 16 (2).svg"},
  {name:"New York", time:"20 minnutes drive",suits: "1,800",path:"../../../src/assets/Rectangle 16 (3).svg"},
  {name:"New York", time:"19 minnutes drive",suits: "1,700",path:"../../../src/assets/Rectangle 16 (4).svg"},
  {name:"New York", time:"18 minnutes drive",suits: "1,682",path:"../../../src/assets/Rectangle 16 (5).svg"},
  {name:"New York", time:"16 minnutes drive",suits: "1,582",path:"../../../src/assets/Rectangle 16 (6).svg"},
  {name:"New York", time:"15 minnutes drive",suits: "1,382",path:"../../../src/assets/Rectangle 16 (8).svg"},

]

const ExploreCard = () => {
    const navigate = useNavigate();

    const handleNavigate = ()=> {
        navigate('listing-stay-map');
    }
  return (
    <div className="lg:flex lg:flex-wrap gap-[3.5rem] justify-center ">
      {ExplorePlaces.map((place,index)=>(
        <div key={index} className="flex flex-col gap-0 rounded-[24px] px-[2rem] pt-[1rem] pb-[2rem] hover:bg-[#F9FAFB] bg-white dark:text-white dark:bg-[#111827] border border-opacity-2 border-solid border-color_g dark:hover:bg-[#1F2937] hover:shadow-xl w-[32rem] cursor-pointer"  onClick={handleNavigate}>
          <h5 className="px-4 w-[5rem] text-[1.3rem] bg-[#F3F4F6] rounded-full dark:text-black self-end">{place.suits}</h5>
          <div className="flex space-x-4 items-center gap-4">
            <div className="rounded-full"><img src={place.path} /></div>
            <div className="flex flex-col space-y-4">
              <h5 className="font-semibold text-[1.8rem]">{place.name}</h5>
              <h6 className="text-[1.5rem] text-color_g">{place.time}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ExploreCard