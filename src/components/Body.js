import resList from "../utilities/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

    //Local state variable- Super Powerful variable
    const [ListofRestaurants, setListofRestaurants] = useState(resList);

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