const Search = (props) => {
  // const { restaurants, setRestaurants } = props;
  const restaurants = props.restaurants;
  const setRestaurants = props.setRestaurants;

  return (
    <div className="search">
      {/* <input type="text" placeholder="Search..." />
      <button>Search</button> */}
      <button className="top-rated-restaurants" onClick={() => {
          const filteredData = restaurants.filter(
            restaurant => restaurant.info.avgRating > 4.2
          );
          // console.log(filteredData, "filteredData");
          console.log(restaurants, "restaurants");

          setRestaurants(filteredData);
        }}>
        Top Rated Restaurants
      </button>
    </div>
  );
};

export default Search;