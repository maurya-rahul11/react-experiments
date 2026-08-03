import Card from "./Card";
// import resDataArr from "../utils/mockData";

const CardListing = (props) => {
  const { restaurants } = props;

  return (
    <div className="card-listing-container">
      {restaurants.map((restaurant) => (
        <Card key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
  );
};

export default CardListing;
