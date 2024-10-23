import { Badge } from "@/components/ui/badge";


const HapprningComp = () => {
    return (

        <div className="flex flex-col gap-[4rem]">
        <div className="flex flex-col gap-4">
            <Badge className="bg-[#DBEAFE] hover:bg-[#DBEAFE] text-[#1E40AF] px-4 py-2 rounded-[30px] text-[1rem] font-semibold w-[8rem]">
                Advertising
            </Badge>
            <p className="text-[2rem] text-[#1F2937] font-semibold mb-2 dark:text-white">Cost-effective advertising</p>
            <p className="text-color_g text-[1.5rem]">With a free listing, you can advertise your rental with no <br/> upfront costs</p>
        </div>

        <div className="flex flex-col gap-4">
            <Badge className="bg-[#DCFCE7] hover:bg-[#DCFCE7]  text-[#1E40AF] px-4 py-2 rounded-[30px] text-[1rem] font-semibold w-[7rem]">
            Exposure
            </Badge>
            <p className="text-[2rem] text-[#1F2937] font-semibold mb-2 dark:text-white">Reach millions with Chisfis</p>
            <p className="text-color_g text-[1.5rem]">Millions of people are searching for unique places to <br/> stay around the world</p>
        </div>

        <div className="flex flex-col gap-4">
            <Badge className="bg-[#FEE2E2] hover:bg-[#FEE2E2]  text-[#991B1B] px-4 py-2 rounded-[30px] text-[1rem] font-semibold w-[6rem]">
            Secure
            </Badge>
            <p className="text-[2rem] text-[#1F2937] font-semibold mb-2 dark:text-white">Secure and simple</p>
            <p className="text-color_g text-[1.5rem]">A Holiday Lettings listing gives you a secure and easy <br/> way to take bookings and payments online</p>
        </div>

        </div>

    );
}



export default HapprningComp;
