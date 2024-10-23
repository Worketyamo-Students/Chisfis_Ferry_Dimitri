import * as React from "react"
import SuggCard from "./SuggCard"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent className="">
        {Array.from({ length: 7 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4 mx-4">
            <div className="">
            <SuggCard/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
