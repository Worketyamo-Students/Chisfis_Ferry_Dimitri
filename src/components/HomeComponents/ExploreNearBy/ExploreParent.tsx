import FormTitle from "@/components/pages/Connect/FormTitle"
import ExploreCard from "./ExploreCard"
const ExploreParent = () => {
  return (
    <div className="px-[9rem]">
        <div className="flex flex-col items-center justify-center rounded-[30px] py-[7rem]">
            <div className="py-[2rem] px-[30rem]"><FormTitle title="Explore nearby" comment="Discover great places near where you live"/></div>

            <div><ExploreCard/></div>
        </div>
    </div>
  )
}

export default ExploreParent