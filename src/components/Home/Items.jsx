import React from 'react';
import { useState } from 'react';
import family from "../../assets/icons/family.jpg"
import familyB from "../../assets/icons/familyB.jpg"
import bike from "../../assets/icons/bike.jpg"
import bikeB from "../../assets/icons/bikeB.jpg"
import car from "../../assets/icons/car.jpg"
import carB from "../../assets/icons/carB.jpg"
import travel from "../../assets/icons/travel.jpg"
import travelB from "../../assets/icons/travelB.jpg"
import health from "../../assets/icons/health.jpg"
import healthB from "../../assets/icons/healthB.jpg"
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
        <div className="card-normal 	shadow-xl mt-12 mr-2 home-card" >
        <div className="card-body" style={{minWidth:"2rem", textAlign: 'center'}}>
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