import { IMG_URL } from "../config";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  deliveryTime,
  costForTwoString,
}) => {
  return (
    <div className="Card">
      <img src={IMG_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <div className="Details">
        <p>{cuisines.join(", ")}</p>
        <p>{deliveryTime + " mins"}</p>
        <p>{costForTwoString}</p>
      </div>
      <button>Order Now</button>
    </div>
  );
};

export default RestaurantCard;
