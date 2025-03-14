import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="p-4 space-y-6">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-6 text-left"
        >
        
          <div className="flex-1 text-left">
            <h3 className="font-semibold text-lg text-gray-800">
              {item.card.info.name}
            </h3>
            <p className="text-green-600 font-bold py-1">
              ₹{item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </p>
            <p className="text-gray-600 text-sm leading-snug">
              {item.card.info.description}
            </p>
          </div>

        
          <div className="relative w-28 h-24 flex-shrink-0 mt-4 md:mt-0">
            <img
              src={CDN_URL + item.card.info.imageId}
              className="w-full h-full object-cover rounded-md"
              alt={item.card.info.name}
            />
            <button
              className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white border border-gray-300 text-green-600 px-4 py-2 text-sm font-bold rounded-lg shadow-md hover:bg-gray-100"
              onClick={() => handleAddItem(item)}
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
