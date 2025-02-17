"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import testimonialData from '@/data/testimonials.json';

interface Testimonial {
  src: string;
  alt: string;
  id: number;
  clientName: string;
  testimonialText: string;
}

const BASE_URL = "https://ztvhfiwqkd.ufs.sh/f";

const getImageUrl = (src: string) => `${BASE_URL}/${src}`;

export const lude = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const { testimonials } = testimonialData;
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }));
  };

  useEffect(() => {
    if (!api) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [api, current]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            Take a look at our stunning work...
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial: Testimonial) => (
                <CarouselItem className="basis-1/4 lg:basis-1/6" key={testimonial.id}>
                  <div className="flex rounded-md aspect-square bg-muted items-center justify-center p-6">
                    {!imageErrors[testimonial.id] ? (
                      <img
                        src={getImageUrl(testimonial.src)}
                        alt={testimonial.alt}
                        className="w-full h-full object-contain"
                        onError={() => handleImageError(testimonial.id)}
                      />
                    ) : (
                      <div className="text-sm text-gray-500">Image unavailable</div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default lude;