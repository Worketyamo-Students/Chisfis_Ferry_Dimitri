import { useState } from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import SuggCard from './SuggCard';

// Interface pour chaque objet de données
interface CardData {
  image: string;
  title: string;
  properties: string;
  to: string;
}

// Interface pour les props de CarouselSize
interface CarouselSizeProps {
  data: CardData[];
  cardClassName?: string; // Prop optionnelle pour les classes CSS de SuggCard
}

export const CarouselSize = ({ data, cardClassName }: CarouselSizeProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : prevIndex));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="flex space-x-2">
        {data.map((card, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/4 flex-shrink-0"
          >
            <SuggCard
              image={card.image}
              properties={card.properties}
              title={card.title}
              to={card.to}
              className={cardClassName} // Ajouter la classe CSS personnalisée ici
  />
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="border border-solid dark:bg-dark_color w-[5rem] h-[5rem]" />
      <CarouselNext className="border border-solid dark:bg-dark_color w-[5rem] h-[5rem]" />
    </Carousel>
  );
};
