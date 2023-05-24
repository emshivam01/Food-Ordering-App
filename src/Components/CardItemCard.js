const CardItemCard = ({ item }) => {
  return (
    <div className="flex justify-between p-2 m-3 max-w-screen-sm  border-2 border-gray-200 rounded-md shadow-md">
      <p className="text-xl font-medium">{item.card.info.name}</p>
      <p className="text-xl font-medium">
        &#8377; {item.card.info.price / 100}
      </p>
    </div>
  );
};

export default CardItemCard;
