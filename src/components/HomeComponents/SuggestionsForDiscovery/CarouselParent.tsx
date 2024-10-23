import FormTitle from "@/components/pages/Connect/FormTitle"
import { CarouselSize } from "./Carousel"
const CarouselParent = () => {
  return (
    <>
<div className="px-[9rem]">
    <div className="flex flex-col items-center justify-center bg-[#FFF7ED] dark:bg-[#0E131F] rounded-[30px] py-[7rem]">
        <div className="py-[2rem] flex gap-8 px-[30rem]">
        <FormTitle title="Suggestions for discovery" comment="Popular places to stay that Chisfis recommends for you"/>
        </div>
        <div className="flex items-center px-[5rem]">
          <CarouselSize/>
        </div>
    </div>
</div>

    </>
  )
}

export default CarouselParent