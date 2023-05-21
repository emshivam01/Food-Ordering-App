import { useContext } from "react";
import BrandNameContext from "../../utlis/BrandNameContext";

const ChangeBrandName = () => {
  const { name, setName } = useContext(BrandNameContext);
  return (
    <>
      <input
        className="block m-auto mt-5 w-[520px] h-10 px-4 py-1 text-lg text-center font-medium border-2 border-gray-400 rounded "
        type="text"
        
        onChange={(e) => setName(e.target.value)}
      />
      
    </>
  );
};

export default ChangeBrandName;
