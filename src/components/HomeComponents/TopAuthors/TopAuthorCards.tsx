import { useNavigate } from "react-router-dom"

// interface Props{
//   profile:string,
//   name:string,
//   rating:number,
//   to:string,
//   city:string

// }
const TopAruthors = [
  {name:"Truelock Alric", city: "New York", rating : "4.9", to : "/author" ,profile : "../../../src/assets/Devon Webb.svg"},
  {name:"Birrell Chariot", city: "Napoli", rating : "4.9", to : "/author" ,profile : "../../../src/assets/Tanya Fox.svg"},
  {name:"Foulcher Nathanil", city: "New York", rating : "4.8", to : "/author" ,profile : "../../../src/assets/Hellen Schmidt.svg"},
  {name:"Falconar Agnes", city: "New York", rating : "4.8", to : "/author" ,profile : "../../../src/assets/Caroline Schultz.svg"},
  {name:"Tousy Vita", city: "New York", rating : "4.8", to : "/author" ,profile : "../../../src/assets/Mason Heaney.svg"},
  {name:"Friar Donna", city: "New York", rating : "4.7", to : "/author" ,profile : "../../../src/assets/Claudie Smitham.svg"},
  {name:"Flyod Thompson", city: "New York", rating : "4.6", to : "/author" ,profile : "../../../src/assets/Ricardo Cooper.svg"},
  {name:"Sleite Claudetta", city: "New York", rating : "4.5", to : "/author" ,profile : "../../../src/assets/Jenny Harrison.svg"},
  {name:"Tom warner", city: "New York", rating : "4.4", to : "/author" ,profile : "../../../src/assets/Tom Warner.svg"},
  {name:"Jeffrey Clark", city: "New York", rating : "4.3", to : "/author" ,profile : "../../../src/assets/Jeffrey Clark.svg"},

]
const TopAuthorCards = () => {
  const navigate = useNavigate();

  const Navigate = ()=>{
    navigate("/author");
  }
  return (
    <div className="lg:flex lg:flex-wrap gap-[3.5rem] justify-center sm:grid-cols-2 sm:grid ">
    {TopAruthors.map((author,index)=>(
    <div key={index} className="flex flex-col gap-4 rounded-[20px] items-center py-6 hover:bg-[#F9FAFB] bg-white dark:text-white dark:bg-[#111827] border border-opacity-2 border-solid border-color_g dark:hover:bg-[#1F2937] hover:shadow-xl w-[20rem] cursor-pointer" onClick={Navigate}>
        <div className="w-[8rem] "><img src={author.profile} alt="Profile" className="rounded-full"/></div>
        <h5 className="font-semibold text-[1.8rem]">{author.name}</h5>
        <h6 className="text-[1.5rem] text-color_g">{author.city}</h6>
        <div className="px-7 py-2 flex items-center gap-2 dark:bg-[#1F2937] rounded-full bg-[#F3F4F6]"><h6 className="text-[1.5rem]">{author.rating}</h6><img src="../../../src/assets/star.svg" alt="star" /></div>
    </div>
    ))}
    </div>

  )
}

export default TopAuthorCards