import { useEffect, useState } from "react";
import { LIVE_API } from "./Constant";

const useRestaurantsList = () => {
  const [listOfRestaurants, setListOfReastaurants] = useState([]);

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(LIVE_API);
    const json = await data.json();

    setListOfReastaurants(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(filteredRestaurants);
  console.log(listOfRestaurants);
  return listOfRestaurants;
};

export default useRestaurantsList;
