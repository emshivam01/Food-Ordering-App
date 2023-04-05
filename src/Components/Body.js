import RestaurantCard from "./RestaurantCards";
import { restaurantList } from "../config";
import { useState, useEffect } from "react";

function Body() {
  const [restaurant, setRestaurant] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  async function fetchingData() {
    const Data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );

    const json = await Data.json();
    console.log(json);
  }

  useEffect(() => {
    console.log("useEffect");
    const ogData = fetchingData();

    // setRestaurant(ogData?.data?.cards);
    console.log(ogData, "Line No. 22");
  }, []);

  function searchRestr(searchText, restaurant) {
    filteredRestaraunt = restaurant.filter((restaurant) =>
      restaurant.data?.data?.name.includes(searchText)
    );
    return filteredRestaraunt;
  }

  return (
    <>
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
              const Data = searchRestr(searchText, restaurantList);
              setRestaurant(Data);
            }}
          >
            Search
          </button>
        </div>

        <div className="Cards">
          {restaurant.map((restaurant) => {
            return (
              <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Body;
