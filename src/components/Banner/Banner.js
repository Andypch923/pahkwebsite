import React from "react";
import Myslider from "./Myslider";

function Banner() {
  let Slideshow;
  let style = "img-container";
  switch(window.location.pathname){
    case"/aboutus":
      Slideshow = ()=> <img src="image/7.jpg" alt="slideshow"/>;
      style = "img-container2"
      break;
    default:
      Slideshow = Myslider

  }
  
  return (
    <React.Fragment>
      <div className="banner-container">
        
      <div className={style}>
        <Slideshow/>
      </div>
      </div>
    </React.Fragment>
  );
}
export default Banner;
