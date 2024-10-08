import Header1 from "../components/Headers/header1";
import Stays from "@/components/landingPages/Stays";
export default function Home() {
  return (
    <>
        <div className="dark:bg-black h-screen">
          <Header1/>
          <Stays/>
        </div>
    </>
  )
}
