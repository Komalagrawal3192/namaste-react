import resList from "../utilities/mockData";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utilities/useOnlineStatus";


const Body = () => {

    //Local state variable- Super Powerful variable
    const [ListofRestaurants, setListofRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilterRestaurant] = useState("");

    useEffect(()=>{
          fetchData();      
    },[]);

        const fetchData= async()=>{
        const swiggyApiUrl ="https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
   
        const data= await fetch(`https://proxy.corsfix.com/?${swiggyApiUrl}`);
        const json = await data.json();
    

        //Optional Chaining
        setListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   };       

        const onlineStatus = useOnlineStatus();
        if(onlineStatus === false) return (
        <h1>It seems u r offline</h1>
        );

    //Conditional Rendering
    if(ListofRestaurants.length === 0)
        return <Shimmer />;

  return ListofRestaurants.length === 0 ? <Shimmer />:(
    <div className="body">
      <div className="filter">
        <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)} }        />
            <button onClick={()=>{
                const filteredRestaurant= ListofRestaurants.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())            
           );
         
            setFilterRestaurant(filteredRestaurant);
            }}
            >Search
            </button>
        </div>
        <button className="filter-btn" onClick={()=>{   
            const filteredList= ListofRestaurants.filter(
                (res) => res.info.avgRating > 4.3
            );
            setListofRestaurants(filteredList);
        }}> 
            Top Rated Components
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;