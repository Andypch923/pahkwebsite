import React from "react";
<<<<<<< Updated upstream
import IMAGES from "./index2.json";

import Banner from "../Banner"
=======
import Banner from "../Banner/Banner";
import CardList from "../Card/CardList";
>>>>>>> Stashed changes
export default function Home() {
  return (
    <div className="Home">
      <body>
        <div className="home">
          <top>
            <Banner/>
          </top>
<<<<<<< Updated upstream
        {IMAGES &&IMAGES.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="Monkey.png" />
            </div>
          ))}
=======
          <h1>"Caring & Sharing"</h1>
          <h2>It's what we do best</h2>
          <hr></hr>
>>>>>>> Stashed changes

          <p>
            Pacific Agriscience devotes to provide farmers and the agricultural
            chemical supply-chain with cost-effective generic pesticides and
            innovative speciality agricultural chemicals. With associate
            companies in Singapore and Australia, our cohesive global
            cooperative network covers over 50 cities worldwide. We are
            proficient in marketing generic pesticides, fertiliser raw
            materials, speciality agrochemicals and industrial speciality
            chemicals. Our team also develop markets for a range of proprietary
            agrochemicals and seek national distributors for these products.
          </p>
          <h1>Learn More About PAHK</h1>
          <hr></hr>
          <CardList />
        </div>
      </body>
    </div>
  );
}
