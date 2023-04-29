import { useEffect, useState } from "react";
import { IMG_URL } from "../config";
import useGetRestaurantDetais from "../../utlis/useGetRestaurantDetails";

const Restaurant = () => {
  const RestaurantData = useGetRestaurantDetais();

  return (
    <>
      <div className="restaurant-menu-card">
        <div className="restaurant-meta">
          <img
            src={
              IMG_URL +
              RestaurantData?.data?.cards[0]?.card?.card?.info
                ?.cloudinaryImageId
            }
          />
          <div className="name-and-rating">
            <p>{RestaurantData?.data?.cards[0]?.card?.card?.info?.name}</p>
            <p>
              {RestaurantData?.data?.cards[0]?.card?.card?.info?.avgRating}{" "}
              Stars
            </p>
          </div>
          <p className="restaurant-cuisine">
            {RestaurantData?.data?.cards[0]?.card?.card?.info?.cuisines.join(
              ", "
            )}
          </p>
          <div className="time-and-cost">
            <p>
              {
                RestaurantData?.data?.cards[0]?.card?.card?.info
                  ?.costForTwoMessage
              }
            </p>
            <p className="delivery-timer">
              <span className="material-symbols-outlined">timer</span>
              {
                RestaurantData?.data?.cards[0]?.card?.card?.info?.sla
                  ?.deliveryTime
              }{" "}
              mins
            </p>
          </div>
          <div className="offers">
            <p>
              {
                RestaurantData?.data?.cards[0]?.card?.card?.info
                  ?.aggregatedDiscountInfoV2?.shortDescriptionList[0]?.meta
              }
            </p>

            <p>
              {
                RestaurantData?.data?.cards[0]?.card?.card?.info
                  ?.aggregatedDiscountInfoV2?.shortDescriptionList[1]?.meta
              }
            </p>
          </div>
        </div>
        <ul className="restaurant-menu">
          {RestaurantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
            (menu, i) => {
              return <li key={i}>{menu?.card?.info?.name}</li>;
            }
          )}
        </ul>
      </div>
    </>
  );
};

export default Restaurant;
