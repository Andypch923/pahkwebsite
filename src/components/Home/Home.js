import React from "react";
import Banner from "../Banner"
import CardList from "../Card/CardList";
export default function Home() {
  return (
    <div className="Home">
      
      <body>
          <top> 
            <Banner/>

          </top>
            <CardList/>

        <p>
          Pacific Agriscience devotes to provide farmers and the agricultural
          chemical supply-chain with cost-effective generic pesticides and
          innovative speciality agricultural chemicals. With associate companies
          in Singapore and Australia, our cohesive global cooperative network
          covers over 50 cities worldwide. We are proficient in marketing
          generic pesticides, fertiliser raw materials, speciality agrochemicals
          and industrial speciality chemicals. Our team also develop markets for
          a range of proprietary agrochemicals and seek national distributors
          for these products.
        </p>
      </body>  
      
    </div>
  );
}
