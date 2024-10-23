import { useState } from "react";
import SuggCard from "./SuggCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


export function CarouselSize() {
  const suggCardsData = [
    {
      image: "../../../src/assets/sugg1.svg",
      title: "Enjoy the great cold",
      properties: "188,288 properties",
      to: "/listing-stay-map",
    },
    {
      image: "../../../src/assets/Image.svg",
      title: "Explore the desert sands",
      properties: "94,500 properties",
      to: "/desert-exploration",
    },
    {
      image: "../../../src/assets/Image2.svg",
      title: "Relax in the tropical sun",
      properties: "120,600 properties",
      to: "/tropical-getaway",
    },
    {
      image: "../../../src/assets/Image3.svg",
      title: "Mountain retreats",
      properties: "55,300 properties",
      to: "/mountain-retreats",
    },
    {
      image: "../../../src/assets/Image.svg",
      title: "City escapes",
      properties: "210,400 properties",
      to: "/city-escapes",
    },
    {
      image: "../../../src/assets/Image2.svg",
      title: "Lakeside relaxation",
      properties: "98,200 properties",
      to: "/lakeside-relaxation",
    },
    {
      image: "../../../src/assets/Image3.svg",
      title: "Snowy adventures",
      properties: "68,000 properties",
      to: "/snowy-adventures",
    },
  ];
  const [currentIndex,setCurrentIndex] = useState(0)
  const handleNext = ()=>{
    setCurrentIndex((prevIndex)=>(prevIndex <suggCardsData.length-1 ? prevIndex+1 : prevIndex));
  };
  const handlePrevious = ()=>{
    setCurrentIndex((prevIndex)=>(prevIndex>0 ? prevIndex-1 : prevIndex));
  }
  return (
    <Carousel
      opts={{
        align: "start", // Aligner les éléments au début
      }}
      className="w-full"
    >

      <CarouselContent className="flex space-x-2">
        {suggCardsData.map((card, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/4 flex-shrink-0" // Affiche 2 éléments sur medium et 4 sur large
          >
            <SuggCard
              image={card.image}
              properties={card.properties}
              title={card.title}
              to={card.to}
            />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="p-12 bg-white border border-solid dark:bg-dark_color"/>
      <CarouselNext />
    </Carousel>
  );
}

