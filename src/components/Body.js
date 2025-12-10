import resList from "../utilities/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

    //Local state variable- Super Powerful variable
    const [ListofRestaurants, setListofRestaurants] = useState(resList);

    useEffect(()=>{
          fetchData();      
    },[]);

        const fetchData= async()=>{
        const swiggyApiUrl ="https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
   
        const data= await fetch(`https://proxy.corsfix.com/?${swiggyApiUrl}`);
        const json = await data.json();
        console.log(json);

        //Optional Chaining
        setListofRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
   };

   

    if(ListofRestaurants.length === 0)
        return <Shimmer />;

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{   
            const filteredList= ListofRestaurants.filter(
                (res) => res.info.avgRating > 4.1
            );
            setListofRestaurants(filteredList);
        }}> 
            Top Rated Components
        </button>
      </div>
      <div className="res-container">
        {ListofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;