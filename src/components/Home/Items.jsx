import React from 'react';
import { useState } from 'react';
import family from "../../assets/icons/family.png"
import familyB from "../../assets/icons/familyB.png"
import bike from "../../assets/icons/bike.png"
import bikeB from "../../assets/icons/bikeB.png"
import car from "../../assets/icons/car.png"
import carB from "../../assets/icons/carB.png"
import travel from "../../assets/icons/travel.png"
import travelB from "../../assets/icons/travelB.png"
import health from "../../assets/icons/health.png"
import healthB from "../../assets/icons/healthB.png"
const Items = () => (
 <div className="card-holder">
    <Cards heading={"Family"} img={family} imgB={familyB} />
    <Cards heading={"Car"} img={car} imgB={carB}/>
    <Cards heading={"Bike"} img={bike} imgB={bikeB}/>
    <Cards heading={"Travel"} img={travel} imgB={travelB}/>
    <Cards heading={"Health"} img={health} imgB={healthB}/>
    
 </div>
);
export default Items;

function Cards({heading, img, imgB}){
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = () => {
    setIsHovered(!isHovered);
  };
    return(
      <a href="">
        <div className="card-normal mt-12 mr-3 home-card" style={{}}>
        <div className="card-body" style={{minWidth:"2rem", textAlign: 'center', borderRadius: '0.4rem'}}>
            <img 
            src={isHovered ? img : imgB}
            alt="Image"
            onMouseEnter={handleHover}
            onMouseLeave={handleHover} className='card-body-img'/>
            <h2 style={{fontSize: '1rem', fontWeight: '600'}}>{heading}</h2>
        </div>
      </div>
      </a>
    
    )   
}