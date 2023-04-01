import RestaurantCard from "./RestaurantCards";
import { restaurantList } from "../src/config";
import { useState } from "react";

function Body() {
  const [restaurant, setRestaurant] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");

  function searchRestr(searchText, restaurant) {
    filteredRestaraunt = restaurant.filter((restaurant) =>
      restaurant.data.name.includes(searchText)
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
          <h1>{console.log(restaurant)}</h1>
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
