import { Link, useParams } from "react-router-dom";

const CustomError = () => {
  return (
    <div className="error-container">
      <div>
        <h1>404</h1>
        <p className="error-text">PAGE NOT FOUND</p>
        <Link to="/"><p className="back-to-home">Home</p></Link>
      </div>
    </div>
  );
};

export default CustomError;
