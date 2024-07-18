import { gallery } from "@/data/constants";
import HeadingSection from "../HeadingSection";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../ui/carousel";

const Gallery = () => {
  return (
    <section id="gallery" className="mt-20 md:mt-28">
      <HeadingSection
        topText="Our Gallery"
        mainHeading="Our Rooms Gallery"
        description="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
      />
      <div className="mt-14">
        <Tabs defaultValue={gallery[0].title}>
          <TabsList className=" grid grid-cols-2 gap-2 bg-transparent mb-56 md:grid-cols-3 lg:grid-cols-5 lg:px-32 md:mb-40">
            {gallery.map((data) => (
              <TabsTrigger
                key={data.title}
                value={data.title}
                className="text-grey-10 border-2 border-grey-10 rounded-md bg-white data-[state=active]:bg-orange-95 cursor-pointer"
              >
                {data.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {gallery.map((data) => (
            <TabsContent
              key={data.title}
              value={data.title}
              className="bg-white p-10 border border-grey-10 rounded-md shadow-shadow2 mt-48"
            >
              <Carousel opts={{ loop: true }} className="-mt-36">
                <CarouselContent>
                  {data.images.map((url, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-full sm:basis-1/3 lg:basis-1/4"
                    >
                      <img src={url} alt="" className="w-full object-contain" />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="relative flex flex-col-reverse items-center gap-4  mt-8 md:flex-row md:justify-between">
                  <h3 className="text-grey-10 text-2xl font-bold md:text-[34px]">
                    {data.title}{" "}
                  </h3>
                  <div className="space-x-4">
                    <CarouselPrevious className="w-12 h-12 rounded-md" />
                    <CarouselNext className="w-12 h-12 rounded-md" />
                  </div>
                </div>
              </Carousel>

              <p className="text-grey-30 text-lg text-center font-medium md:text-left mt-3 md:mt-6">
                {" "}
                {data.desc}
              </p>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Gallery;
