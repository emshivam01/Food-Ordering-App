import { IMG_URL } from "../config";

const RestaurantCard = ({
  cloudinaryImageId,
  cuisines,
  costForTwoString,
  deliveryTime,
  name,
}) => {
  return (
    <div className="flex flex-col justify-between w-64 h-80 border-2 border-gray-200 p-2 shadow-lg rounded-lg">
      <img className="rounded-md shadow-md" src={IMG_URL + cloudinaryImageId} />
      <h2 className="text-xl font-semibold">{name}</h2>
      <div className="Details"></div>
      <div className="flex justify-between">
        <p>{costForTwoString}</p>
        <div className="flex">
          <span className="material-symbols-outlined">timer</span>
          <p>{deliveryTime + " mins"}</p>
        </div>
      </div>
      <button className=" bg-green-600 text-white font-medium py-1 rounded shadow-md">
        Order Now
      </button>
    </div>
  );
};

export default RestaurantCard;
