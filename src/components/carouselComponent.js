import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
"mdbreact";
import CustomImage from "../images/cake.jpg";
import "../styles.css";

const CarouselPage = () => {
  return (
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={CustomImage}
              alt="First slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption className="carousel-caption">
            <h1 className="h1-responsive hidden-md" >Made With Love</h1>
            <p className="hidden-md">Maecanas interdum nisl<br />sit amet pulvinar volutpat<br />felis eu neque vehicula fringilla</p>
            <a href="#" className="hiden-md">EXPLORE</a>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={CustomImage}
              alt="Second slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption className="carousel-caption">
            <h1 className="h1-responsive hidden-md">Made With Love</h1>
            <p className="hidden-md">Maecanas interdum nisl<br />sit amet pulvinar volutpat<br />felis eu neque vehicula fringilla</p>
            <a href="#" className="hiden-md">EXPLORE</a>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={CustomImage}
              alt="Third slide"
            />
          <MDBMask overlay="black-strong" />
          </MDBView>
          <MDBCarouselCaption className="carousel-caption">
            <h1 className="h1-responsive hidden-md">Made With Love</h1>
            <p className="hidden-md">Maecanas interdum nisl<br />sit amet pulvinar volutpat<br />felis eu neque vehicula fringilla</p>
            <a href="#" className="hiden-md">EXPLORE</a>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default CarouselPage;