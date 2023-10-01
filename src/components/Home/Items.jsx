import React from 'react';
import family from "../../assets/home/family.png"
const Items = () => (
 <div className="card-holder">
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    <Cards/>
    
 </div>
);
export default Items;

function Cards(){
    return(
        <div className="card-normal	   shadow-xl m-4">
        <div className="card-body  ">
            <img src={family} alt="" />
            <h2>Faimily</h2>

          {/* <div className="card-actions justify-end">
          </div> */}
        </div>
      </div>
    
    )   
}