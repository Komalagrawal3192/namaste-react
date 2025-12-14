import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utilities/constants";
import RestaurantCategory from "./RestaurantCategory";
import menuData from "../utilities/mockResData";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    setResInfo(menuData);
  }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   setResInfo(json.data);
  //   //console.log(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  console.log(menuData);

  return (
    <div className="text-center">
      <h2 className="font-bold my-6 text-2xl"> {resId}</h2>
      {/* categories accordions */}

      <RestaurantCategory />
    </div>
  );
};

export default RestaurantMenu;
