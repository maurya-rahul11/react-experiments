import Card from "./Card";
// import resDataArr from "../utils/mockData";

const CardListing = ({restaurants}) => {
  return (
    <div className="card-listing-container">
      {restaurants.map((restaurant) => {
        return <Card key={restaurant.info.id} resData={restaurant} />;
      })}
    </div>
  )
};

export default CardListing;