import { useState } from "react";

const Search = (props) => {
  const { immutableRestList, restaurants, setRestaurants } = props;
  const [searchText, setSearchText] = useState("");

  console.log("This is in Search component");

  return (
    <div className="search">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />

      <button
        className="search-btn"
        onClick={(e) => {
          console.log(searchText, "::searchText");
          const searchedResto = immutableRestList.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase()),
          );
          setRestaurants(searchedResto);
        }}
      >
        Search
      </button>

      <button
        className="top-rated-restaurants-btn"
        onClick={(e) => {
          const filteredData = restaurants.filter(
            (res) => res.info.avgRating > 4.2,
          );
          setRestaurants(filteredData);
        }}
      >
        4.2+ Rated Restaurants
      </button>
    </div>
  );
};

export default Search;
