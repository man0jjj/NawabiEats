import React from "react";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {
  cloudinaryImageId,
  name,
  areaName,
  cuisines,
  avgRating,
  costForTwo,
    } = resData?.info;
    return (
      <div className=" m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-2xl">
        <img className="res-logo rounded-lg w-full h-48 object-cover" src={CDN_URL+cloudinaryImageId}/>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="font-semibold">{areaName}📍</h4>
      <h4 className="text-gray-600">{cuisines.join(", " )}</h4>
      <h4 className="font-semibold">{avgRating}⭐</h4>
      <h4>{costForTwo}</h4>
      </div>
    )
  };
   
  export default RestaurantCard;