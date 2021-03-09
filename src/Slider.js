import React from "react";
import Carousel from "react-elastic-carousel";
import './Home.css';


import slider1 from './UI/Slider/1.jpg'
import slider2 from './UI/Slider/2.jpg'
import slider3 from './UI/Slider/3.jpg'
import slider4 from './UI/Slider/4.jpg'
import slider5 from './UI/Slider/5.jpg'




const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 1, itemsToScroll: 1 },
  { width: 768, itemsToShow: 1 },
  { width: 1200, itemsToShow: 1 }
];



export default function MySlider() {
  return (
    <div className="home__image">
      <Carousel breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={2000} infinite={true} >
        <img src={slider1}/>
        <img src={slider2}/>
        <img src={slider3}/>
        <img src={slider4}/>
        <img src={slider5}/>
        <img src={slider1}/>
        <img src={slider2}/>
        <img src={slider3}/>
        <img src={slider4}/>
        <img src={slider5}/>
        <img src={slider1}/>
        <img src={slider2}/>
        <img src={slider3}/>
        <img src={slider4}/>
        <img src={slider5}/>
        <img src={slider1}/>
        <img src={slider2}/>
        <img src={slider3}/>
        <img src={slider4}/>
        <img src={slider5}/>
        <img src={slider1}/>
        <img src={slider2}/>
        <img src={slider3}/>
        <img src={slider4}/>
        <img src={slider5}/>
        <img src={slider1}/>
        <img src={slider2}/>
        <img src={slider3}/>
        <img src={slider4}/>
        <img src={slider5}/>
        <img src={slider1}/>
        <img src={slider2}/>
        <img src={slider3}/>
        <img src={slider4}/>
        <img src={slider5}/>
        <img src={slider1}/>
        <img src={slider2}/>
        <img src={slider3}/>
        <img src={slider4}/>
        <img src={slider5}/>
        <img src={slider1}/>
        <img src={slider2}/>
        <img src={slider3}/>
        <img src={slider4}/>
        <img src={slider5}/>
        <img src={slider1}/>
        <img src={slider2}/>
        <img src={slider3}/>
        <img src={slider4}/>
        <img src={slider5}/>
        <img src={slider2}/>
        <img src={slider3}/>
        <img src={slider4}/>
        <img src={slider5}/>
        <img src={slider1}/>
        <img src={slider2}/>
        <img src={slider3}/>
        <img src={slider4}/>
        <img src={slider5}/>
        <img src={slider1}/>
        <img src={slider2}/>
        <img src={slider3}/>
        <img src={slider4}/>
        <img src={slider5}/>
        <img src={slider2}/>
        <img src={slider3}/>
        <img src={slider4}/>
        <img src={slider5}/>
        <img src={slider1}/>
        <img src={slider2}/>
        <img src={slider3}/>
        <img src={slider4}/>
        <img src={slider5}/>
        <img src={slider1}/>
        <img src={slider2}/>
        <img src={slider3}/>
        <img src={slider4}/>
        <img src={slider5}/>
        

      </Carousel>
    </div>
  );
}