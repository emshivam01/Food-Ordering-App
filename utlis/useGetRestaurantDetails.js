import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { RESTAURANT_DATA_URL } from "../src/config";

const useGetRestaurantDetais = () => {
  const [RestaurantData, setRestaurantData] = useState();

  const { id } = useParams();

  async function getRrestaurants() {
    const Data = await fetch(RESTAURANT_DATA_URL + id);
    const data = await Data.json();
    setRestaurantData(data);
  }

  useEffect(() => {
    getRrestaurants();
  }, []);

  return RestaurantData;
};

export default useGetRestaurantDetais;
