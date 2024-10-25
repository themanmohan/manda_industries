// CarouselComponent.tsx
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface PropsTypes {
  images: StaticImageData[];
}

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 1 },
  desktop: { breakpoint: { max: 1280, min: 1024 }, items: 1 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const CarouselComponent: React.FC<PropsTypes> = ({ images }) => (
  <Carousel
    swipeable={false}
    draggable={false}
    showDots={true}
    autoPlay={true}
    responsive={responsive}
    infinite={true}
    autoPlaySpeed={2000}
    customTransition="all .5"
    transitionDuration={500}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile", "Desktop"]}
    dotListClass="custom-dot-list-style"
    arrows={false}
  >
    {images.map((imageURL, index) => (
      <div key={index} className="bg-gray-400 w-full rounded-lg">
        <Image src={imageURL} height={500} alt={`Product Image ${index + 1}`} style={{ height: "400px" }} className="mx-auto" />
      </div>
    ))}
  </Carousel>
);

export default CarouselComponent;
