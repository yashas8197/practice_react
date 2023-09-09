import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/simple-minimalist-food-bag-restaurant-delivery-service-logo-design-vector_493994-1029.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "8167",
      name: "Chai Point",
      cloudinaryImageId: "lfyrq6ip6cnrupwbzqua",
      locality: "18th Cross Road",
      areaName: "Malleshwaram",
      costForTwo: "₹150 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "South Indian",
        "Punjabi",
        "Chaat",
        "Indian",
        "American",
        "North Indian",
        "Fast Food",
        "Desserts",
        "Cafe",
        "Healthy Food",
        "Home Food",
      ],
      avgRating: 4.6,
      feeDetails: {
        restaurantId: "8167",
        totalFee: 3900,
      },
      parentId: "1607",
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "41 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 22:00:00",
        opened: true,
      },
    },
  },
  {
    info: {
      id: "14417",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId: "btddmf7xu1yve2gkyeu4",
      locality: "Bhashyam Circle",
      areaName: "Rajajinagar",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: "14417",
      },
      parentId: "22",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-bhashyam-circle-rajajinagar-bangalore-14417",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "103786",
      name: "Starbucks Coffee",
      cloudinaryImageId: "4df3497f1460dfd1ecd8125222f6d362",
      locality: "Brigade Orion",
      areaName: "Rajajinagar",
      costForTwo: "₹400 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Bakery",
        "Ice Cream",
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: "103786",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3800,
      },
      parentId: "195515",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 23:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/starbucks-coffee-brigade-orion-rajajinagar-bangalore-103786",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "57086",
      name: "Priyadarshini Veg",
      cloudinaryImageId: "cdvfsusuorofg8dbocg4",
      locality: "LCR Complex",
      areaName: "Yeshwantpur",
      costForTwo: "₹150 for two",
      cuisines: [
        "North Indian",
        "South Indian",
        "Chinese",
        "Fast Food",
        "Desserts",
      ],
      avgRating: 4.5,
      veg: true,
      feeDetails: {
        restaurantId: "57086",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "9726",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/priyadarshini-veg-lcr-complex-yeshwantpur-bangalore-57086",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "9910",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      locality: "MS Ramaiah Nagar",
      areaName: "New BEL Road",
      costForTwo: "₹350 for two",
      cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "9910",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4500,
      },
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "31 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-ms-ramaiah-nagar-new-bel-road-bangalore-9910",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "131606",
      name: "McDonald's",
      cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
      locality: "2nd stage",
      areaName: "Peenya",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "131606",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 01:45:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-2nd-stage-peenya-bangalore-131606",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "6926",
      name: "FreshMenu",
      cloudinaryImageId: "6c4de7b481d3614370e5062b2f33e7d6",
      locality: "Dr. Rajkumar road",
      areaName: "Rajajinagar",
      costForTwo: "₹250 for two",
      cuisines: [
        "Continental",
        "Chinese",
        "Oriental",
        "Asian",
        "Healthy Food",
        "Fast Food",
        "Indian",
        "Desserts",
      ],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "6926",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "398",
      avgRatingString: "3.8",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 00:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "EVERY ITEM",
        subHeader: "@ ₹99",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/freshmenu-dr-rajkumar-road-rajajinagar-bangalore-6926",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "170196",
      name: "Burger King",
      cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      locality: "Orion mall",
      areaName: "Rajajinagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "170196",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 2900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 2900,
      },
      parentId: "166",
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "36 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-orion-mall-rajajinagar-bangalore-170196",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "272241",
      name: "EatFit",
      cloudinaryImageId: "6126c9b45de2cb222405c1af8a321e74",
      locality: "1st Block",
      areaName: "Rajajinagar",
      costForTwo: "₹270 for two",
      cuisines: [
        "Chinese",
        "Healthy Food",
        "Tandoor",
        "Pizzas",
        "North Indian",
        "Thalis",
        "Biryani",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "272241",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "76139",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/eatfit-1st-block-rajajinagar-bangalore-272241",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "27212",
      name: "Thalassery Restaurant",
      cloudinaryImageId: "jfwfzmajl59wpaphrkck",
      locality: "Mathikere",
      areaName: "Yeshwantpur",
      costForTwo: "₹300 for two",
      cuisines: [
        "South Indian",
        "Arabian",
        "Chinese",
        "Kerala",
        "North Indian",
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: "27212",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "14391",
      avgRatingString: "4.0",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/thalassery-restaurant-mathikere-yeshwantpur-bangalore-27212",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "344701",
      name: "Mad Over Donuts",
      cloudinaryImageId: "4e093cbd10bcd8ceff3faefb8fbdf258",
      locality: "Orion Mall",
      areaName: "Rajajinagar",
      costForTwo: "₹200 for two",
      cuisines: ["Desserts", "Sweets", "Bakery"],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "344701",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "611",
      avgRatingString: "4.1",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.3,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "2.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/mad-over-donuts-orion-mall-rajajinagar-bangalore-344701",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "30753",
      name: "Cafe Coffee Day",
      cloudinaryImageId: "b925459fbc1faf59f02f7289eb079a74",
      locality: "Sankey Tank Road",
      areaName: "Malleshwaram",
      costForTwo: "₹300 for two",
      cuisines: [
        "Beverages",
        "Cafe",
        "Snacks",
        "Desserts",
        "Burgers",
        "Ice Cream",
        "Bakery",
        "Fast Food",
      ],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: "30753",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "1",
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 22:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cafe-coffee-day-sankey-tank-road-malleshwaram-bangalore-30753",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "35851",
      name: "Sweet Truth - Cake and Desserts",
      cloudinaryImageId: "4a3b48488e3aa9bda13efd8cfcd95284",
      locality: "14th Main Road",
      areaName: "Rajajinagar",
      costForTwo: "₹450 for two",
      cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "35851",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "4444",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-14th-main-road-rajajinagar-bangalore-35851",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "75878",
      name: "CakeZone",
      cloudinaryImageId: "efc14609d005a8c28828ff1ace41989d",
      locality: "1ST BLOCK",
      areaName: "Dr Rajkumar Road",
      costForTwo: "₹200 for two",
      cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "75878",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3800,
      },
      parentId: "7003",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/cakezone-1st-block-dr-rajkumar-road-bangalore-75878",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "56409",
      name: "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
      cloudinaryImageId: "xwqxwxg0aiaeqlk2ge1o",
      locality: "Basaveshwara Nagar",
      areaName: "Basaveshwara Nagar",
      costForTwo: "₹250 for two",
      cuisines: [
        "Beverages",
        "Desserts",
        "Ice Cream",
        "Waffle",
        "Bakery",
        "Healthy Food",
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: "56409",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3900,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3900,
      },
      parentId: "5655",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/frozen-bottle-milkshakes-desserts-and-ice-cream-basaveshwara-nagar-bangalore-56409",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "9607",
      name: "Brahmins' Thatte Idli",
      cloudinaryImageId: "cwajebccp1ylpr3ksx95",
      locality: "8th Main Road",
      areaName: "Malleswaram",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian"],
      avgRating: 4.5,
      veg: true,
      feeDetails: {
        restaurantId: "9607",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3300,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3300,
      },
      parentId: "1312",
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.7,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 20:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "25% OFF",
        subHeader: "UPTO ₹65",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/brahmins-thatte-idli-8th-main-road-malleswaram-bangalore-9607",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "415734",
      name: "Chaayos Chai+Snacks=Relax",
      cloudinaryImageId: "2beebd3688e63e027ee8a11c1c8a72c8",
      locality: "Sampige Road",
      areaName: "Malleshwaram",
      costForTwo: "₹250 for two",
      cuisines: [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Home Food",
        "Italian",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "Sweets",
      ],
      avgRating: 4.3,
      feeDetails: {
        restaurantId: "415734",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4500,
      },
      parentId: "281782",
      avgRatingString: "4.3",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "40 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 23:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-sampige-road-malleshwaram-bangalore-415734",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "38206",
      name: "KFC",
      cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
      locality: "Vaishnavi Sapphire",
      areaName: "Yeshwantpur",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "38206",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 3800,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 3800,
      },
      parentId: "547",
      avgRatingString: "3.7",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-vaishnavi-sapphire-yeshwantpur-bangalore-38206",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "292664",
      name: "Kwality Walls Frozen Dessert and Ice Cream Shop",
      cloudinaryImageId: "o9vbz7tdbkav0gzdv4yk",
      locality: "3rd block",
      areaName: "Rajajinagar",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Ice Cream", "Ice Cream Cakes"],
      avgRating: 4.6,
      feeDetails: {
        restaurantId: "292664",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4500,
      },
      parentId: "582",
      avgRatingString: "4.6",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-09 22:06:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-3rd-block-rajajinagar-bangalore-292664",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "311248",
      name: "Keventers - Milkshakes & Desserts",
      cloudinaryImageId: "f0e94c984813053f46c214f18ce73d59",
      locality: "Ms Ramaiah Nagar",
      areaName: "New BEL Road",
      costForTwo: "₹200 for two",
      cuisines: ["Beverages", "Ice Cream", "Desserts", "Healthy Food"],
      avgRating: 4,
      veg: true,
      feeDetails: {
        restaurantId: "311248",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 4500,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4500,
      },
      parentId: "268997",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 4.5,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "4.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-10 03:00:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/keventers-milkshakes-and-desserts-ms-ramaiah-nagar-new-bel-road-bangalore-311248",
      type: "WEBLINK",
    },
  },
];

const ResturentCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <ResturentCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
