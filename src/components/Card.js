import { IMG_CDN_URL } from "../utils/constants";

const Card = ({ resData }) => {
  const { name, cloudinaryImageId, cuisines, costForTwo, avgRating, sla } =
    resData?.info;

  return (
    <div className="card-item">
      <img
        className="card-img"
        alt="card-img"
        src={`${IMG_CDN_URL}${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} star</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default Card;
