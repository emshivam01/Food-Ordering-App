function ShimmerUI() {
  return (
    <div className="flex flex-wrap between my-24 px-20">
      {Array(20)
        .fill(" ")
        .map((i, index) => (
          <div
            className="bg-gray-300 w-60 h-64 m-6 rounded-md animate-pulse"
            key={index}
          ></div>
        ))}
    </div>
  );
}

export default ShimmerUI;
