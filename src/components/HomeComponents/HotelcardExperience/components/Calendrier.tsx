"use client"

import * as React from 'react';

import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';

export const CalendrierComponent = () => {
  const [startDate, setStartDate] = React.useState<Date | undefined>(undefined)
  const [endDate, setEndDate] = React.useState<Date | undefined>(undefined)

  return (
    <Popover >
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full h-full rounded-full bg-transparent hover:bg-transparent justify-start text-left font-normal flex gap-4",
            !startDate && !endDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-[3rem] w-[3rem] text-gray-400" />
          <div className="flex flex-col gap-7">
            {startDate && endDate ? (
              <div className="flex flex-row text-[2rem] text-black_col">
                <span className="font-semibold">{format(startDate, "PP")}</span>
                <span className="mx-2"> - </span>
                <span className="font-semibold">{format(endDate, "PP")}</span>
              </div>
            ) : (
              <span className="text-[2rem] text-black_col">Add dates</span>
            )}

            <p className="flex flex-row text-[1.6rem] text-gray-400">
              <span>Check In</span>
              <span className="mx-1">-</span>
              <span>Check Out</span>
            </p>
          </div>

        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 rounded-[2rem]">
        <div className="p-4 flex flex-row w-[75rem] justify-between text-[2rem]">
          <div className='flex-1 flex flex-col items-center justify-center'>
            <Calendar
              mode="single"
              selected={startDate}
              onSelect={setStartDate}
              initialFocus
              className='text-[2rem]'
            />
          </div>
          <div className='flex-1 flex flex-col items-center justify-center'>
            <Calendar
              mode="single"
              selected={endDate}
              onSelect={setEndDate}
              className='text-[2rem]'
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
