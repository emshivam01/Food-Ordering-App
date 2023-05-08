const para =
  "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat";

const Section = ({ name, para }) => {
  return (
    <div className="border-2 border-gray-400 shadow-lg my-10 mx-12 p-2">
      <div className="flex justify-between">
        <h1 className="text-2xl font-semibold underline underline-offset-4 mb-4">
          {name}
        </h1>
        <button className="text-2xl font-semibold underline underline-offset-4 mb-4 cursor-pointer">
        <span className="material-symbols-outlined text-2xl font-semibold mb-4 cursor-pointer">
        arrow_drop_down
        </span>
        </button>
      </div>
      <p className="text-lg font-normal">{para}</p>
    </div>
  );
};

const Faq = () => {
  return (
    <div>
      <Section name={"Shivam Sharma"} para={para} />
    </div>
  );
};

export default Faq;
