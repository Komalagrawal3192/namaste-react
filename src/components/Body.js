
import RestaurantCard, {withDiscountLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utilities/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {

    //Local state variable- Super Powerful variable
    const [ListofRestaurants, setListofRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurant, setFilterRestaurant] = useState([]);


    const RestaurantCardDiscounted= withDiscountLabel(RestaurantCard);
    console.log("Body rendered".ListofRestaurants)

    useEffect(()=>{
          fetchData();      
    },[]);


      // Fetch LIVE data from Swiggy URL
        const fetchData= async()=>{
        const swiggyApiUrl ="https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.52110&lng=73.85020&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
   
        const data= await fetch(`https://proxy.corsfix.com/?${swiggyApiUrl}`);
        const json = await data.json();   
        

        //Optional Chaining
        setListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   };       
      // Check if user is Online
        const onlineStatus = useOnlineStatus();
        if(onlineStatus === false) return (
        <h1>Looks like you're offline!! Please check your internet connection..</h1>
        );

    //Conditional Rendering
    if(ListofRestaurants.length === 0)
        return <Shimmer />;

  return ListofRestaurants.length === 0 ? <Shimmer />:(
    <div className="body">
      <div className="filter flex">
        <div className="search m-2 p-2">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg hover:cursor-pointer" onClick={()=>{
                const filteredRestaurant= ListofRestaurants.filter((res)=>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())            
           );
         
            setFilterRestaurant(filteredRestaurant);
            }}
            >Search
            </button>
        </div>
       <div className="m-2 p-2 flex items-center">
        <button className="px-4 py-2 bg-gray-100 rounded-lg hover:cursor-pointer" onClick={()=>{   
            const filteredList= ListofRestaurants.filter(
                (res) => res.info.avgRating > 4.3
            );
            setFilterRestaurant(filteredList);
            
        }}> 
            Top Rated Restaurants
        </button>
        </div> 
      </div>
      <div className="flex flex-wrap" >
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
          {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardDiscounted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;