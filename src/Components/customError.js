import { Link, useParams } from "react-router-dom";

const CustomError = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center gap-6 ">
        <h1 className="text-5xl font-bold text-center">404</h1>
        <p className="text-3xl font-semibold">PAGE NOT FOUND</p>
        <Link to="/" className="border-2 border-black px-8 py-3 text-2xl font-semibold hover:bg-black hover:text-white transition-all delay-75 ">HOME</Link>
      </div>
    </div>
  );
};

export default CustomError;
