import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img className="logo" src={logo} />
      <input
        className="SearchBar"
        type="text"
        placeholder="Search for restaurants, cuisines or a dish..."
      />
      <div className="Nav-items">
        <button>Log in</button>
        <button>Sign up</button>
        <button>Cart</button>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    data: {
      type: "F",
      id: "193020",
      name: "Dhola Maroo Juice Centre",
      uuid: "323eb110-0dd3-4834-aeb6-95f2baba627c",
      city: "10161",
      area: "Mahndi Bagh",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "b7znmezezmcc3xeh6ezq",
      cuisines: ["Beverages"],
      tags: [],
      costForTwo: 10000,
      costForTwoString: "₹100 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 1.600000023841858,
      slugs: {
        restaurant: "dhola-maroo-juice-centre-tonk-central-tonk",
        city: "tonk_per_closed_8june22",
      },
      cityState: "10161",
      address: "Subhash Bazar, Opp SMB Hotel & Restauranat",
      locality: "TONK",
      parentId: 72290,
      unserviceable: true,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: "",
      },
      availability: {
        opened: false,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "193020",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 1.600000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "2.9",
      totalRatings: 100,
      new: false,
    },
  },
  {
    data: {
      type: "F",
      id: "553739",
      name: "Annapurna cafe",
      uuid: "cc1a4bab-7757-4be5-b2ab-87a6ae979c5e",
      city: "10161",
      area: "Central Tonk",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "rnieeze637tuipxmy7xt",
      cuisines: ["Italian", "Beverages", "Fast Food"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "22 MINS",
      lastMileTravel: 2.299999952316284,
      slugs: {
        restaurant: "annapurna-by-b&b-cafe-central-tonk-central-tonk",
        city: "tonk_per_closed_8june22",
      },
      cityState: "10161",
      address:
        "Plot no. 8-9, Agrasen Nagar,Sawai Madhopur road ward 23, Tonk Rajasthan304001",
      locality: "Central Tonk",
      parentId: 34021,
      unserviceable: true,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "distance",
            fee: 1900,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: "",
      },
      availability: {
        opened: false,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "2.2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "553739",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 2.299999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
  },
  {
    data: {
      type: "F",
      id: "214307",
      name: "Pizza Bar fast food",
      uuid: "9fc3f8db-76c4-49ae-aa89-802b40ba7643",
      city: "10161",
      area: "Kali Paltan",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "sagskbcm1be0zuhotxts",
      cuisines: ["Beverages", "Chinese", "Pizzas"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 1.5,
      slugs: {
        restaurant: "pizza-bar-central-tonk-central-tonk",
        city: "tonk_per_closed_8june22",
      },
      cityState: "10161",
      address: "Zila Udhyog Kendra Ke Samne, Tonk",
      locality: "Central Tonk",
      parentId: 158340,
      unserviceable: true,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: "",
      },
      availability: {
        opened: false,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "214307",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 1.5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.6",
      totalRatings: 500,
      new: false,
    },
  },
  {
    data: {
      type: "F",
      id: "411029",
      name: "QMF",
      uuid: "108558b3-d2a4-473c-8b50-3087092f539a",
      city: "10161",
      area: "Central Tonk",
      totalRatingsString: "Too Few Ratings",
      cloudinaryImageId: "raxujihuz5ps2t6zuxdd",
      cuisines: ["Fast Food", "Pizzas", "Bakery"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 21,
      minDeliveryTime: 21,
      maxDeliveryTime: 21,
      slaString: "21 MINS",
      lastMileTravel: 1.600000023841858,
      slugs: {
        restaurant: "qmf-central-tonk-central-tonk",
        city: "tonk_per_closed_8june22",
      },
      cityState: "10161",
      address: "QMF, Raj talkies road ward 17, Tonk Ward 17, Tonk, Rajasthan",
      locality: "Central Tonk",
      parentId: 253129,
      unserviceable: true,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: "distance",
            fee: 1900,
            message: "",
          },
          {
            name: "time",
            fee: 0,
            message: "",
          },
          {
            name: "special",
            fee: 0,
            message: "",
          },
        ],
        totalFees: 1900,
        message: "",
        title: "Delivery Charge",
        amount: "1900",
        icon: "",
      },
      availability: {
        opened: false,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "411029",
        deliveryTime: 21,
        minDeliveryTime: 21,
        maxDeliveryTime: 21,
        lastMileTravel: 1.600000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE_WITH_BANNER",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "--",
      totalRatings: 0,
      new: false,
    },
  },
];

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  deliveryTime,
  costForTwoString,
}) => {
  return (
    <div className="Card">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <div className="Details">
        <p>{cuisines.join(", ")}</p>
        <p>{deliveryTime + " mins"}</p>
        <p>{costForTwoString}</p>
      </div>
      <button>Order Now</button>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <div className="Cards">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} />;
        })}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
