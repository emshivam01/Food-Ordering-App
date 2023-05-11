import { useState } from "react";

const para =
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

const Section = ({ name, para, isVisible, setIsVisible }) => {
  return (
    <div className="bg-[#118091] border-2 border-gray-300 shadow-lg m-10 p-2 px-4 rounded-lg">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold text-white">{name}</h1>
        <button
          onClick={() => {
            isVisible ? setIsVisible(false) : setIsVisible(true);
          }}
          className="text-2xl font-semibold cursor-pointer"
        >
          <span className="material-symbols-rounded text-4xl font-semibold text-white cursor-pointer">
            {isVisible ? "arrow_drop_up" : "arrow_drop_down"}
          </span>
        </button>
      </div>
      {isVisible && (
        <p className="text-lg font-normal text-white mt-3">{para}</p>
      )}
    </div>
  );
};

const Faq = () => {
  const [visibleSec, setVisibleSec] = useState();

  return (
    <div>
      <Section
        name={"First FAQ "}
        para={para}
        isVisible={visibleSec === "first"}
        setIsVisible={() =>
          setVisibleSec(visibleSec === "first" ? "" : "first")
        }
      />
      <Section
        name={"Second FAQ "}
        para={para}
        isVisible={visibleSec === "second"}
        setIsVisible={() => {
          setVisibleSec(visibleSec === "second" ? "" : "second");
        }}
      />
      <Section
        name={"Third FAQ "}
        para={para}
        isVisible={visibleSec === "third"}
        setIsVisible={() => {
          setVisibleSec(visibleSec === "third" ? "" : "third");
        }}
      />
    </div>
  );
};

export default Faq;
