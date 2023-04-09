import RestaurantCard from "./RestaurantCards";
import { restaurantList } from "../config";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

function Body() {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function fetchingData() {
    const Data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const json = await Data.json();
    // console.log(json, "Line 15");
    setAllRestaurant(json?.data?.cards);
    setFilteredRestaurant(json?.data?.cards);
  }

  useEffect(() => {
    fetchingData();
  }, []);

  function searchRestr(searchText, restaurant) {
    filteredRestaraunt = restaurant.filter((restaurant) =>
      restaurant.data?.data?.name
        ?.toLowerCase()
        .includes(searchText.toLowerCase())
    );
    return filteredRestaraunt;
  }

  // if (restaurant.length === 0) return restaurant;

  return allRestaurant.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <h1>{console.log(filteredRestaurant)}</h1>
      <div className="Body">
        <div className="search-Container">
          <input
            className="SearchBar"
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

        <div className="Cards">
          {filteredRestaurant.map((restaurant, i) => {
            if (
              restaurant?.data?.data?.name &&
              restaurant?.data?.data?.cloudinaryImageId
            ) {
              return <RestaurantCard {...restaurant.data.data} key={i} />;
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Body;
