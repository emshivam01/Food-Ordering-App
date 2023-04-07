import { IMG_URL } from "../config";

const RestaurantCard = ({
  cloudinaryImageId,
  cuisines,
  costForTwoString,
  deliveryTime,
  name,
}) => {
  return (
    <div className="Card">
      <img src={IMG_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <div className="Details"></div>
      <div className="otherDetails">
        <p>{costForTwoString}</p>
        <div className="timing">
          <span className="material-symbols-outlined">timer</span>
          <p>{deliveryTime + " mins"}</p>
        </div>
      </div>
      <button>Order Now</button>
    </div>
  );
};

export default RestaurantCard;
