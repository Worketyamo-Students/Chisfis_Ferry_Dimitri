import FormTitle from "@/components/pages/Connect/FormTitle"
import TopAuthorCards from "./TopAuthorCards"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
const TopAuthorComponent = () => {

  const navigate = useNavigate();

   const handleClick = () =>{
      navigate('/login')
   }

  return (
    <>
<div className="px-[9rem]">
    <div className="flex flex-col items-center justify-center bg-[#FFF7ED] dark:bg-[#0E131F] rounded-[30px] py-[7rem]">
        <div className="py-[2rem] flex gap-8 px-[30rem]">
        <FormTitle title="Top 10 author of the month" comment="rating based on customer reviews"/>
        </div>
        <div>
          <TopAuthorCards/>
        </div>
        
        <div className="flex items-center justify-center gap-4 pt-[6rem]">
        <Button title='SignUp' className=" w-fit h-[5rem] px-[3rem] rounded-full text-[1.7rem] bg-PrimaryCol hover:bg-SecondCol text-white" onClick={handleClick}>Become a host</Button>
        </div>
    </div>
</div>

    </>
  )
}

export default TopAuthorComponent