function ShimmerUI() {
  return (
    <div className="Cards shimmer-ui">
      {Array(10)
        .fill(" ")
        .map((i, index) => (
          <div className="shimmer-Cards" key={index}></div>
        ))}
    </div>
  );
}

export default ShimmerUI;
