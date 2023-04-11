import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../config";

const Restaurant = () => {
  const { id } = useParams();

  const [RestaurantData, setRestaurantData] = useState();

  async function getRrestaurants() {
    const Data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4358011&lng=81.846311&restaurantId=" +
        id
    );
    const data = await Data.json();
    setRestaurantData(data);
  }

  useEffect(() => {
    getRrestaurants();
  }, []);

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
