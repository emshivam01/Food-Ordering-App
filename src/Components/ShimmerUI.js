function ShimmerUI() {
  return (
    <div className="Cards shimmer-ui">
      {Array(10)
        .fill(" ")
        .map((i) => (
          <div className="shimmer-Cards"></div>
        ))}
    </div>
  );
}

export default ShimmerUI;
