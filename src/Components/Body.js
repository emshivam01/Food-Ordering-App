import RestaurantCard from "./RestaurantCards";
import { RESTAURANTS_DATA_URL } from "../config";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import { searchRestr } from "../../utlis/utils";
import useNetworkStatus from "../../utlis/useNetworkStatus";

function Body() {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function fetchingData() {
    const Data = await fetch(RESTAURANTS_DATA_URL);
    const json = await Data.json();
    setAllRestaurant(json?.data?.cards);
    setFilteredRestaurant(json?.data?.cards);
  }

  useEffect(() => {
    fetchingData();
  }, []);

  const NetworkStatus = useNetworkStatus();

  if (!NetworkStatus) {
    return (
      <h1 className="Network-error">
        🔴 Please Check Your Internet Connection
      </h1>
    );
  }

  return allRestaurant.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="Body">
        <div className="">
          <input
            className="border-2 border-gray-700 w-72"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="src-btn"
            onClick={() => {
              const Data = searchRestr(searchText, allRestaurant);
              setFilteredRestaurant(Data);
              console.log(Data, "Line 47");
            }}
          >
            Search
          </button>
        </div>

        <div className="flex flex-wrap px-10 gap-10">
          {filteredRestaurant.map((restaurant, i) => {
            if (
              restaurant?.data?.data?.name &&
              restaurant?.data?.data?.cloudinaryImageId
            ) {
              return (
                <Link to={"/restaurants/" + restaurant.data.data.id}>
                  <RestaurantCard
                    {...restaurant.data.data}
                    key={restaurant.data.data.id}
                  />
                </Link>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Body;
