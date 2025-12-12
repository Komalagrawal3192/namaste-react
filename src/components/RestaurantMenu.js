import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import resList from "../utilities/mockData";

const RestaurantMenu = () => {
 useEffect(()=>{
    fetchMenu();
 },[])


//   const fetchMenu = async () => {
//     const data = await fetch(
//       "https://proxy.corsfix.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.52110&lng=73.85020&restaurantId=326931&catalog_qa=undefined&submitAction=ENTER"
//     );      
//     const json = await data.json();
//     console.log(json);
//   };
const fetchMenu= async()=>{
        
        const data= await fetch(resList);
        const json = await data.json();
        console.log(json.data);
}
  return (  
    <div>
      <h1>Name of the Restaurant</h1>
      <h2>Menu</h2>
      <ul>
        <li>Buger</li>
        <li>Pizza</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
