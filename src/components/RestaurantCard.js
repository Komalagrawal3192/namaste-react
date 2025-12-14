import { CDN_URL } from "../utilities/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  //console.log(resData);
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    cloudinaryImageId,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-62.5 rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}minutes</h4>
    </div>
  );
};

// Higher Order Component

// input - RestaurantCard =>> RestaurantCardDiscounted

export const withDiscountLabel = (RestaurantCard) => {
  return (props) => {
    //console.log(props);
    return (
      <div>
        <label className="font-gilroy font-extrabold text-black/90 absolute p-4 ml-5 w-full">
          {props?.resData?.info?.aggregatedDiscountInfoV3?.header}{" "}
          {props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader && (
            <span>
              {" "}
              {props?.resData?.info?.aggregatedDiscountInfoV3?.subHeader}
            </span>
          )}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
