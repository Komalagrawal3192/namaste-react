import menuData from "../utilities/mockResData";
import { CDN_URL } from "../utilities/constants";
import { useState } from "react";

const RestaurantCategory = () => {
  const data = menuData;
  const [showBody, setShowBody] = useState(false);
  //console.log(data);
  const handleClick = () => {
    // console.log("Clicked");
    setShowBody((prev) => !prev);
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">Recommended</span>
          <span>{showBody ? "⬆" : "⬇"}</span>
        </div>
      </div>
      {/* Body */}
      {showBody && (
        <div className="w-6/12 mx-auto my-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span>{item.name}</span>
                  <span>
                    {" "}
                    - ₹{item.price ? item.price / 100 : item.defaultPrice / 100}
                  </span>
                </div>
                <p className="text-xs">{item.description}</p>
              </div>

              <div className="w-3/12 p-4 relative">
                <button className="absolute p-1 bg-white text-black shadow-lg">
                  Add +
                </button>
                <img src={CDN_URL + item.imageId} className="w-full" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
