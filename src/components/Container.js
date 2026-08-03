import Search from "./Search";
import CardListing from "./CardListing";
import { useState, useEffect } from "react";
import resDataArr from "../utils/mockData";
import Shimmer from "./Shimmer";

// let resList;
// function ResClosure() {
//   resList = resDataArr;

//   return function(data) {
//     resList = data;
//   }
// }

const Container = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [immutableRestList, setImmutableRestList] = useState([]);

  // console.log("This is in Container component");

  // useEffect called when after 'Container' component rendered.
  useEffect(() => {
    // console.log("useEffect called");
    fetchRestoData();
  }, []);

  async function fetchRestoData() {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2574665&lng=72.8650191&page_type=DESKTOP_WEB_LISTING",
    );
    const apiRestoList = await data.json();

    // optional chaining (?.)
    setRestaurants(
      apiRestoList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setImmutableRestList(
      apiRestoList?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    // console.log(apiRestoList, ": apiRestoList");
  }

  // if (restaurants.length === 0) {
  //   return <Shimmer />;
  // }

  // const newData = ResClosure();
  // newData(resList.filter((res) => res.info.avgRating > 4.2));

  // conditional rendering
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="main-container">
      {/* <button onClick = { (event) => {  newData(resList.filter((res) => res.info.avgRating > 4.2)); console.log(resList); } }> Click Me </button> */}
      <Search
        immutableRestList={immutableRestList}
        restaurants={restaurants}
        setRestaurants={setRestaurants}
      />
      <CardListing restaurants={restaurants} />
    </div>
  );
};

export default Container;
