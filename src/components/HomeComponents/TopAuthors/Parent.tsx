import FormTitle from "@/components/pages/Connect/FormTitle"
import TopAuthorCards from "./TopAuthorCards"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import Spinner from "./ShowMoreSpinner"
const TopAuthorComponent = () => {

  const navigate = useNavigate();

   const handleClick = () =>{
      navigate('/login')
   }

  return (
    <>
<div className="px-[9rem]">
    <div className="flex flex-col items-center justify-center bg-[#FFF7ED] dark:bg-[#0E131F] rounded-[30px] py-[7rem]">
        <div className="py-[2rem] px-[30rem]">
        <FormTitle title="Top 10 author of the month" comment="rating based on customer reviews"/>
        </div>
        <div>
          <TopAuthorCards/>
        </div>
        
        <div className="flex items-center justify-center gap-8 pt-[6rem]">
  <div className="flex items-center justify-between">
    <button className="flex items-center justify-center rounded-[50px] text-[1.7rem] px-[3rem] py-4 hover:bg-[#F9FAFB] bg-white dark:text-white dark:bg-[#111827] border border-opacity-50 border-solid border-color_g dark:hover:bg-[#1F2937] hover:shadow-md duration-300 cursor-pointer">
      <Spinner />
      <span className="ml-4">Show me more</span>
    </button>
  </div>
        <Button title='SignUp' className=" w-fit h-[5rem] px-[3rem] rounded-full text-[1.7rem] bg-PrimaryCol hover:bg-SecondCol text-white" onClick={handleClick}>Become a host</Button>
        </div>
    </div>
</div>

    </>
  )
}

export default TopAuthorComponent