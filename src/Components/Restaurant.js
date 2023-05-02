import { useEffect, useState } from "react";
import { IMG_URL } from "../config";
import useGetRestaurantDetais from "../../utlis/useGetRestaurantDetails";

const Restaurant = () => {
  const RestaurantData = useGetRestaurantDetais();

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
                <li className="text-xl font-medium mb-2" key={i}>
                  {menu?.card?.info?.name}
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
