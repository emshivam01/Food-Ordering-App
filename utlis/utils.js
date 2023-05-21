export function searchRestr(searchText, restaurant) {
  filteredRestaurant = restaurant.filter((restaurant) =>
    restaurant.data?.data?.name
      ?.toLowerCase()
      .includes(searchText.toLowerCase())
  );
  return filteredRestaurant;
}
