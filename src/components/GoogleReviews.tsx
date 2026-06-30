import { gotu } from "@/app/font";
import { testimonials } from "@/data/testimonials";
import { Carousel } from "./ui/cards-carousel";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function GoogleReviews() {
  return (
    <div className="overflow-hidden">
      <div
        id="avis"
        className="h-fit flex flex-col antialiased bg-[url(/avis.webp)] py-8 overflow-hidden bg-cover items-center justify-center relative"
      >
        <div className="absolute z-10 w-full h-full bg-black/30 backdrop-blur-[3px]" />
        <p
          className={`text-3xl lg:text-4xl text-white text-center font-semibold py-8 z-20 ${gotu.className}`}
        >
          Les retours patients
        </p>
        <div className="hidden lg:block">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>
        <div className="lg:hidden w-screen">
          <Carousel items={testimonials} />
        </div>
      </div>
    </div>
  );
}
