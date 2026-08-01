import Search from "./Search";
import CardListing from "./CardListing";
import { useState } from "react";
import resDataArr from "../utils/mockData";

const Container = () => {
  // const [restaurants, setRestaurants] = useState(resDataArr);
  const resArr = useState(resDataArr); // hook from react to manage the state of the restaurants data.
  const restaurants = resArr[0]; // variable to preserve the restaurants data.
  const setRestaurants = resArr[1]; // function to update the restaurants variable dynamically.

  return (
    <div className="main-container">
      <Search restaurants={restaurants} setRestaurants={setRestaurants} />
      <CardListing restaurants={restaurants} />
    </div>
  );
};

export default Container;