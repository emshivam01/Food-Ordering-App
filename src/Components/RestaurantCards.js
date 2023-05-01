import { IMG_URL } from "../config";

const RestaurantCard = ({
  cloudinaryImageId,
  cuisines,
  costForTwoString,
  deliveryTime,
  name,
}) => {
  return (
    <div className="flex flex-col justify-between w-64 h-80 border-2 border-gray-200 p-3 shadow-lg rounded-lg hover:scale-105 transition-all delay-75 ">
      <img className="rounded-md shadow-md" src={IMG_URL + cloudinaryImageId} />
      <h2 className="truncate text-xl font-semibold" title={name}>
        {name}
      </h2>
      <div className="flex justify-between">
        <p className="text-base font-medium">{costForTwoString}</p>
        <div className="flex gap-1">
          <span className="material-symbols-outlined">timer</span>
          <p className="text-base font-medium">{deliveryTime + " mins"}</p>
        </div>
      </div>
      <button className=" bg-green-600 text-white font-medium py-1 rounded shadow-md">
        Order Now
      </button>
    </div>
  );
};

export default RestaurantCard;
