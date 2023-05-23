import { useEffect, useState } from "react";
import { IMG_URL } from "../config";
import useGetRestaurantDetais from "../../utlis/useGetRestaurantDetails";
import { useDispatch } from "react-redux";
import { addItem } from "../../utlis/cartSlice";

const Restaurant = () => {
  const RestaurantData = useGetRestaurantDetais();

  const dispatch = useDispatch();

  const addToCart = (menu) => {
    dispatch(addItem(menu));
  };

  return (
    <>  
      <div className="flex justify-around p-20 ">
        <div className=" w-[450px] max-w-max border-2 border-gray-100 p-3 rounded-lg shadow-lg">
          <img
            className="w-[450px] rounded shadow-md mb-5"
            src={
              IMG_URL +
              RestaurantData?.data?.cards[0]?.card?.card?.info
                ?.cloudinaryImageId
            }
          />
          <div className="mb-2">
            <p
              className="truncate text-3xl font-semibold"
              title={RestaurantData?.data?.cards[0]?.card?.card?.info?.name}
            >
              {RestaurantData?.data?.cards[0]?.card?.card?.info?.name}
            </p>
            <p className="text-xl font-medium">
              {RestaurantData?.data?.cards[0]?.card?.card?.info?.avgRating}{" "}
              Stars
            </p>
          </div>
          <p className="text-xl font-medium mb-2">
            {RestaurantData?.data?.cards[0]?.card?.card?.info?.cuisines.join(
              ", "
            )}
          </p>
          <div className="flex justify-between">
            <p className="text-xl font-medium">
              {
                RestaurantData?.data?.cards[0]?.card?.card?.info
                  ?.costForTwoMessage
              }
            </p>
            <p className="flex justify-center items-center gap-2 text-xl  font-medium ">
              <span className="material-symbols-outlined text-2xl">timer</span>
              {
                RestaurantData?.data?.cards[0]?.card?.card?.info?.sla
                  ?.deliveryTime
              }{" "}
              mins
            </p>
          </div>
          <div className="">
            <p className="text-xl font-medium">
              {
                RestaurantData?.data?.cards[0]?.card?.card?.info
                  ?.aggregatedDiscountInfoV2?.shortDescriptionList[0]?.meta
              }
            </p>

            <p className="text-xl font-medium">
              {
                RestaurantData?.data?.cards[0]?.card?.card?.info
                  ?.aggregatedDiscountInfoV2?.shortDescriptionList[1]?.meta
              }
            </p>
          </div>
        </div>
        <ul className="">
          {RestaurantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
            (menu, i) => {
              return (
                <li
                  className="flex justify-between items-center text-xl w-96 font-medium m-3 p-3 border-2 border-gray-200 rounded-md"
                  key={i}
                >
                  {menu?.card?.info?.name}{" "}
                  <button
                    onClick={() => {
                      addToCart(menu);
                    }}
                    className="px-3 bg-green-300  rounded-md shadow-md"
                  >
                    Add
                  </button>
                </li>
              );
            }
          )}
        </ul>
      </div>
    </>
  );
};

export default Restaurant;
