import { Badge } from "@/components/ui/badge";

interface Props {
    badgeColor: string;
    badgeBackground: string;
    bagdetitle: string;
    badgePx: string;
    title: string;
    width: string;
    subtitle: string;
}

const HapprningComp = ({ badgeBackground, badgeColor, badgePx, title, subtitle, bagdetitle, width }: Props) => {
    return (
        <div className="flex flex-col gap-4">
            <Badge className={`bg-[${badgeBackground}] text-[${badgeColor}] px-${badgePx} py-2 rounded-[30px] text-[1rem] font-semibold w-[${width}rem]`}>
                {bagdetitle}
            </Badge>
            <p className="text-[2rem] text-[#1F2937] font-semibold mb-2">{title}</p>
            <p className="text-color_g text-[1.5rem]" dangerouslySetInnerHTML={{ __html: subtitle }} />
        </div>
    );
}

const HapprningList = () => {
    const items = [
        {
            badgeColor: "#1E40AF",
            badgeBackground: "#DBEAFE",
            badgePx: "4",
            width: "10", // correction ici
            bagdetitle: "Advertising",
            title: "Cost-effective advertising",
            subtitle: "With a free listing, you can advertise your rental with no <br/> upfront costs",
        },
        {
            badgeColor: "red",
            badgeBackground: "#DCFCE7",
            badgePx: "5",
            width: "8", // correction ici
            bagdetitle: "Exposure",
            title: "Reach millions with Chisfis",
            subtitle: "Millions of people are searching for unique places to <br/> stay around the world",
        },
        {
            badgeColor: "#991B1B",
            badgeBackground: "#FEE2E2",
            badgePx: "4",
            width: "10", // correction ici
            bagdetitle: "Secure",
            title: "Secure and simple",
            subtitle: "A Holiday Lettings listing gives you a secure and easy <br/> way to take bookings and payments online",
        }
    ];

    return (
        <div className="flex flex-col gap-[4rem]">
            {items.map((item, index) => (
                <HapprningComp
                    key={index}
                    badgeColor={item.badgeColor}
                    badgeBackground={item.badgeBackground}
                    badgePx={item.badgePx}
                    width={item.width} // correction ici
                    bagdetitle={item.bagdetitle}
                    title={item.title}
                    subtitle={item.subtitle}
                />
            ))}
        </div>
    );
}

export default HapprningList;
