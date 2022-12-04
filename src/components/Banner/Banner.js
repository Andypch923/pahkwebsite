import React from "react";
import BannerItems from "./BannerItems";
import HomepageData from "./homepage.json"

function Banner(){
    return(
        <React.Fragment>
        {/* <div class="slideshow-container">
            {HomepageData.map((imgs) => (
                <div class="mySlides fade" key={imgs.id}>
                    <img src={imgs.image} style="width:100%" alt="slideshow items png"/>
                    <div class="text">{imgs.text}</div>
                </div>
            ))}
        </div>
        
            <br /> */}

        <div>
            <span class="dot"></span> 
            <span class="dot"></span> 
            <span class="dot"></span> 
        </div>

        </React.Fragment>
        
        

    )
}
export default Banner;