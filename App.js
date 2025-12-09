 import * as React from "react";
 import ReactDOM from "react-dom/client";
 import companyLogo from './images/food.png';



 const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
                  <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0QKqZOcPqTyBnFHq0Vso0rIX49-JoBVSBcwce_jXNebmWyw3HAHGBt4&s" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
                  
            </div>
        </div>

    );

 }
 const resList=[
    {
                    "info": {
                      "id": "243625",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/0be4f55a-55f4-432f-9e76-eea1132525c6_243625.JPG",
                      "locality": "Deccan Gymkhana",
                      "areaName": "Deccan Gymkhana",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Rolls & Wraps",
                        "Fast Food"
                      ],
                      "avgRating": 4.3,
                      "parentId": "547",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "3.9K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 1.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-12-09 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹69"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "4.9K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-b3f9cd4d-147f-4098-8a29-6fbef592dd38"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/kfc-deccan-gymkhana-rest243625",
                      "type": "WEBLINK"
                    }
                  },
                {
                    "info": {
                      "id": "42581",
                      "name": "Burger King",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/b94bd788-14eb-45ab-b1ed-cb984521d7ff_42581.jpg",
                      "locality": "The Pavillion Mall",
                      "areaName": "Shivajinagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Burgers",
                        "American"
                      ],
                      "avgRating": 4.1,
                      "parentId": "166",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "14K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "3.0 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-12-10 02:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Burger.png",
                            "description": "Delivery!"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Burger.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹59"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "--"
                        }
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-b3f9cd4d-147f-4098-8a29-6fbef592dd38"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/burger-king-the-pavillion-mall-shivajinagar-rest42581",
                      "type": "WEBLINK"
                    }
                  },
                {
                    "info": {
                      "id": "243625",
                      "name": "KFC",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/17/0be4f55a-55f4-432f-9e76-eea1132525c6_243625.JPG",
                      "locality": "Deccan Gymkhana",
                      "areaName": "Deccan Gymkhana",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Rolls & Wraps",
                        "Fast Food"
                      ],
                      "avgRating": 4.3,
                      "parentId": "547",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "3.9K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 1.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "1.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-12-09 23:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹69"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.1",
                          "ratingCount": "4.9K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-b3f9cd4d-147f-4098-8a29-6fbef592dd38"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/kfc-deccan-gymkhana-rest243625",
                      "type": "WEBLINK"
                    }
                  },
                {
                    "info": {
                      "id": "11887",
                      "name": "Samudra Veg",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/6/d0807ef7-cc68-4cca-8032-c9eb44c9925e_11887.jpg",
                      "locality": "Erandwane",
                      "areaName": "Erandwane",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "North Indian",
                        "South Indian",
                        "Chinese"
                      ],
                      "avgRating": 4.6,
                      "parentId": "176775",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "52K+",
                      "sla": {
                        "deliveryTime": 34,
                        "lastMileTravel": 2.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-35 mins",
                        "lastMileTravelString": "2.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-12-09 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹199",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "6.9K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-b3f9cd4d-147f-4098-8a29-6fbef592dd38"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/samudra-veg-erandwane-rest11887",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "394784",
                      "name": "Theobroma",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/4/881c6999-84a8-423d-ab88-b72fa88b3c2e_394784.JPG",
                      "locality": "Shivaji Nagar",
                      "areaName": "Shivaji Nagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Bakery",
                        "Desserts"
                      ],
                      "avgRating": 4.6,
                      "parentId": "1040",
                      "avgRatingString": "4.6",
                      "totalRatingsString": "3.1K+",
                      "sla": {
                        "deliveryTime": 30,
                        "lastMileTravel": 2.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "25-30 mins",
                        "lastMileTravelString": "2.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-12-09 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "Rxawards/_CATEGORY-Desserts.png",
                            "description": "Delivery!"
                          },
                          {
                            "imageId": "newg.png",
                            "description": "Gourmet"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "Delivery!",
                                  "imageId": "Rxawards/_CATEGORY-Desserts.png"
                                }
                              },
                              {
                                "attributes": {
                                  "description": "Gourmet",
                                  "imageId": "newg.png"
                                }
                              }
                            ]
                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "15% OFF",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "4.2",
                          "ratingCount": "809"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-b3f9cd4d-147f-4098-8a29-6fbef592dd38"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/theobroma-shivaji-nagar-rest394784",
                      "type": "WEBLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "5624",
                      "name": "Subway",
                      "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/9178c225-800c-4c49-9ce9-f9bd0dbcec91_5624.jpg",
                      "locality": "F.C. Road",
                      "areaName": "Prabhat Road",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "sandwich",
                        "Salads",
                        "wrap",
                        "Healthy Food"
                      ],
                      "avgRating": 4.3,
                      "parentId": "2",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "19K+",
                      "sla": {
                        "deliveryTime": 31,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "30-40 mins",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2025-12-10 04:00:00",
                        "opened": true
                      },
                      "badges": {

                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {

                          },
                          "textBased": {

                          },
                          "textExtendedBadges": {

                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "ITEMS",
                        "subHeader": "AT ₹69"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "lottie": {

                          },
                          "video": {

                          }
                        }
                      },
                      "reviewsSummary": {

                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {

                      },
                      "externalRatings": {
                        "aggregatedRating": {
                          "rating": "3.9",
                          "ratingCount": "1.3K+"
                        },
                        "source": "GOOGLE",
                        "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                      },
                      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                    },
                    "analytics": {
                      "context": "seo-data-b3f9cd4d-147f-4098-8a29-6fbef592dd38"
                    },
                    "cta": {
                      "link": "https://www.swiggy.com/city/pune/subway-f-c-road-prabhat-road-rest5624",
                      "type": "WEBLINK"
                    }
                  }]

 
                  
 const RestaurantCard=(props)=>{
    const {resData} = props;
    const {name, cuisines, avgRating,  costForTwo, cloudinaryImageId} =resData?.info
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0ff"}}>
            <img className="res-logo" alt="img-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}>
            </img>
            <h3>{name}</h3>
            <h3>{cuisines}</h3>
            <h3>{avgRating} stars</h3>
            <h3>Rs {costForTwo}</h3>
            
        
        </div>
    );
 }
 const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
             {
                resList.map((restaurant)=>  (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                ))
             }
                  
              
            </div>
        </div>
    );
 };


 const AppLayout=()=>{
    return(
        <div className="app">
          <Header />
          <Body />
        </div>
    )
 }
 
 const root= ReactDOM.createRoot(document.getElementById("root")); 
 root.render(<AppLayout />);
