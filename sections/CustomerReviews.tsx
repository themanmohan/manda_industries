import { ReviewCard } from "../components";
import { reviews } from "../constants";


import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function CustomerReviews() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <Carousel
  
    swipeable={false}
    draggable={false}
    showDots={true}
    responsive={responsive}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    arrows={false}
    containerClass="carousel-container"
    removeArrowOnDeviceType={["tablet", "mobile"]}
    dotListClass="custom-dot-list-style">


        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
   
</Carousel>
  );
}

export default CustomerReviews;
