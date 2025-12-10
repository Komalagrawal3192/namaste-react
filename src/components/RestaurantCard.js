import { CDN_URL } from "../utilities/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0ff" }}>
      <img
        className="res-logo"
        alt="img-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h3>{cuisines}</h3>
      <h3>{avgRating} stars</h3>
      <h3>Rs {costForTwo}</h3>
    </div>
  );
};

export default RestaurantCard;