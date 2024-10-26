import React from 'react'
import Carousel from 'react-multi-carousel';
import ProductCard from "./ProductCard"
import { productLists } from '@/constants/products';
const ProductCarousel = () => {

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1280 }, items: 3 },
        desktop: { breakpoint: { max: 1280, min: 1024 }, items: 3 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
      };

  return (
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
     {productLists.map((product, index) => (
      <ProductCard
        key={index}
        name={product.name}
        thumbnail={product.thumbnail}
        desc= {product.desc}
      />

   ))}
    </Carousel>
  );

}

export default ProductCarousel