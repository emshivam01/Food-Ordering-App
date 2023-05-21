const Footer = () => {
  return (
    <div className="px-20 py-14 flex justify-between items-center ">
      <button className=" px-7 py-3 border-2 border-gray-700 text-xl font-semibold rounded-lg shadow-md hover:shadow-xl transition-all hover:bg-black hover:text-white duration-300">
        {" "}
        Contact Us
      </button>

      <span className="text-xl font-semibold ">
        Copyright &#169; 2023 Meal Magic Inc. All Rights Reserved
      </span>
    </div>
  );
};

export default Footer;
