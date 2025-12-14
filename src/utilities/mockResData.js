const menuData = [
  {
    id: "114716721",
    name: "Margherita",
    category: "Veg Pizza",
    description:
      "Pizza topped with our herb-infused signature pan sauce and mozzarella cheese. A classic treat for all cheese lovers out there! (PAN Per/Med-292 Kcal/100g | TnC-293 Kcal/100g | Stuffed Crust Add : Per: 295 Kcal/Pizza | Med: 448kcal/Pizza| Ultimate Cheese : PER: 250 kcal/Pizza | MED: 375 kcal/Pizza. Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/17/ef2f1053-c8e3-4072-aaa7-4539a67c8554_e8da5065-4d03-47d7-bad7-5413398a1564.jpg_compressed",
    inStock: 1,
    isVeg: 1,
    defaultPrice: 16900,
    ribbon: {},
    showImage: true,
    itemBadge: {},
    badgesV2: {},
    ratings: {
      aggregatedRating: {
        rating: "3.5",
        ratingCount: "300 ratings",
        ratingCountV2: "300",
      },

      itemPriceStrikeOff: true,
      parentId: "31607978",
    },
    analytics: {},
    hideRestaurantDetails: true,
  },
  {
    id: "23372845",
    name: "Veggie Feast",
    category: "Veg Pizza",
    description:
      "Serves 1 | Herbed onion and green capsicum, juicy sweet corn & mozzarella cheese with flavourful pan sauce (PAN Per/Med-269 Kcal/100g | TnC-274 Kcal/100g | Stuffed Crust Add : Per: 295 Kcal/Pizza | Med: 448kcal/Pizza| Ultimate Cheese : PER: 250 kcal/Pizza | MED: 375 kcal/Pizza. Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/17/ee9985e4-828b-4a0e-b99b-656442e80877_7492ef8f-5b57-4ca4-86e6-4a8981c38510.jpg_compressed",
    inStock: 1,
    isVeg: 1,
    variants: {},
    variantsV2: {
      variantGroups: [
        {
          groupId: "46425930",
          name: "Choose your Crust",
          variations: [
            {
              name: "Pan",
              default: 1,
              id: "147126075",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "46425931",
                variationId: "147126078",
              },
            },
            {
              name: "Ultimate Cheese",
              id: "200980830",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "46425931",
                variationId: "200980833",
              },
            },
            {
              name: "Stuffed Crust - Maxx",
              id: "147126076",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "46425931",
                variationId: "147126079",
              },
            },
            {
              name: "Thin n Crispy",
              id: "147126077",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "46425931",
                variationId: "147126080",
              },
            },
          ],
        },
        {
          groupId: "46425931",
          name: "Choose Size",
          variations: [
            {
              name: "Personal",
              price: 334,
              id: "200980833",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 259,
              default: 1,
              id: "147126078",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 588,
              id: "200980834",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 334,
              id: "147126079",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Large.",
              price: 649,
              id: "147126080",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 489,
              id: "147126081",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 588,
              id: "147126082",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
          ],
        },
      ],
      pricingModels: [
        {
          variations: [
            {
              groupId: "46425930",
              variationId: "147126075",
            },
            {
              groupId: "46425931",
              variationId: "147126078",
            },
          ],
          price: 25900,
          addonCombinations: [
            {
              groupId: "169071662",
              addonId: "140544085",
            },
            {
              groupId: "169071662",
              addonId: "101436527",
            },
            {
              groupId: "169071662",
              addonId: "101436531",
            },
            {
              groupId: "169071662",
              addonId: "101436528",
            },
            {
              groupId: "169071659",
              addonId: "135558626",
            },
            {
              groupId: "169071659",
              addonId: "101436548",
            },
            {
              groupId: "169071659",
              addonId: "101436550",
            },
            {
              groupId: "169071659",
              addonId: "101436551",
            },
            {
              groupId: "169071659",
              addonId: "101436552",
            },
            {
              groupId: "169071659",
              addonId: "101436553",
            },
            {
              groupId: "169071659",
              addonId: "101436554",
            },
            {
              groupId: "169071659",
              addonId: "101436555",
            },
            {
              groupId: "169071659",
              addonId: "101436556",
            },
            {
              groupId: "169071659",
              addonId: "101436557",
            },
            {
              groupId: "169071650",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425930",
              variationId: "147126075",
            },
            {
              groupId: "46425931",
              variationId: "147126081",
            },
          ],
          price: 48900,
          addonCombinations: [
            {
              groupId: "169071662",
              addonId: "140544085",
            },
            {
              groupId: "169071662",
              addonId: "101436527",
            },
            {
              groupId: "169071662",
              addonId: "101436531",
            },
            {
              groupId: "169071662",
              addonId: "101436528",
            },
            {
              groupId: "169071652",
              addonId: "117622336",
            },
            {
              groupId: "169071663",
              addonId: "135558627",
            },
            {
              groupId: "169071663",
              addonId: "101436533",
            },
            {
              groupId: "169071663",
              addonId: "101436535",
            },
            {
              groupId: "169071663",
              addonId: "101436536",
            },
            {
              groupId: "169071663",
              addonId: "101436537",
            },
            {
              groupId: "169071663",
              addonId: "101436538",
            },
            {
              groupId: "169071663",
              addonId: "101436539",
            },
            {
              groupId: "169071663",
              addonId: "101436540",
            },
            {
              groupId: "169071663",
              addonId: "101436541",
            },
            {
              groupId: "169071663",
              addonId: "101436542",
            },
            {
              groupId: "169071663",
              addonId: "101436543",
            },
            {
              groupId: "169071663",
              addonId: "101436544",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425930",
              variationId: "200980830",
            },
            {
              groupId: "46425931",
              variationId: "200980833",
            },
          ],
          price: 33400,
          addonCombinations: [
            {
              groupId: "169071662",
              addonId: "140544085",
            },
            {
              groupId: "169071662",
              addonId: "101436527",
            },
            {
              groupId: "169071662",
              addonId: "101436531",
            },
            {
              groupId: "169071662",
              addonId: "101436528",
            },
            {
              groupId: "169071659",
              addonId: "135558626",
            },
            {
              groupId: "169071659",
              addonId: "101436548",
            },
            {
              groupId: "169071659",
              addonId: "101436550",
            },
            {
              groupId: "169071659",
              addonId: "101436551",
            },
            {
              groupId: "169071659",
              addonId: "101436552",
            },
            {
              groupId: "169071659",
              addonId: "101436553",
            },
            {
              groupId: "169071659",
              addonId: "101436554",
            },
            {
              groupId: "169071659",
              addonId: "101436555",
            },
            {
              groupId: "169071659",
              addonId: "101436556",
            },
            {
              groupId: "169071659",
              addonId: "101436557",
            },
            {
              groupId: "169071650",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425930",
              variationId: "200980830",
            },
            {
              groupId: "46425931",
              variationId: "200980834",
            },
          ],
          price: 58800,
          addonCombinations: [
            {
              groupId: "169071662",
              addonId: "140544085",
            },
            {
              groupId: "169071662",
              addonId: "101436527",
            },
            {
              groupId: "169071662",
              addonId: "101436531",
            },
            {
              groupId: "169071662",
              addonId: "101436528",
            },
            {
              groupId: "169071652",
              addonId: "117622336",
            },
            {
              groupId: "169071663",
              addonId: "135558627",
            },
            {
              groupId: "169071663",
              addonId: "101436533",
            },
            {
              groupId: "169071663",
              addonId: "101436535",
            },
            {
              groupId: "169071663",
              addonId: "101436536",
            },
            {
              groupId: "169071663",
              addonId: "101436537",
            },
            {
              groupId: "169071663",
              addonId: "101436538",
            },
            {
              groupId: "169071663",
              addonId: "101436539",
            },
            {
              groupId: "169071663",
              addonId: "101436540",
            },
            {
              groupId: "169071663",
              addonId: "101436541",
            },
            {
              groupId: "169071663",
              addonId: "101436542",
            },
            {
              groupId: "169071663",
              addonId: "101436543",
            },
            {
              groupId: "169071663",
              addonId: "101436544",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425930",
              variationId: "147126076",
            },
            {
              groupId: "46425931",
              variationId: "147126079",
            },
          ],
          price: 33400,
          addonCombinations: [
            {
              groupId: "169071662",
              addonId: "140544085",
            },
            {
              groupId: "169071662",
              addonId: "101436527",
            },
            {
              groupId: "169071662",
              addonId: "101436531",
            },
            {
              groupId: "169071662",
              addonId: "101436528",
            },
            {
              groupId: "169071659",
              addonId: "135558626",
            },
            {
              groupId: "169071659",
              addonId: "101436548",
            },
            {
              groupId: "169071659",
              addonId: "101436550",
            },
            {
              groupId: "169071659",
              addonId: "101436551",
            },
            {
              groupId: "169071659",
              addonId: "101436552",
            },
            {
              groupId: "169071659",
              addonId: "101436553",
            },
            {
              groupId: "169071659",
              addonId: "101436554",
            },
            {
              groupId: "169071659",
              addonId: "101436555",
            },
            {
              groupId: "169071659",
              addonId: "101436556",
            },
            {
              groupId: "169071659",
              addonId: "101436557",
            },
            {
              groupId: "169071650",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425930",
              variationId: "147126076",
            },
            {
              groupId: "46425931",
              variationId: "147126082",
            },
          ],
          price: 58800,
          addonCombinations: [
            {
              groupId: "169071662",
              addonId: "140544085",
            },
            {
              groupId: "169071662",
              addonId: "101436527",
            },
            {
              groupId: "169071662",
              addonId: "101436531",
            },
            {
              groupId: "169071662",
              addonId: "101436528",
            },
            {
              groupId: "169071652",
              addonId: "117622336",
            },
            {
              groupId: "169071663",
              addonId: "135558627",
            },
            {
              groupId: "169071663",
              addonId: "101436533",
            },
            {
              groupId: "169071663",
              addonId: "101436535",
            },
            {
              groupId: "169071663",
              addonId: "101436536",
            },
            {
              groupId: "169071663",
              addonId: "101436537",
            },
            {
              groupId: "169071663",
              addonId: "101436538",
            },
            {
              groupId: "169071663",
              addonId: "101436539",
            },
            {
              groupId: "169071663",
              addonId: "101436540",
            },
            {
              groupId: "169071663",
              addonId: "101436541",
            },
            {
              groupId: "169071663",
              addonId: "101436542",
            },
            {
              groupId: "169071663",
              addonId: "101436543",
            },
            {
              groupId: "169071663",
              addonId: "101436544",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425930",
              variationId: "147126077",
            },
            {
              groupId: "46425931",
              variationId: "147126080",
            },
          ],
          price: 64900,
          addonCombinations: [
            {
              groupId: "169071662",
              addonId: "140544085",
            },
            {
              groupId: "169071662",
              addonId: "101436527",
            },
            {
              groupId: "169071662",
              addonId: "101436531",
            },
            {
              groupId: "169071662",
              addonId: "101436528",
            },
            {
              groupId: "169071654",
              addonId: "114794727",
            },
            {
              groupId: "169071656",
              addonId: "135558623",
            },
            {
              groupId: "169071656",
              addonId: "114794726",
            },
            {
              groupId: "169071656",
              addonId: "114794727",
            },
            {
              groupId: "169071656",
              addonId: "114794728",
            },
            {
              groupId: "169071656",
              addonId: "114794729",
            },
            {
              groupId: "169071656",
              addonId: "114794725",
            },
            {
              groupId: "169071656",
              addonId: "114794737",
            },
            {
              groupId: "169071656",
              addonId: "114794738",
            },
            {
              groupId: "169071656",
              addonId: "114794733",
            },
            {
              groupId: "169071656",
              addonId: "114794734",
            },
            {
              groupId: "169071656",
              addonId: "114794735",
            },
            {
              groupId: "169071656",
              addonId: "114794736",
            },
            {
              groupId: "169071656",
              addonId: "114794731",
            },
          ],
        },
      ],
    },
    addons: [
      {
        groupId: "169071650",
        groupName: "Extra Cheese Topping",
        choices: [
          {
            id: "101436545",
            name: "Cheese",
            price: 6500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 1,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071654",
        groupName: "Extra-Cheese Topping",
        choices: [
          {
            id: "114794727",
            name: "Cheese",
            price: 10900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 1,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071656",
        groupName: "Add More Veg Toppings TNC",
        choices: [
          {
            id: "114794726",
            name: "Black Olives",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794727",
            name: "Cheese",
            price: 10900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794728",
            name: "Capsicum",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794729",
            name: "Herbed Veggies",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794725",
            name: "Jalapeno",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794737",
            name: "Paneer",
            price: 8500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794738",
            name: "Mushroom",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794733",
            name: "Onion",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794734",
            name: "Red Capsicum",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794735",
            name: "Red Paprika",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794736",
            name: "Sweet Corn",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794731",
            name: "Tomato",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "135558623",
            name: "Marinated Paneer",
            price: 8500,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071659",
        groupName: "Add More Veg Toppings Personal",
        choices: [
          {
            id: "135558626",
            name: "Marinated Paneer",
            price: 5500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436548",
            name: "Capsicum",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436550",
            name: "Jalapeno",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436551",
            name: "Mushroom",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436552",
            name: "Onion",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436553",
            name: "Paneer",
            price: 5500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436554",
            name: "Red Paprika",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436555",
            name: "Red Capsicum",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436556",
            name: "Sweet Corn",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436557",
            name: "Tomato",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071662",
        groupName: "Make it a Meal",
        choices: [
          {
            id: "140544085",
            name: "Indi Cheese Pocket - Flat Rs 20 Off",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436527",
            name: "Classic BreadStix : Flat Rs 20 Off",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436531",
            name: "Choco Volcano",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436528",
            name: "Cheese Garlic Bread : Flat Rs 20 Off",
            price: 13900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 4,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071663",
        groupName: "Add More Veg Toppings",
        choices: [
          {
            id: "101436533",
            name: "Black Olives",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436535",
            name: "Capsicum",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436536",
            name: "Herbed Veggies",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436537",
            name: "Jalapeno",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436538",
            name: "Mushroom",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436539",
            name: "Onion",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436540",
            name: "Paneer",
            price: 7500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436541",
            name: "Red Paprika",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436542",
            name: "Red Capsicum",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436543",
            name: "Sweet Corn",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436544",
            name: "Tomato",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "135558627",
            name: "Marinated Paneer",
            price: 7500,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
    ],
    itemAttribute: {
      vegClassifier: "VEG",
      portionSize: "Serves 1",
    },
    defaultPrice: 25900,
    ribbon: {},
    showImage: true,
    offerTags: [
      {
        title: "60% OFF",
        subTitle: "USE TRYNEW",
        textColor: "#DB6742",
        backgroundColor: "#FAE8E3",
        matchText: "SILD",
      },
    ],
    itemBadge: {},
    badgesV2: {},
    ratings: {
      aggregatedRating: {
        rating: "4.8",
        ratingCount: "95 ratings",
        ratingCountV2: "95",
      },
      ratingsPresentationConfig: {
        bgGradient: {
          colours: ["#C8F9E5", "#00FFFFFF"],
          gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
        },
        ratingIconColor: "rating_very_good",
        ratingTextColor: "rating_very_good",
        ratingCountTextColor: "rating_very_good",
        ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
        ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
      },
    },
    itemPriceStrikeOff: true,
    offerIds: ["7073b976-05da-4329-a969-37b559a97efc"],
    parentId: "31609373",
  },
  {
    id: "23372823",
    name: "Tandoori Paneer",
    category: "Veg Pizza",
    description:
      "Serves 1 | It's our signature. Spiced paneer, crunchy onions & green capsicum, spicy red paprika with delicious tandoori sauce and mozzarella cheese! (PAN Per/Med-335 Kcal/100g | TnC-326 Kcal/100g | Stuffed Crust Add : Per: 295 Kcal/Pizza | Med: 448kcal/Pizza| Ultimate Cheese : PER: 250 kcal/Pizza | MED: 375 kcal/Pizza. Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/17/92cfd7cf-0504-4444-befc-ff4aee0486cd_bac2d634-a13d-4cc3-828e-b2ad12dc73c0.jpg_compressed",
    inStock: 1,
    isVeg: 1,
    variants: {},
    variantsV2: {
      variantGroups: [
        {
          groupId: "46425940",
          name: "Choose your Crust",
          variations: [
            {
              name: "Pan",
              default: 1,
              id: "147126115",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "46425941",
                variationId: "147126118",
              },
            },
            {
              name: "Ultimate Cheese",
              id: "200980777",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "46425941",
                variationId: "200980779",
              },
            },
            {
              name: "Stuffed Crust - Maxx",
              id: "147126116",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "46425941",
                variationId: "147126119",
              },
            },
            {
              name: "Thin n Crispy",
              id: "147126117",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "46425941",
                variationId: "147126120",
              },
            },
          ],
        },
        {
          groupId: "46425941",
          name: "Choose Size",
          variations: [
            {
              name: "Personal",
              price: 374,
              id: "200980779",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 299,
              default: 1,
              id: "147126118",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 668,
              id: "200980780",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 374,
              id: "147126119",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Large.",
              price: 749,
              id: "147126120",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 569,
              id: "147126121",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 668,
              id: "147126122",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
          ],
        },
      ],
      pricingModels: [
        {
          variations: [
            {
              groupId: "46425940",
              variationId: "147126115",
            },
            {
              groupId: "46425941",
              variationId: "147126118",
            },
          ],
          price: 29900,
          addonCombinations: [
            {
              groupId: "169071690",
              addonId: "140544085",
            },
            {
              groupId: "169071690",
              addonId: "101436527",
            },
            {
              groupId: "169071690",
              addonId: "101436531",
            },
            {
              groupId: "169071690",
              addonId: "101436528",
            },
            {
              groupId: "169071689",
              addonId: "135558626",
            },
            {
              groupId: "169071689",
              addonId: "101436548",
            },
            {
              groupId: "169071689",
              addonId: "101436550",
            },
            {
              groupId: "169071689",
              addonId: "101436551",
            },
            {
              groupId: "169071689",
              addonId: "101436552",
            },
            {
              groupId: "169071689",
              addonId: "101436553",
            },
            {
              groupId: "169071689",
              addonId: "101436554",
            },
            {
              groupId: "169071689",
              addonId: "101436555",
            },
            {
              groupId: "169071689",
              addonId: "101436556",
            },
            {
              groupId: "169071689",
              addonId: "101436557",
            },
            {
              groupId: "169071685",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425940",
              variationId: "147126115",
            },
            {
              groupId: "46425941",
              variationId: "147126121",
            },
          ],
          price: 56900,
          addonCombinations: [
            {
              groupId: "169071690",
              addonId: "140544085",
            },
            {
              groupId: "169071690",
              addonId: "101436527",
            },
            {
              groupId: "169071690",
              addonId: "101436531",
            },
            {
              groupId: "169071690",
              addonId: "101436528",
            },
            {
              groupId: "169071686",
              addonId: "117622336",
            },
            {
              groupId: "169071691",
              addonId: "135558627",
            },
            {
              groupId: "169071691",
              addonId: "101436533",
            },
            {
              groupId: "169071691",
              addonId: "101436535",
            },
            {
              groupId: "169071691",
              addonId: "101436536",
            },
            {
              groupId: "169071691",
              addonId: "101436537",
            },
            {
              groupId: "169071691",
              addonId: "101436538",
            },
            {
              groupId: "169071691",
              addonId: "101436539",
            },
            {
              groupId: "169071691",
              addonId: "101436540",
            },
            {
              groupId: "169071691",
              addonId: "101436541",
            },
            {
              groupId: "169071691",
              addonId: "101436542",
            },
            {
              groupId: "169071691",
              addonId: "101436543",
            },
            {
              groupId: "169071691",
              addonId: "101436544",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425940",
              variationId: "200980777",
            },
            {
              groupId: "46425941",
              variationId: "200980779",
            },
          ],
          price: 37400,
          addonCombinations: [
            {
              groupId: "169071690",
              addonId: "140544085",
            },
            {
              groupId: "169071690",
              addonId: "101436527",
            },
            {
              groupId: "169071690",
              addonId: "101436531",
            },
            {
              groupId: "169071690",
              addonId: "101436528",
            },
            {
              groupId: "169071689",
              addonId: "135558626",
            },
            {
              groupId: "169071689",
              addonId: "101436548",
            },
            {
              groupId: "169071689",
              addonId: "101436550",
            },
            {
              groupId: "169071689",
              addonId: "101436551",
            },
            {
              groupId: "169071689",
              addonId: "101436552",
            },
            {
              groupId: "169071689",
              addonId: "101436553",
            },
            {
              groupId: "169071689",
              addonId: "101436554",
            },
            {
              groupId: "169071689",
              addonId: "101436555",
            },
            {
              groupId: "169071689",
              addonId: "101436556",
            },
            {
              groupId: "169071689",
              addonId: "101436557",
            },
            {
              groupId: "169071685",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425940",
              variationId: "200980777",
            },
            {
              groupId: "46425941",
              variationId: "200980780",
            },
          ],
          price: 66800,
          addonCombinations: [
            {
              groupId: "169071690",
              addonId: "140544085",
            },
            {
              groupId: "169071690",
              addonId: "101436527",
            },
            {
              groupId: "169071690",
              addonId: "101436531",
            },
            {
              groupId: "169071690",
              addonId: "101436528",
            },
            {
              groupId: "169071686",
              addonId: "117622336",
            },
            {
              groupId: "169071691",
              addonId: "135558627",
            },
            {
              groupId: "169071691",
              addonId: "101436533",
            },
            {
              groupId: "169071691",
              addonId: "101436535",
            },
            {
              groupId: "169071691",
              addonId: "101436536",
            },
            {
              groupId: "169071691",
              addonId: "101436537",
            },
            {
              groupId: "169071691",
              addonId: "101436538",
            },
            {
              groupId: "169071691",
              addonId: "101436539",
            },
            {
              groupId: "169071691",
              addonId: "101436540",
            },
            {
              groupId: "169071691",
              addonId: "101436541",
            },
            {
              groupId: "169071691",
              addonId: "101436542",
            },
            {
              groupId: "169071691",
              addonId: "101436543",
            },
            {
              groupId: "169071691",
              addonId: "101436544",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425940",
              variationId: "147126116",
            },
            {
              groupId: "46425941",
              variationId: "147126119",
            },
          ],
          price: 37400,
          addonCombinations: [
            {
              groupId: "169071690",
              addonId: "140544085",
            },
            {
              groupId: "169071690",
              addonId: "101436527",
            },
            {
              groupId: "169071690",
              addonId: "101436531",
            },
            {
              groupId: "169071690",
              addonId: "101436528",
            },
            {
              groupId: "169071689",
              addonId: "135558626",
            },
            {
              groupId: "169071689",
              addonId: "101436548",
            },
            {
              groupId: "169071689",
              addonId: "101436550",
            },
            {
              groupId: "169071689",
              addonId: "101436551",
            },
            {
              groupId: "169071689",
              addonId: "101436552",
            },
            {
              groupId: "169071689",
              addonId: "101436553",
            },
            {
              groupId: "169071689",
              addonId: "101436554",
            },
            {
              groupId: "169071689",
              addonId: "101436555",
            },
            {
              groupId: "169071689",
              addonId: "101436556",
            },
            {
              groupId: "169071689",
              addonId: "101436557",
            },
            {
              groupId: "169071685",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425940",
              variationId: "147126116",
            },
            {
              groupId: "46425941",
              variationId: "147126122",
            },
          ],
          price: 66800,
          addonCombinations: [
            {
              groupId: "169071690",
              addonId: "140544085",
            },
            {
              groupId: "169071690",
              addonId: "101436527",
            },
            {
              groupId: "169071690",
              addonId: "101436531",
            },
            {
              groupId: "169071690",
              addonId: "101436528",
            },
            {
              groupId: "169071686",
              addonId: "117622336",
            },
            {
              groupId: "169071691",
              addonId: "135558627",
            },
            {
              groupId: "169071691",
              addonId: "101436533",
            },
            {
              groupId: "169071691",
              addonId: "101436535",
            },
            {
              groupId: "169071691",
              addonId: "101436536",
            },
            {
              groupId: "169071691",
              addonId: "101436537",
            },
            {
              groupId: "169071691",
              addonId: "101436538",
            },
            {
              groupId: "169071691",
              addonId: "101436539",
            },
            {
              groupId: "169071691",
              addonId: "101436540",
            },
            {
              groupId: "169071691",
              addonId: "101436541",
            },
            {
              groupId: "169071691",
              addonId: "101436542",
            },
            {
              groupId: "169071691",
              addonId: "101436543",
            },
            {
              groupId: "169071691",
              addonId: "101436544",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425940",
              variationId: "147126117",
            },
            {
              groupId: "46425941",
              variationId: "147126120",
            },
          ],
          price: 74900,
          addonCombinations: [
            {
              groupId: "169071690",
              addonId: "140544085",
            },
            {
              groupId: "169071690",
              addonId: "101436527",
            },
            {
              groupId: "169071690",
              addonId: "101436531",
            },
            {
              groupId: "169071690",
              addonId: "101436528",
            },
            {
              groupId: "169071687",
              addonId: "114794727",
            },
            {
              groupId: "169071688",
              addonId: "135558623",
            },
            {
              groupId: "169071688",
              addonId: "114794726",
            },
            {
              groupId: "169071688",
              addonId: "114794727",
            },
            {
              groupId: "169071688",
              addonId: "114794728",
            },
            {
              groupId: "169071688",
              addonId: "114794729",
            },
            {
              groupId: "169071688",
              addonId: "114794725",
            },
            {
              groupId: "169071688",
              addonId: "114794737",
            },
            {
              groupId: "169071688",
              addonId: "114794738",
            },
            {
              groupId: "169071688",
              addonId: "114794733",
            },
            {
              groupId: "169071688",
              addonId: "114794734",
            },
            {
              groupId: "169071688",
              addonId: "114794735",
            },
            {
              groupId: "169071688",
              addonId: "114794736",
            },
            {
              groupId: "169071688",
              addonId: "114794731",
            },
          ],
        },
      ],
    },
    addons: [
      {
        groupId: "169071685",
        groupName: "Extra Cheese Topping",
        choices: [
          {
            id: "101436545",
            name: "Cheese",
            price: 6500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 1,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071687",
        groupName: "Extra-Cheese Topping",
        choices: [
          {
            id: "114794727",
            name: "Cheese",
            price: 10900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 1,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071688",
        groupName: "Add More Veg Toppings TNC",
        choices: [
          {
            id: "114794726",
            name: "Black Olives",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794727",
            name: "Cheese",
            price: 10900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794728",
            name: "Capsicum",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794729",
            name: "Herbed Veggies",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794725",
            name: "Jalapeno",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794737",
            name: "Paneer",
            price: 8500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794738",
            name: "Mushroom",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794733",
            name: "Onion",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794734",
            name: "Red Capsicum",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794735",
            name: "Red Paprika",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794736",
            name: "Sweet Corn",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794731",
            name: "Tomato",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "135558623",
            name: "Marinated Paneer",
            price: 8500,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071689",
        groupName: "Add More Veg Toppings Personal",
        choices: [
          {
            id: "135558626",
            name: "Marinated Paneer",
            price: 5500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436548",
            name: "Capsicum",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436550",
            name: "Jalapeno",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436551",
            name: "Mushroom",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436552",
            name: "Onion",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436553",
            name: "Paneer",
            price: 5500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436554",
            name: "Red Paprika",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436555",
            name: "Red Capsicum",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436556",
            name: "Sweet Corn",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436557",
            name: "Tomato",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071690",
        groupName: "Make it a Meal",
        choices: [
          {
            id: "140544085",
            name: "Indi Cheese Pocket - Flat Rs 20 Off",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436527",
            name: "Classic BreadStix : Flat Rs 20 Off",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436531",
            name: "Choco Volcano",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436528",
            name: "Cheese Garlic Bread : Flat Rs 20 Off",
            price: 13900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 4,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071691",
        groupName: "Add More Veg Toppings",
        choices: [
          {
            id: "101436533",
            name: "Black Olives",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436535",
            name: "Capsicum",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436536",
            name: "Herbed Veggies",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436537",
            name: "Jalapeno",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436538",
            name: "Mushroom",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436539",
            name: "Onion",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436540",
            name: "Paneer",
            price: 7500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436541",
            name: "Red Paprika",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436542",
            name: "Red Capsicum",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436543",
            name: "Sweet Corn",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436544",
            name: "Tomato",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "135558627",
            name: "Marinated Paneer",
            price: 7500,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
    ],
    itemAttribute: {
      vegClassifier: "VEG",
      portionSize: "Serves 1",
    },
    defaultPrice: 29900,
    ribbon: {},
    showImage: true,
    offerTags: [
      {
        title: "60% OFF",
        subTitle: "USE TRYNEW",
        textColor: "#DB6742",
        backgroundColor: "#FAE8E3",
        matchText: "SILD",
      },
    ],
    itemBadge: {},
    badgesV2: {},
    ratings: {
      aggregatedRating: {
        rating: "4.5",
        ratingCount: "151 ratings",
        ratingCountV2: "151",
      },
      ratingsPresentationConfig: {
        bgGradient: {
          colours: ["#C8F9E5", "#00FFFFFF"],
          gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
        },
        ratingIconColor: "rating_very_good",
        ratingTextColor: "rating_very_good",
        ratingCountTextColor: "rating_very_good",
        ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
        ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
      },
    },
    itemPriceStrikeOff: true,
    offerIds: ["7073b976-05da-4329-a969-37b559a97efc"],
    parentId: "31608985",
  },
  {
    id: "23372824",
    name: "Country Feast",
    category: "Veg Pizza",
    description:
      "Serves 1 | Loaded with herbed onion & green capsicum, sweet corn, tomato with signature pan sauce and mozzarella cheese. It's a feast you can't refuse (PAN Per/Med-244 Kcal/100g | TnC-282 Kcal/100g | Stuffed Crust Add : Per: 295 Kcal/Pizza | Med: 448kcal/Pizza| Ultimate Cheese : PER: 250 kcal/Pizza | MED: 375 kcal/Pizza. Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/16/78bc0268-a19e-4c65-8ea2-4b4626898698_c52e5d95-51c4-4239-92b0-70b1ab93d12f.jpg_compressed",
    inStock: 1,
    isVeg: 1,
    variants: {},
    variantsV2: {
      variantGroups: [
        {
          groupId: "46425944",
          name: "Choose your Crust",
          variations: [
            {
              name: "Pan",
              default: 1,
              id: "147126131",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "46425945",
                variationId: "147126134",
              },
            },
            {
              name: "Ultimate Cheese",
              id: "200981008",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "46425945",
                variationId: "200981009",
              },
            },
            {
              name: "Stuffed Crust - Maxx",
              id: "147126132",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "46425945",
                variationId: "147126135",
              },
            },
            {
              name: "Thin n Crispy",
              id: "147126133",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "46425945",
                variationId: "147126136",
              },
            },
          ],
        },
        {
          groupId: "46425945",
          name: "Choose Size",
          variations: [
            {
              name: "Personal",
              price: 374,
              id: "200981009",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 299,
              default: 1,
              id: "147126134",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 668,
              id: "200981010",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 374,
              id: "147126135",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Large.",
              price: 749,
              id: "147126136",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 569,
              id: "147126137",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 668,
              id: "147126138",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
          ],
        },
      ],
      pricingModels: [
        {
          variations: [
            {
              groupId: "46425944",
              variationId: "147126131",
            },
            {
              groupId: "46425945",
              variationId: "147126134",
            },
          ],
          price: 29900,
          addonCombinations: [
            {
              groupId: "169071704",
              addonId: "140544085",
            },
            {
              groupId: "169071704",
              addonId: "101436527",
            },
            {
              groupId: "169071704",
              addonId: "101436531",
            },
            {
              groupId: "169071704",
              addonId: "101436528",
            },
            {
              groupId: "169071703",
              addonId: "135558626",
            },
            {
              groupId: "169071703",
              addonId: "101436548",
            },
            {
              groupId: "169071703",
              addonId: "101436550",
            },
            {
              groupId: "169071703",
              addonId: "101436551",
            },
            {
              groupId: "169071703",
              addonId: "101436552",
            },
            {
              groupId: "169071703",
              addonId: "101436553",
            },
            {
              groupId: "169071703",
              addonId: "101436554",
            },
            {
              groupId: "169071703",
              addonId: "101436555",
            },
            {
              groupId: "169071703",
              addonId: "101436556",
            },
            {
              groupId: "169071703",
              addonId: "101436557",
            },
            {
              groupId: "169071699",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425944",
              variationId: "147126131",
            },
            {
              groupId: "46425945",
              variationId: "147126137",
            },
          ],
          price: 56900,
          addonCombinations: [
            {
              groupId: "169071704",
              addonId: "140544085",
            },
            {
              groupId: "169071704",
              addonId: "101436527",
            },
            {
              groupId: "169071704",
              addonId: "101436531",
            },
            {
              groupId: "169071704",
              addonId: "101436528",
            },
            {
              groupId: "169071700",
              addonId: "117622336",
            },
            {
              groupId: "169071705",
              addonId: "135558627",
            },
            {
              groupId: "169071705",
              addonId: "101436533",
            },
            {
              groupId: "169071705",
              addonId: "101436535",
            },
            {
              groupId: "169071705",
              addonId: "101436536",
            },
            {
              groupId: "169071705",
              addonId: "101436537",
            },
            {
              groupId: "169071705",
              addonId: "101436538",
            },
            {
              groupId: "169071705",
              addonId: "101436539",
            },
            {
              groupId: "169071705",
              addonId: "101436540",
            },
            {
              groupId: "169071705",
              addonId: "101436541",
            },
            {
              groupId: "169071705",
              addonId: "101436542",
            },
            {
              groupId: "169071705",
              addonId: "101436543",
            },
            {
              groupId: "169071705",
              addonId: "101436544",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425944",
              variationId: "200981008",
            },
            {
              groupId: "46425945",
              variationId: "200981009",
            },
          ],
          price: 37400,
          addonCombinations: [
            {
              groupId: "169071704",
              addonId: "140544085",
            },
            {
              groupId: "169071704",
              addonId: "101436527",
            },
            {
              groupId: "169071704",
              addonId: "101436531",
            },
            {
              groupId: "169071704",
              addonId: "101436528",
            },
            {
              groupId: "169071703",
              addonId: "135558626",
            },
            {
              groupId: "169071703",
              addonId: "101436548",
            },
            {
              groupId: "169071703",
              addonId: "101436550",
            },
            {
              groupId: "169071703",
              addonId: "101436551",
            },
            {
              groupId: "169071703",
              addonId: "101436552",
            },
            {
              groupId: "169071703",
              addonId: "101436553",
            },
            {
              groupId: "169071703",
              addonId: "101436554",
            },
            {
              groupId: "169071703",
              addonId: "101436555",
            },
            {
              groupId: "169071703",
              addonId: "101436556",
            },
            {
              groupId: "169071703",
              addonId: "101436557",
            },
            {
              groupId: "169071699",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425944",
              variationId: "200981008",
            },
            {
              groupId: "46425945",
              variationId: "200981010",
            },
          ],
          price: 66800,
          addonCombinations: [
            {
              groupId: "169071704",
              addonId: "140544085",
            },
            {
              groupId: "169071704",
              addonId: "101436527",
            },
            {
              groupId: "169071704",
              addonId: "101436531",
            },
            {
              groupId: "169071704",
              addonId: "101436528",
            },
            {
              groupId: "169071700",
              addonId: "117622336",
            },
            {
              groupId: "169071705",
              addonId: "135558627",
            },
            {
              groupId: "169071705",
              addonId: "101436533",
            },
            {
              groupId: "169071705",
              addonId: "101436535",
            },
            {
              groupId: "169071705",
              addonId: "101436536",
            },
            {
              groupId: "169071705",
              addonId: "101436537",
            },
            {
              groupId: "169071705",
              addonId: "101436538",
            },
            {
              groupId: "169071705",
              addonId: "101436539",
            },
            {
              groupId: "169071705",
              addonId: "101436540",
            },
            {
              groupId: "169071705",
              addonId: "101436541",
            },
            {
              groupId: "169071705",
              addonId: "101436542",
            },
            {
              groupId: "169071705",
              addonId: "101436543",
            },
            {
              groupId: "169071705",
              addonId: "101436544",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425944",
              variationId: "147126132",
            },
            {
              groupId: "46425945",
              variationId: "147126135",
            },
          ],
          price: 37400,
          addonCombinations: [
            {
              groupId: "169071704",
              addonId: "140544085",
            },
            {
              groupId: "169071704",
              addonId: "101436527",
            },
            {
              groupId: "169071704",
              addonId: "101436531",
            },
            {
              groupId: "169071704",
              addonId: "101436528",
            },
            {
              groupId: "169071703",
              addonId: "135558626",
            },
            {
              groupId: "169071703",
              addonId: "101436548",
            },
            {
              groupId: "169071703",
              addonId: "101436550",
            },
            {
              groupId: "169071703",
              addonId: "101436551",
            },
            {
              groupId: "169071703",
              addonId: "101436552",
            },
            {
              groupId: "169071703",
              addonId: "101436553",
            },
            {
              groupId: "169071703",
              addonId: "101436554",
            },
            {
              groupId: "169071703",
              addonId: "101436555",
            },
            {
              groupId: "169071703",
              addonId: "101436556",
            },
            {
              groupId: "169071703",
              addonId: "101436557",
            },
            {
              groupId: "169071699",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425944",
              variationId: "147126132",
            },
            {
              groupId: "46425945",
              variationId: "147126138",
            },
          ],
          price: 66800,
          addonCombinations: [
            {
              groupId: "169071704",
              addonId: "140544085",
            },
            {
              groupId: "169071704",
              addonId: "101436527",
            },
            {
              groupId: "169071704",
              addonId: "101436531",
            },
            {
              groupId: "169071704",
              addonId: "101436528",
            },
            {
              groupId: "169071700",
              addonId: "117622336",
            },
            {
              groupId: "169071705",
              addonId: "135558627",
            },
            {
              groupId: "169071705",
              addonId: "101436533",
            },
            {
              groupId: "169071705",
              addonId: "101436535",
            },
            {
              groupId: "169071705",
              addonId: "101436536",
            },
            {
              groupId: "169071705",
              addonId: "101436537",
            },
            {
              groupId: "169071705",
              addonId: "101436538",
            },
            {
              groupId: "169071705",
              addonId: "101436539",
            },
            {
              groupId: "169071705",
              addonId: "101436540",
            },
            {
              groupId: "169071705",
              addonId: "101436541",
            },
            {
              groupId: "169071705",
              addonId: "101436542",
            },
            {
              groupId: "169071705",
              addonId: "101436543",
            },
            {
              groupId: "169071705",
              addonId: "101436544",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425944",
              variationId: "147126133",
            },
            {
              groupId: "46425945",
              variationId: "147126136",
            },
          ],
          price: 74900,
          addonCombinations: [
            {
              groupId: "169071704",
              addonId: "140544085",
            },
            {
              groupId: "169071704",
              addonId: "101436527",
            },
            {
              groupId: "169071704",
              addonId: "101436531",
            },
            {
              groupId: "169071704",
              addonId: "101436528",
            },
            {
              groupId: "169071701",
              addonId: "114794727",
            },
            {
              groupId: "169071702",
              addonId: "135558623",
            },
            {
              groupId: "169071702",
              addonId: "114794726",
            },
            {
              groupId: "169071702",
              addonId: "114794727",
            },
            {
              groupId: "169071702",
              addonId: "114794728",
            },
            {
              groupId: "169071702",
              addonId: "114794729",
            },
            {
              groupId: "169071702",
              addonId: "114794725",
            },
            {
              groupId: "169071702",
              addonId: "114794737",
            },
            {
              groupId: "169071702",
              addonId: "114794738",
            },
            {
              groupId: "169071702",
              addonId: "114794733",
            },
            {
              groupId: "169071702",
              addonId: "114794734",
            },
            {
              groupId: "169071702",
              addonId: "114794735",
            },
            {
              groupId: "169071702",
              addonId: "114794736",
            },
            {
              groupId: "169071702",
              addonId: "114794731",
            },
          ],
        },
      ],
    },
    addons: [
      {
        groupId: "169071699",
        groupName: "Extra Cheese Topping",
        choices: [
          {
            id: "101436545",
            name: "Cheese",
            price: 6500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 1,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071701",
        groupName: "Extra-Cheese Topping",
        choices: [
          {
            id: "114794727",
            name: "Cheese",
            price: 10900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 1,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071702",
        groupName: "Add More Veg Toppings TNC",
        choices: [
          {
            id: "114794726",
            name: "Black Olives",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794727",
            name: "Cheese",
            price: 10900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794728",
            name: "Capsicum",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794729",
            name: "Herbed Veggies",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794725",
            name: "Jalapeno",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794737",
            name: "Paneer",
            price: 8500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794738",
            name: "Mushroom",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794733",
            name: "Onion",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794734",
            name: "Red Capsicum",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794735",
            name: "Red Paprika",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794736",
            name: "Sweet Corn",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794731",
            name: "Tomato",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "135558623",
            name: "Marinated Paneer",
            price: 8500,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071703",
        groupName: "Add More Veg Toppings Personal",
        choices: [
          {
            id: "135558626",
            name: "Marinated Paneer",
            price: 5500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436548",
            name: "Capsicum",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436550",
            name: "Jalapeno",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436551",
            name: "Mushroom",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436552",
            name: "Onion",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436553",
            name: "Paneer",
            price: 5500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436554",
            name: "Red Paprika",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436555",
            name: "Red Capsicum",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436556",
            name: "Sweet Corn",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436557",
            name: "Tomato",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071704",
        groupName: "Make it a Meal",
        choices: [
          {
            id: "140544085",
            name: "Indi Cheese Pocket - Flat Rs 20 Off",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436527",
            name: "Classic BreadStix : Flat Rs 20 Off",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436531",
            name: "Choco Volcano",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436528",
            name: "Cheese Garlic Bread : Flat Rs 20 Off",
            price: 13900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 4,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071705",
        groupName: "Add More Veg Toppings",
        choices: [
          {
            id: "101436533",
            name: "Black Olives",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436535",
            name: "Capsicum",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436536",
            name: "Herbed Veggies",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436537",
            name: "Jalapeno",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436538",
            name: "Mushroom",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436539",
            name: "Onion",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436540",
            name: "Paneer",
            price: 7500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436541",
            name: "Red Paprika",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436542",
            name: "Red Capsicum",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436543",
            name: "Sweet Corn",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436544",
            name: "Tomato",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "135558627",
            name: "Marinated Paneer",
            price: 7500,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
    ],
    itemAttribute: {
      vegClassifier: "VEG",
      portionSize: "Serves 1",
    },
    defaultPrice: 29900,
    ribbon: {},
    showImage: true,
    offerTags: [
      {
        title: "60% OFF",
        subTitle: "USE TRYNEW",
        textColor: "#DB6742",
        backgroundColor: "#FAE8E3",
        matchText: "SILD",
      },
    ],
    itemBadge: {},
    badgesV2: {},
    ratings: {
      aggregatedRating: {
        rating: "4.7",
        ratingCount: "48 ratings",
        ratingCountV2: "48",
      },
      ratingsPresentationConfig: {
        bgGradient: {
          colours: ["#C8F9E5", "#00FFFFFF"],
          gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
        },
        ratingIconColor: "rating_very_good",
        ratingTextColor: "rating_very_good",
        ratingCountTextColor: "rating_very_good",
        ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
        ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
      },
    },
    itemPriceStrikeOff: true,
    offerIds: ["7073b976-05da-4329-a969-37b559a97efc"],
    parentId: "31607392",
  },
  {
    id: "114716716",
    name: "Veggie Supreme",
    category: "Veg Pizza",
    description:
      "Serves 1 | A supreme combination of black olives, green capsicum, mushroom, onion, spicy red paprika & juicy sweet corn with flavourful pan sauce and mozzarella cheese. (PAN Per/Med-254 Kcal/100g | TnC-258 Kcal/100g | Stuffed Crust Add : Per: 295 Kcal/Pizza | Med: 448kcal/Pizza| Ultimate Cheese : PER: 250 kcal/Pizza | MED: 375 kcal/Pizza. Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/17/2f6b03bf-3bb0-40cd-a5b8-7f0cfdf21998_7cc4fe8f-d5f8-44ed-ada9-0a719fc4d89f.jpg_compressed",
    inStock: 1,
    isVeg: 1,
    variants: {},
    variantsV2: {
      variantGroups: [
        {
          groupId: "46425948",
          name: "Choose your Crust",
          variations: [
            {
              name: "Pan",
              default: 1,
              id: "147126147",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "46425949",
                variationId: "147126150",
              },
            },
            {
              name: "Ultimate Cheese",
              id: "200981021",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "46425949",
                variationId: "200981024",
              },
            },
            {
              name: "Stuffed Crust - Maxx",
              id: "147126148",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "46425949",
                variationId: "147126151",
              },
            },
            {
              name: "Thin n Crispy",
              id: "147126149",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "46425949",
                variationId: "147126152",
              },
            },
          ],
        },
        {
          groupId: "46425949",
          name: "Choose Size",
          variations: [
            {
              name: "Personal",
              price: 434,
              id: "200981024",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 359,
              default: 1,
              id: "147126150",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 738,
              id: "200981025",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 434,
              id: "147126151",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Large.",
              price: 849,
              id: "147126152",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 639,
              id: "147126153",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 738,
              id: "147126154",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
          ],
        },
      ],
      pricingModels: [
        {
          variations: [
            {
              groupId: "46425948",
              variationId: "147126147",
            },
            {
              groupId: "46425949",
              variationId: "147126150",
            },
          ],
          price: 35900,
          addonCombinations: [
            {
              groupId: "169071718",
              addonId: "140544085",
            },
            {
              groupId: "169071718",
              addonId: "101436527",
            },
            {
              groupId: "169071718",
              addonId: "101436531",
            },
            {
              groupId: "169071718",
              addonId: "101436528",
            },
            {
              groupId: "169071717",
              addonId: "135558626",
            },
            {
              groupId: "169071717",
              addonId: "101436548",
            },
            {
              groupId: "169071717",
              addonId: "101436550",
            },
            {
              groupId: "169071717",
              addonId: "101436551",
            },
            {
              groupId: "169071717",
              addonId: "101436552",
            },
            {
              groupId: "169071717",
              addonId: "101436553",
            },
            {
              groupId: "169071717",
              addonId: "101436554",
            },
            {
              groupId: "169071717",
              addonId: "101436555",
            },
            {
              groupId: "169071717",
              addonId: "101436556",
            },
            {
              groupId: "169071717",
              addonId: "101436557",
            },
            {
              groupId: "169071713",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425948",
              variationId: "147126147",
            },
            {
              groupId: "46425949",
              variationId: "147126153",
            },
          ],
          price: 63900,
          addonCombinations: [
            {
              groupId: "169071718",
              addonId: "140544085",
            },
            {
              groupId: "169071718",
              addonId: "101436527",
            },
            {
              groupId: "169071718",
              addonId: "101436531",
            },
            {
              groupId: "169071718",
              addonId: "101436528",
            },
            {
              groupId: "169071714",
              addonId: "117622336",
            },
            {
              groupId: "169071720",
              addonId: "135558627",
            },
            {
              groupId: "169071720",
              addonId: "101436533",
            },
            {
              groupId: "169071720",
              addonId: "101436535",
            },
            {
              groupId: "169071720",
              addonId: "101436536",
            },
            {
              groupId: "169071720",
              addonId: "101436537",
            },
            {
              groupId: "169071720",
              addonId: "101436538",
            },
            {
              groupId: "169071720",
              addonId: "101436539",
            },
            {
              groupId: "169071720",
              addonId: "101436540",
            },
            {
              groupId: "169071720",
              addonId: "101436541",
            },
            {
              groupId: "169071720",
              addonId: "101436542",
            },
            {
              groupId: "169071720",
              addonId: "101436543",
            },
            {
              groupId: "169071720",
              addonId: "101436544",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425948",
              variationId: "200981021",
            },
            {
              groupId: "46425949",
              variationId: "200981024",
            },
          ],
          price: 43400,
          addonCombinations: [
            {
              groupId: "169071718",
              addonId: "140544085",
            },
            {
              groupId: "169071718",
              addonId: "101436527",
            },
            {
              groupId: "169071718",
              addonId: "101436531",
            },
            {
              groupId: "169071718",
              addonId: "101436528",
            },
            {
              groupId: "169071717",
              addonId: "135558626",
            },
            {
              groupId: "169071717",
              addonId: "101436548",
            },
            {
              groupId: "169071717",
              addonId: "101436550",
            },
            {
              groupId: "169071717",
              addonId: "101436551",
            },
            {
              groupId: "169071717",
              addonId: "101436552",
            },
            {
              groupId: "169071717",
              addonId: "101436553",
            },
            {
              groupId: "169071717",
              addonId: "101436554",
            },
            {
              groupId: "169071717",
              addonId: "101436555",
            },
            {
              groupId: "169071717",
              addonId: "101436556",
            },
            {
              groupId: "169071717",
              addonId: "101436557",
            },
            {
              groupId: "169071713",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425948",
              variationId: "200981021",
            },
            {
              groupId: "46425949",
              variationId: "200981025",
            },
          ],
          price: 73800,
          addonCombinations: [
            {
              groupId: "169071718",
              addonId: "140544085",
            },
            {
              groupId: "169071718",
              addonId: "101436527",
            },
            {
              groupId: "169071718",
              addonId: "101436531",
            },
            {
              groupId: "169071718",
              addonId: "101436528",
            },
            {
              groupId: "169071714",
              addonId: "117622336",
            },
            {
              groupId: "169071720",
              addonId: "135558627",
            },
            {
              groupId: "169071720",
              addonId: "101436533",
            },
            {
              groupId: "169071720",
              addonId: "101436535",
            },
            {
              groupId: "169071720",
              addonId: "101436536",
            },
            {
              groupId: "169071720",
              addonId: "101436537",
            },
            {
              groupId: "169071720",
              addonId: "101436538",
            },
            {
              groupId: "169071720",
              addonId: "101436539",
            },
            {
              groupId: "169071720",
              addonId: "101436540",
            },
            {
              groupId: "169071720",
              addonId: "101436541",
            },
            {
              groupId: "169071720",
              addonId: "101436542",
            },
            {
              groupId: "169071720",
              addonId: "101436543",
            },
            {
              groupId: "169071720",
              addonId: "101436544",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425948",
              variationId: "147126148",
            },
            {
              groupId: "46425949",
              variationId: "147126151",
            },
          ],
          price: 43400,
          addonCombinations: [
            {
              groupId: "169071718",
              addonId: "140544085",
            },
            {
              groupId: "169071718",
              addonId: "101436527",
            },
            {
              groupId: "169071718",
              addonId: "101436531",
            },
            {
              groupId: "169071718",
              addonId: "101436528",
            },
            {
              groupId: "169071717",
              addonId: "135558626",
            },
            {
              groupId: "169071717",
              addonId: "101436548",
            },
            {
              groupId: "169071717",
              addonId: "101436550",
            },
            {
              groupId: "169071717",
              addonId: "101436551",
            },
            {
              groupId: "169071717",
              addonId: "101436552",
            },
            {
              groupId: "169071717",
              addonId: "101436553",
            },
            {
              groupId: "169071717",
              addonId: "101436554",
            },
            {
              groupId: "169071717",
              addonId: "101436555",
            },
            {
              groupId: "169071717",
              addonId: "101436556",
            },
            {
              groupId: "169071717",
              addonId: "101436557",
            },
            {
              groupId: "169071713",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425948",
              variationId: "147126148",
            },
            {
              groupId: "46425949",
              variationId: "147126154",
            },
          ],
          price: 73800,
          addonCombinations: [
            {
              groupId: "169071718",
              addonId: "140544085",
            },
            {
              groupId: "169071718",
              addonId: "101436527",
            },
            {
              groupId: "169071718",
              addonId: "101436531",
            },
            {
              groupId: "169071718",
              addonId: "101436528",
            },
            {
              groupId: "169071714",
              addonId: "117622336",
            },
            {
              groupId: "169071720",
              addonId: "135558627",
            },
            {
              groupId: "169071720",
              addonId: "101436533",
            },
            {
              groupId: "169071720",
              addonId: "101436535",
            },
            {
              groupId: "169071720",
              addonId: "101436536",
            },
            {
              groupId: "169071720",
              addonId: "101436537",
            },
            {
              groupId: "169071720",
              addonId: "101436538",
            },
            {
              groupId: "169071720",
              addonId: "101436539",
            },
            {
              groupId: "169071720",
              addonId: "101436540",
            },
            {
              groupId: "169071720",
              addonId: "101436541",
            },
            {
              groupId: "169071720",
              addonId: "101436542",
            },
            {
              groupId: "169071720",
              addonId: "101436543",
            },
            {
              groupId: "169071720",
              addonId: "101436544",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "46425948",
              variationId: "147126149",
            },
            {
              groupId: "46425949",
              variationId: "147126152",
            },
          ],
          price: 84900,
          addonCombinations: [
            {
              groupId: "169071718",
              addonId: "140544085",
            },
            {
              groupId: "169071718",
              addonId: "101436527",
            },
            {
              groupId: "169071718",
              addonId: "101436531",
            },
            {
              groupId: "169071718",
              addonId: "101436528",
            },
            {
              groupId: "169071715",
              addonId: "114794727",
            },
            {
              groupId: "169071716",
              addonId: "135558623",
            },
            {
              groupId: "169071716",
              addonId: "114794726",
            },
            {
              groupId: "169071716",
              addonId: "114794727",
            },
            {
              groupId: "169071716",
              addonId: "114794728",
            },
            {
              groupId: "169071716",
              addonId: "114794729",
            },
            {
              groupId: "169071716",
              addonId: "114794725",
            },
            {
              groupId: "169071716",
              addonId: "114794737",
            },
            {
              groupId: "169071716",
              addonId: "114794738",
            },
            {
              groupId: "169071716",
              addonId: "114794733",
            },
            {
              groupId: "169071716",
              addonId: "114794734",
            },
            {
              groupId: "169071716",
              addonId: "114794735",
            },
            {
              groupId: "169071716",
              addonId: "114794736",
            },
            {
              groupId: "169071716",
              addonId: "114794731",
            },
          ],
        },
      ],
    },
    addons: [
      {
        groupId: "169071713",
        groupName: "Extra Cheese Topping",
        choices: [
          {
            id: "101436545",
            name: "Cheese",
            price: 6500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 1,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071715",
        groupName: "Extra-Cheese Topping",
        choices: [
          {
            id: "114794727",
            name: "Cheese",
            price: 10900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 1,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071716",
        groupName: "Add More Veg Toppings TNC",
        choices: [
          {
            id: "114794726",
            name: "Black Olives",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794727",
            name: "Cheese",
            price: 10900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794728",
            name: "Capsicum",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794729",
            name: "Herbed Veggies",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794725",
            name: "Jalapeno",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794737",
            name: "Paneer",
            price: 8500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794738",
            name: "Mushroom",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794733",
            name: "Onion",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794734",
            name: "Red Capsicum",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794735",
            name: "Red Paprika",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794736",
            name: "Sweet Corn",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794731",
            name: "Tomato",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "135558623",
            name: "Marinated Paneer",
            price: 8500,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071717",
        groupName: "Add More Veg Toppings Personal",
        choices: [
          {
            id: "135558626",
            name: "Marinated Paneer",
            price: 5500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436548",
            name: "Capsicum",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436550",
            name: "Jalapeno",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436551",
            name: "Mushroom",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436552",
            name: "Onion",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436553",
            name: "Paneer",
            price: 5500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436554",
            name: "Red Paprika",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436555",
            name: "Red Capsicum",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436556",
            name: "Sweet Corn",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436557",
            name: "Tomato",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071718",
        groupName: "Make it a Meal",
        choices: [
          {
            id: "140544085",
            name: "Indi Cheese Pocket - Flat Rs 20 Off",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436527",
            name: "Classic BreadStix : Flat Rs 20 Off",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436531",
            name: "Choco Volcano",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436528",
            name: "Cheese Garlic Bread : Flat Rs 20 Off",
            price: 13900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 4,
        maxFreeAddons: -1,
      },
      {
        groupId: "169071720",
        groupName: "Add More Veg Toppings",
        choices: [
          {
            id: "101436533",
            name: "Black Olives",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436535",
            name: "Capsicum",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436536",
            name: "Herbed Veggies",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436537",
            name: "Jalapeno",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436538",
            name: "Mushroom",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436539",
            name: "Onion",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436540",
            name: "Paneer",
            price: 7500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436541",
            name: "Red Paprika",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436542",
            name: "Red Capsicum",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436543",
            name: "Sweet Corn",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436544",
            name: "Tomato",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "135558627",
            name: "Marinated Paneer",
            price: 7500,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
    ],
    itemAttribute: {
      vegClassifier: "VEG",
      portionSize: "Serves 1",
    },
    defaultPrice: 35900,
    ribbon: {},
    showImage: true,
    itemBadge: {},
    badgesV2: {},
    ratings: {
      aggregatedRating: {
        rating: "4.2",
        ratingCount: "103 ratings",
        ratingCountV2: "103",
      },
      ratingsPresentationConfig: {
        bgGradient: {
          colours: ["#C8F9E5", "#00FFFFFF"],
          gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
        },
        ratingIconColor: "rating_very_good",
        ratingTextColor: "rating_very_good",
        ratingCountTextColor: "rating_very_good",
        ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
        ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
      },
    },
    itemPriceStrikeOff: true,
    parentId: "31609543",
  },
  {
    id: "23372830",
    name: "Chicken Sausage",
    category: "Non Veg Pizza",
    description:
      "Serves 1 | Pizza topped with chicken n cheese sausages & crunchy onions, flavourful pan sauce and mozzarella cheese (PAN Per/Med-310 Kcal/100g | TnC-312 Kcal/100g | Stuffed Crust Add : Per: 295 Kcal/Pizza | Med: 448kcal/Pizza| Ultimate Cheese : PER: 250 kcal/Pizza | MED: 375 kcal/Pizza| Stuff Crust Chicken Seekh Kebab Add : Per: 389 kcal/Pizza | Med: 614 Kcal/Pizza. Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/16/4b4ded4e-1e01-4d35-bebd-b055a22cb43a_2b6ef11b-6134-4744-87d5-9f49a9042d50.jpg_compressed",
    inStock: 1,
    variants: {},
    variantsV2: {
      variantGroups: [
        {
          groupId: "55796002",
          name: "Choose your Crust",
          variations: [
            {
              name: "Pan",
              default: 1,
              id: "173628044",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55796003",
                variationId: "173628050",
              },
            },
            {
              name: "Stuffed Crust - Maxx",
              id: "173628046",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55796003",
                variationId: "173628051",
              },
            },
            {
              name: "Ultimate Cheese",
              id: "200980470",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55796003",
                variationId: "200980471",
              },
            },
            {
              name: "Stuffed Crust - Chicken Seekh Kebab",
              id: "173628048",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55796003",
                variationId: "173628052",
              },
            },
            {
              name: "Thin n Crispy",
              id: "173628049",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55796003",
                variationId: "173628053",
              },
            },
          ],
        },
        {
          groupId: "55796003",
          name: "Choose Size",
          variations: [
            {
              name: "Personal",
              price: 324,
              id: "200980471",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 249,
              default: 1,
              id: "173628050",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 324,
              id: "173628051",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 588,
              id: "200980472",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 324,
              id: "173628052",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Large.",
              price: 649,
              id: "173628053",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 489,
              id: "173628054",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 588,
              id: "173628055",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 588,
              id: "173628056",
              inStock: 1,
              isEnabled: 1,
            },
          ],
        },
      ],
      pricingModels: [
        {
          variations: [
            {
              groupId: "55796002",
              variationId: "173628044",
            },
            {
              groupId: "55796003",
              variationId: "173628050",
            },
          ],
          price: 24900,
          addonCombinations: [
            {
              groupId: "204687663",
              addonId: "140544085",
            },
            {
              groupId: "204687663",
              addonId: "101436527",
            },
            {
              groupId: "204687663",
              addonId: "101436531",
            },
            {
              groupId: "204687663",
              addonId: "101436528",
            },
            {
              groupId: "204687657",
              addonId: "135558626",
            },
            {
              groupId: "204687657",
              addonId: "101436548",
            },
            {
              groupId: "204687657",
              addonId: "101436550",
            },
            {
              groupId: "204687657",
              addonId: "101436551",
            },
            {
              groupId: "204687657",
              addonId: "101436552",
            },
            {
              groupId: "204687657",
              addonId: "101436553",
            },
            {
              groupId: "204687657",
              addonId: "101436554",
            },
            {
              groupId: "204687657",
              addonId: "101436555",
            },
            {
              groupId: "204687657",
              addonId: "101436556",
            },
            {
              groupId: "204687657",
              addonId: "101436557",
            },
            {
              groupId: "204687661",
              addonId: "135558624",
            },
            {
              groupId: "204687661",
              addonId: "134234088",
            },
            {
              groupId: "204687661",
              addonId: "134234100",
            },
            {
              groupId: "204687661",
              addonId: "134234098",
            },
            {
              groupId: "204687661",
              addonId: "134234092",
            },
            {
              groupId: "204687661",
              addonId: "134234104",
            },
            {
              groupId: "204687661",
              addonId: "134234097",
            },
            {
              groupId: "204687661",
              addonId: "134234089",
            },
            {
              groupId: "204687635",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55796002",
              variationId: "173628044",
            },
            {
              groupId: "55796003",
              variationId: "173628054",
            },
          ],
          price: 48900,
          addonCombinations: [
            {
              groupId: "204687663",
              addonId: "140544085",
            },
            {
              groupId: "204687663",
              addonId: "101436527",
            },
            {
              groupId: "204687663",
              addonId: "101436531",
            },
            {
              groupId: "204687663",
              addonId: "101436528",
            },
            {
              groupId: "204687639",
              addonId: "117622336",
            },
            {
              groupId: "204687665",
              addonId: "135558627",
            },
            {
              groupId: "204687665",
              addonId: "101436533",
            },
            {
              groupId: "204687665",
              addonId: "101436535",
            },
            {
              groupId: "204687665",
              addonId: "101436536",
            },
            {
              groupId: "204687665",
              addonId: "101436537",
            },
            {
              groupId: "204687665",
              addonId: "101436538",
            },
            {
              groupId: "204687665",
              addonId: "101436539",
            },
            {
              groupId: "204687665",
              addonId: "101436540",
            },
            {
              groupId: "204687665",
              addonId: "101436541",
            },
            {
              groupId: "204687665",
              addonId: "101436542",
            },
            {
              groupId: "204687665",
              addonId: "101436543",
            },
            {
              groupId: "204687665",
              addonId: "101436544",
            },
            {
              groupId: "204687669",
              addonId: "135558625",
            },
            {
              groupId: "204687669",
              addonId: "134234111",
            },
            {
              groupId: "204687669",
              addonId: "134234118",
            },
            {
              groupId: "204687669",
              addonId: "134234101",
            },
            {
              groupId: "204687669",
              addonId: "134234090",
            },
            {
              groupId: "204687669",
              addonId: "134234103",
            },
            {
              groupId: "204687669",
              addonId: "134234106",
            },
            {
              groupId: "204687669",
              addonId: "134234116",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55796002",
              variationId: "173628046",
            },
            {
              groupId: "55796003",
              variationId: "173628051",
            },
          ],
          price: 32400,
          addonCombinations: [
            {
              groupId: "204687663",
              addonId: "140544085",
            },
            {
              groupId: "204687663",
              addonId: "101436527",
            },
            {
              groupId: "204687663",
              addonId: "101436531",
            },
            {
              groupId: "204687663",
              addonId: "101436528",
            },
            {
              groupId: "204687657",
              addonId: "135558626",
            },
            {
              groupId: "204687657",
              addonId: "101436548",
            },
            {
              groupId: "204687657",
              addonId: "101436550",
            },
            {
              groupId: "204687657",
              addonId: "101436551",
            },
            {
              groupId: "204687657",
              addonId: "101436552",
            },
            {
              groupId: "204687657",
              addonId: "101436553",
            },
            {
              groupId: "204687657",
              addonId: "101436554",
            },
            {
              groupId: "204687657",
              addonId: "101436555",
            },
            {
              groupId: "204687657",
              addonId: "101436556",
            },
            {
              groupId: "204687657",
              addonId: "101436557",
            },
            {
              groupId: "204687661",
              addonId: "135558624",
            },
            {
              groupId: "204687661",
              addonId: "134234088",
            },
            {
              groupId: "204687661",
              addonId: "134234100",
            },
            {
              groupId: "204687661",
              addonId: "134234098",
            },
            {
              groupId: "204687661",
              addonId: "134234092",
            },
            {
              groupId: "204687661",
              addonId: "134234104",
            },
            {
              groupId: "204687661",
              addonId: "134234097",
            },
            {
              groupId: "204687661",
              addonId: "134234089",
            },
            {
              groupId: "204687635",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55796002",
              variationId: "173628046",
            },
            {
              groupId: "55796003",
              variationId: "173628055",
            },
          ],
          price: 58800,
          addonCombinations: [
            {
              groupId: "204687663",
              addonId: "140544085",
            },
            {
              groupId: "204687663",
              addonId: "101436527",
            },
            {
              groupId: "204687663",
              addonId: "101436531",
            },
            {
              groupId: "204687663",
              addonId: "101436528",
            },
            {
              groupId: "204687639",
              addonId: "117622336",
            },
            {
              groupId: "204687665",
              addonId: "135558627",
            },
            {
              groupId: "204687665",
              addonId: "101436533",
            },
            {
              groupId: "204687665",
              addonId: "101436535",
            },
            {
              groupId: "204687665",
              addonId: "101436536",
            },
            {
              groupId: "204687665",
              addonId: "101436537",
            },
            {
              groupId: "204687665",
              addonId: "101436538",
            },
            {
              groupId: "204687665",
              addonId: "101436539",
            },
            {
              groupId: "204687665",
              addonId: "101436540",
            },
            {
              groupId: "204687665",
              addonId: "101436541",
            },
            {
              groupId: "204687665",
              addonId: "101436542",
            },
            {
              groupId: "204687665",
              addonId: "101436543",
            },
            {
              groupId: "204687665",
              addonId: "101436544",
            },
            {
              groupId: "204687669",
              addonId: "135558625",
            },
            {
              groupId: "204687669",
              addonId: "134234111",
            },
            {
              groupId: "204687669",
              addonId: "134234118",
            },
            {
              groupId: "204687669",
              addonId: "134234101",
            },
            {
              groupId: "204687669",
              addonId: "134234090",
            },
            {
              groupId: "204687669",
              addonId: "134234103",
            },
            {
              groupId: "204687669",
              addonId: "134234106",
            },
            {
              groupId: "204687669",
              addonId: "134234116",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55796002",
              variationId: "200980470",
            },
            {
              groupId: "55796003",
              variationId: "200980471",
            },
          ],
          price: 32400,
          addonCombinations: [
            {
              groupId: "204687663",
              addonId: "140544085",
            },
            {
              groupId: "204687663",
              addonId: "101436527",
            },
            {
              groupId: "204687663",
              addonId: "101436531",
            },
            {
              groupId: "204687663",
              addonId: "101436528",
            },
            {
              groupId: "204687657",
              addonId: "135558626",
            },
            {
              groupId: "204687657",
              addonId: "101436548",
            },
            {
              groupId: "204687657",
              addonId: "101436550",
            },
            {
              groupId: "204687657",
              addonId: "101436551",
            },
            {
              groupId: "204687657",
              addonId: "101436552",
            },
            {
              groupId: "204687657",
              addonId: "101436553",
            },
            {
              groupId: "204687657",
              addonId: "101436554",
            },
            {
              groupId: "204687657",
              addonId: "101436555",
            },
            {
              groupId: "204687657",
              addonId: "101436556",
            },
            {
              groupId: "204687657",
              addonId: "101436557",
            },
            {
              groupId: "204687661",
              addonId: "135558624",
            },
            {
              groupId: "204687661",
              addonId: "134234088",
            },
            {
              groupId: "204687661",
              addonId: "134234100",
            },
            {
              groupId: "204687661",
              addonId: "134234098",
            },
            {
              groupId: "204687661",
              addonId: "134234092",
            },
            {
              groupId: "204687661",
              addonId: "134234104",
            },
            {
              groupId: "204687661",
              addonId: "134234097",
            },
            {
              groupId: "204687661",
              addonId: "134234089",
            },
            {
              groupId: "204687635",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55796002",
              variationId: "200980470",
            },
            {
              groupId: "55796003",
              variationId: "200980472",
            },
          ],
          price: 58800,
          addonCombinations: [
            {
              groupId: "204687663",
              addonId: "140544085",
            },
            {
              groupId: "204687663",
              addonId: "101436527",
            },
            {
              groupId: "204687663",
              addonId: "101436531",
            },
            {
              groupId: "204687663",
              addonId: "101436528",
            },
            {
              groupId: "204687639",
              addonId: "117622336",
            },
            {
              groupId: "204687665",
              addonId: "135558627",
            },
            {
              groupId: "204687665",
              addonId: "101436533",
            },
            {
              groupId: "204687665",
              addonId: "101436535",
            },
            {
              groupId: "204687665",
              addonId: "101436536",
            },
            {
              groupId: "204687665",
              addonId: "101436537",
            },
            {
              groupId: "204687665",
              addonId: "101436538",
            },
            {
              groupId: "204687665",
              addonId: "101436539",
            },
            {
              groupId: "204687665",
              addonId: "101436540",
            },
            {
              groupId: "204687665",
              addonId: "101436541",
            },
            {
              groupId: "204687665",
              addonId: "101436542",
            },
            {
              groupId: "204687665",
              addonId: "101436543",
            },
            {
              groupId: "204687665",
              addonId: "101436544",
            },
            {
              groupId: "204687669",
              addonId: "135558625",
            },
            {
              groupId: "204687669",
              addonId: "134234111",
            },
            {
              groupId: "204687669",
              addonId: "134234118",
            },
            {
              groupId: "204687669",
              addonId: "134234101",
            },
            {
              groupId: "204687669",
              addonId: "134234090",
            },
            {
              groupId: "204687669",
              addonId: "134234103",
            },
            {
              groupId: "204687669",
              addonId: "134234106",
            },
            {
              groupId: "204687669",
              addonId: "134234116",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55796002",
              variationId: "173628048",
            },
            {
              groupId: "55796003",
              variationId: "173628052",
            },
          ],
          price: 32400,
          addonCombinations: [
            {
              groupId: "204687663",
              addonId: "140544085",
            },
            {
              groupId: "204687663",
              addonId: "101436527",
            },
            {
              groupId: "204687663",
              addonId: "101436531",
            },
            {
              groupId: "204687663",
              addonId: "101436528",
            },
            {
              groupId: "204687657",
              addonId: "135558626",
            },
            {
              groupId: "204687657",
              addonId: "101436548",
            },
            {
              groupId: "204687657",
              addonId: "101436550",
            },
            {
              groupId: "204687657",
              addonId: "101436551",
            },
            {
              groupId: "204687657",
              addonId: "101436552",
            },
            {
              groupId: "204687657",
              addonId: "101436553",
            },
            {
              groupId: "204687657",
              addonId: "101436554",
            },
            {
              groupId: "204687657",
              addonId: "101436555",
            },
            {
              groupId: "204687657",
              addonId: "101436556",
            },
            {
              groupId: "204687657",
              addonId: "101436557",
            },
            {
              groupId: "204687661",
              addonId: "135558624",
            },
            {
              groupId: "204687661",
              addonId: "134234088",
            },
            {
              groupId: "204687661",
              addonId: "134234100",
            },
            {
              groupId: "204687661",
              addonId: "134234098",
            },
            {
              groupId: "204687661",
              addonId: "134234092",
            },
            {
              groupId: "204687661",
              addonId: "134234104",
            },
            {
              groupId: "204687661",
              addonId: "134234097",
            },
            {
              groupId: "204687661",
              addonId: "134234089",
            },
            {
              groupId: "204687635",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55796002",
              variationId: "173628048",
            },
            {
              groupId: "55796003",
              variationId: "173628056",
            },
          ],
          price: 58800,
          addonCombinations: [
            {
              groupId: "204687663",
              addonId: "140544085",
            },
            {
              groupId: "204687663",
              addonId: "101436527",
            },
            {
              groupId: "204687663",
              addonId: "101436531",
            },
            {
              groupId: "204687663",
              addonId: "101436528",
            },
            {
              groupId: "204687639",
              addonId: "117622336",
            },
            {
              groupId: "204687665",
              addonId: "135558627",
            },
            {
              groupId: "204687665",
              addonId: "101436533",
            },
            {
              groupId: "204687665",
              addonId: "101436535",
            },
            {
              groupId: "204687665",
              addonId: "101436536",
            },
            {
              groupId: "204687665",
              addonId: "101436537",
            },
            {
              groupId: "204687665",
              addonId: "101436538",
            },
            {
              groupId: "204687665",
              addonId: "101436539",
            },
            {
              groupId: "204687665",
              addonId: "101436540",
            },
            {
              groupId: "204687665",
              addonId: "101436541",
            },
            {
              groupId: "204687665",
              addonId: "101436542",
            },
            {
              groupId: "204687665",
              addonId: "101436543",
            },
            {
              groupId: "204687665",
              addonId: "101436544",
            },
            {
              groupId: "204687669",
              addonId: "135558625",
            },
            {
              groupId: "204687669",
              addonId: "134234111",
            },
            {
              groupId: "204687669",
              addonId: "134234118",
            },
            {
              groupId: "204687669",
              addonId: "134234101",
            },
            {
              groupId: "204687669",
              addonId: "134234090",
            },
            {
              groupId: "204687669",
              addonId: "134234103",
            },
            {
              groupId: "204687669",
              addonId: "134234106",
            },
            {
              groupId: "204687669",
              addonId: "134234116",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55796002",
              variationId: "173628049",
            },
            {
              groupId: "55796003",
              variationId: "173628053",
            },
          ],
          price: 64900,
          addonCombinations: [
            {
              groupId: "204687663",
              addonId: "140544085",
            },
            {
              groupId: "204687663",
              addonId: "101436527",
            },
            {
              groupId: "204687663",
              addonId: "101436531",
            },
            {
              groupId: "204687663",
              addonId: "101436528",
            },
            {
              groupId: "204687642",
              addonId: "114794727",
            },
            {
              groupId: "204687653",
              addonId: "135558623",
            },
            {
              groupId: "204687653",
              addonId: "114794726",
            },
            {
              groupId: "204687653",
              addonId: "114794727",
            },
            {
              groupId: "204687653",
              addonId: "114794728",
            },
            {
              groupId: "204687653",
              addonId: "114794729",
            },
            {
              groupId: "204687653",
              addonId: "114794725",
            },
            {
              groupId: "204687653",
              addonId: "114794737",
            },
            {
              groupId: "204687653",
              addonId: "114794738",
            },
            {
              groupId: "204687653",
              addonId: "114794733",
            },
            {
              groupId: "204687653",
              addonId: "114794734",
            },
            {
              groupId: "204687653",
              addonId: "114794735",
            },
            {
              groupId: "204687653",
              addonId: "114794736",
            },
            {
              groupId: "204687653",
              addonId: "114794731",
            },
            {
              groupId: "204687647",
              addonId: "135558629",
            },
            {
              groupId: "204687647",
              addonId: "134234099",
            },
            {
              groupId: "204687647",
              addonId: "134234109",
            },
            {
              groupId: "204687647",
              addonId: "134234110",
            },
            {
              groupId: "204687647",
              addonId: "134234115",
            },
            {
              groupId: "204687647",
              addonId: "134234117",
            },
            {
              groupId: "204687647",
              addonId: "134234119",
            },
            {
              groupId: "204687647",
              addonId: "134234114",
            },
          ],
        },
      ],
    },
    addons: [
      {
        groupId: "204687635",
        groupName: "Extra Cheese Topping",
        choices: [
          {
            id: "101436545",
            name: "Cheese",
            price: 6500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 1,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687642",
        groupName: "Extra-Cheese Topping",
        choices: [
          {
            id: "114794727",
            name: "Cheese",
            price: 10900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 1,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687647",
        groupName: "Add More Non Veg Toppings TNC",
        choices: [
          {
            id: "134234099",
            name: "Chicken Keema Masala",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234109",
            name: "Chicken Malai Tikka",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234110",
            name: "Chicken Pepperoni",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234115",
            name: "Chicken sausage",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234117",
            name: "Chicken Tikka",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234119",
            name: "Herbed Chicken",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234114",
            name: "Schezwan Chicken Meatball",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "135558629",
            name: "Marinated Chicken",
            price: 9900,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687653",
        groupName: "Add More Veg Toppings TNC",
        choices: [
          {
            id: "114794726",
            name: "Black Olives",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794727",
            name: "Cheese",
            price: 10900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794728",
            name: "Capsicum",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794729",
            name: "Herbed Veggies",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794725",
            name: "Jalapeno",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794737",
            name: "Paneer",
            price: 8500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794738",
            name: "Mushroom",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794733",
            name: "Onion",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794734",
            name: "Red Capsicum",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794735",
            name: "Red Paprika",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794736",
            name: "Sweet Corn",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794731",
            name: "Tomato",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "135558623",
            name: "Marinated Paneer",
            price: 8500,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687657",
        groupName: "Add More Veg Toppings Personal",
        choices: [
          {
            id: "135558626",
            name: "Marinated Paneer",
            price: 5500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436548",
            name: "Capsicum",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436550",
            name: "Jalapeno",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436551",
            name: "Mushroom",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436552",
            name: "Onion",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436553",
            name: "Paneer",
            price: 5500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436554",
            name: "Red Paprika",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436555",
            name: "Red Capsicum",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436556",
            name: "Sweet Corn",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436557",
            name: "Tomato",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687661",
        groupName: "Add More Non-Veg Toppings Personal",
        choices: [
          {
            id: "134234088",
            name: "Chicken Pepperoni",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234100",
            name: "Chicken Sausage",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234098",
            name: "Chicken Tikka",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234092",
            name: "Chicken Malai Tikka",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234104",
            name: "Herbed Chicken",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234097",
            name: "Schezwan Chicken Meatball",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234089",
            name: "Chicken Keema Masala",
            price: 6000,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "135558624",
            name: "Marinated Chicken",
            price: 6500,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687663",
        groupName: "Make it a Meal",
        choices: [
          {
            id: "140544085",
            name: "Indi Cheese Pocket - Flat Rs 20 Off",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436527",
            name: "Classic BreadStix : Flat Rs 20 Off",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436531",
            name: "Choco Volcano",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436528",
            name: "Cheese Garlic Bread : Flat Rs 20 Off",
            price: 13900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 4,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687665",
        groupName: "Add More Veg Toppings",
        choices: [
          {
            id: "101436533",
            name: "Black Olives",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436535",
            name: "Capsicum",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436536",
            name: "Herbed Veggies",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436537",
            name: "Jalapeno",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436538",
            name: "Mushroom",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436539",
            name: "Onion",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436540",
            name: "Paneer",
            price: 7500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436541",
            name: "Red Paprika",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436542",
            name: "Red Capsicum",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436543",
            name: "Sweet Corn",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436544",
            name: "Tomato",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "135558627",
            name: "Marinated Paneer",
            price: 7500,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687669",
        groupName: "Add More Non-Veg Toppings Medium",
        choices: [
          {
            id: "134234111",
            name: "Chicken Pepperoni",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234118",
            name: "Chicken Tikka",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234101",
            name: "Chicken Sausage",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234090",
            name: "Chicken Malai Tikka",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234103",
            name: "Herbed Chicken",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234106",
            name: "Chicken Keema Masala",
            price: 8000,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234116",
            name: "Schezwan Chicken Meatball",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "135558625",
            name: "Marinated Chicken",
            price: 8500,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
    ],
    itemAttribute: {
      vegClassifier: "NONVEG",
      portionSize: "Serves 1",
    },
    defaultPrice: 24900,
    ribbon: {},
    showImage: true,
    offerTags: [
      {
        title: "60% OFF",
        subTitle: "USE TRYNEW",
        textColor: "#DB6742",
        backgroundColor: "#FAE8E3",
        matchText: "SILD",
      },
    ],
    itemBadge: {},
    badgesV2: {},
    ratings: {
      aggregatedRating: {
        rating: "4.9",
        ratingCount: "41 ratings",
        ratingCountV2: "41",
      },
      ratingsPresentationConfig: {
        bgGradient: {
          colours: ["#C8F9E5", "#00FFFFFF"],
          gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
        },
        ratingIconColor: "rating_very_good",
        ratingTextColor: "rating_very_good",
        ratingCountTextColor: "rating_very_good",
        ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
        ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
      },
    },
    itemPriceStrikeOff: true,
    offerIds: ["7073b976-05da-4329-a969-37b559a97efc"],
    parentId: "31607039",
  },
  {
    id: "70797341",
    name: "Murg Malai Chicken",
    category: "Non Veg Pizza",
    description:
      "Serves 1 | Amazingly flavourful chicken malai tikka, herbed onion & green capsicum, spicy red paprika with flavourful pan sauce and mozzarella cheese (PAN Per/Med-269 Kcal/100g | TnC-299 Kcal/100g | Stuffed Crust Add : Per: 295 Kcal/Pizza | Med: 448kcal/Pizza| Ultimate Cheese : PER: 250 kcal/Pizza | MED: 375 kcal/Pizza| Stuff Crust Chicken Seekh Kebab Add : Per: 389 kcal/Pizza | Med: 614 Kcal/Pizza. Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/17/a17de87b-9413-49b6-9982-42a676e8cbab_6e749005-f69b-4754-a229-18681a4f03c8.jpg_compressed",
    inStock: 1,
    variants: {},
    variantsV2: {
      variantGroups: [
        {
          groupId: "55795926",
          name: "Choose your Crust",
          variations: [
            {
              name: "Pan",
              default: 1,
              id: "173627625",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55795927",
                variationId: "173627632",
              },
            },
            {
              name: "Stuffed Crust - Maxx",
              id: "173627627",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55795927",
                variationId: "173627633",
              },
            },
            {
              name: "Ultimate Cheese",
              id: "200980380",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55795927",
                variationId: "200980382",
              },
            },
            {
              name: "Stuffed Crust - Chicken Seekh Kebab",
              id: "173627629",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55795927",
                variationId: "173627634",
              },
            },
            {
              name: "Thin n Crispy",
              id: "173627631",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55795927",
                variationId: "173627635",
              },
            },
          ],
        },
        {
          groupId: "55795927",
          name: "Choose Size",
          variations: [
            {
              name: "Personal",
              price: 434,
              id: "200980382",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 359,
              default: 1,
              id: "173627632",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 434,
              id: "173627633",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 738,
              id: "200980383",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 434,
              id: "173627634",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Large.",
              price: 849,
              id: "173627635",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 639,
              id: "173627636",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 738,
              id: "173627637",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 738,
              id: "173627638",
              inStock: 1,
              isEnabled: 1,
            },
          ],
        },
      ],
      pricingModels: [
        {
          variations: [
            {
              groupId: "55795926",
              variationId: "173627625",
            },
            {
              groupId: "55795927",
              variationId: "173627632",
            },
          ],
          price: 35900,
          addonCombinations: [
            {
              groupId: "204687302",
              addonId: "140544085",
            },
            {
              groupId: "204687302",
              addonId: "101436527",
            },
            {
              groupId: "204687302",
              addonId: "101436531",
            },
            {
              groupId: "204687302",
              addonId: "101436528",
            },
            {
              groupId: "204687289",
              addonId: "135558626",
            },
            {
              groupId: "204687289",
              addonId: "101436548",
            },
            {
              groupId: "204687289",
              addonId: "101436550",
            },
            {
              groupId: "204687289",
              addonId: "101436551",
            },
            {
              groupId: "204687289",
              addonId: "101436552",
            },
            {
              groupId: "204687289",
              addonId: "101436553",
            },
            {
              groupId: "204687289",
              addonId: "101436554",
            },
            {
              groupId: "204687289",
              addonId: "101436555",
            },
            {
              groupId: "204687289",
              addonId: "101436556",
            },
            {
              groupId: "204687289",
              addonId: "101436557",
            },
            {
              groupId: "204687297",
              addonId: "135558624",
            },
            {
              groupId: "204687297",
              addonId: "134234088",
            },
            {
              groupId: "204687297",
              addonId: "134234100",
            },
            {
              groupId: "204687297",
              addonId: "134234098",
            },
            {
              groupId: "204687297",
              addonId: "134234092",
            },
            {
              groupId: "204687297",
              addonId: "134234104",
            },
            {
              groupId: "204687297",
              addonId: "134234097",
            },
            {
              groupId: "204687297",
              addonId: "134234089",
            },
            {
              groupId: "204687257",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795926",
              variationId: "173627625",
            },
            {
              groupId: "55795927",
              variationId: "173627636",
            },
          ],
          price: 63900,
          addonCombinations: [
            {
              groupId: "204687302",
              addonId: "140544085",
            },
            {
              groupId: "204687302",
              addonId: "101436527",
            },
            {
              groupId: "204687302",
              addonId: "101436531",
            },
            {
              groupId: "204687302",
              addonId: "101436528",
            },
            {
              groupId: "204687260",
              addonId: "117622336",
            },
            {
              groupId: "204687306",
              addonId: "135558627",
            },
            {
              groupId: "204687306",
              addonId: "101436533",
            },
            {
              groupId: "204687306",
              addonId: "101436535",
            },
            {
              groupId: "204687306",
              addonId: "101436536",
            },
            {
              groupId: "204687306",
              addonId: "101436537",
            },
            {
              groupId: "204687306",
              addonId: "101436538",
            },
            {
              groupId: "204687306",
              addonId: "101436539",
            },
            {
              groupId: "204687306",
              addonId: "101436540",
            },
            {
              groupId: "204687306",
              addonId: "101436541",
            },
            {
              groupId: "204687306",
              addonId: "101436542",
            },
            {
              groupId: "204687306",
              addonId: "101436543",
            },
            {
              groupId: "204687306",
              addonId: "101436544",
            },
            {
              groupId: "204687311",
              addonId: "135558625",
            },
            {
              groupId: "204687311",
              addonId: "134234111",
            },
            {
              groupId: "204687311",
              addonId: "134234118",
            },
            {
              groupId: "204687311",
              addonId: "134234101",
            },
            {
              groupId: "204687311",
              addonId: "134234090",
            },
            {
              groupId: "204687311",
              addonId: "134234103",
            },
            {
              groupId: "204687311",
              addonId: "134234106",
            },
            {
              groupId: "204687311",
              addonId: "134234116",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795926",
              variationId: "173627627",
            },
            {
              groupId: "55795927",
              variationId: "173627633",
            },
          ],
          price: 43400,
          addonCombinations: [
            {
              groupId: "204687302",
              addonId: "140544085",
            },
            {
              groupId: "204687302",
              addonId: "101436527",
            },
            {
              groupId: "204687302",
              addonId: "101436531",
            },
            {
              groupId: "204687302",
              addonId: "101436528",
            },
            {
              groupId: "204687289",
              addonId: "135558626",
            },
            {
              groupId: "204687289",
              addonId: "101436548",
            },
            {
              groupId: "204687289",
              addonId: "101436550",
            },
            {
              groupId: "204687289",
              addonId: "101436551",
            },
            {
              groupId: "204687289",
              addonId: "101436552",
            },
            {
              groupId: "204687289",
              addonId: "101436553",
            },
            {
              groupId: "204687289",
              addonId: "101436554",
            },
            {
              groupId: "204687289",
              addonId: "101436555",
            },
            {
              groupId: "204687289",
              addonId: "101436556",
            },
            {
              groupId: "204687289",
              addonId: "101436557",
            },
            {
              groupId: "204687297",
              addonId: "135558624",
            },
            {
              groupId: "204687297",
              addonId: "134234088",
            },
            {
              groupId: "204687297",
              addonId: "134234100",
            },
            {
              groupId: "204687297",
              addonId: "134234098",
            },
            {
              groupId: "204687297",
              addonId: "134234092",
            },
            {
              groupId: "204687297",
              addonId: "134234104",
            },
            {
              groupId: "204687297",
              addonId: "134234097",
            },
            {
              groupId: "204687297",
              addonId: "134234089",
            },
            {
              groupId: "204687257",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795926",
              variationId: "173627627",
            },
            {
              groupId: "55795927",
              variationId: "173627637",
            },
          ],
          price: 73800,
          addonCombinations: [
            {
              groupId: "204687302",
              addonId: "140544085",
            },
            {
              groupId: "204687302",
              addonId: "101436527",
            },
            {
              groupId: "204687302",
              addonId: "101436531",
            },
            {
              groupId: "204687302",
              addonId: "101436528",
            },
            {
              groupId: "204687260",
              addonId: "117622336",
            },
            {
              groupId: "204687306",
              addonId: "135558627",
            },
            {
              groupId: "204687306",
              addonId: "101436533",
            },
            {
              groupId: "204687306",
              addonId: "101436535",
            },
            {
              groupId: "204687306",
              addonId: "101436536",
            },
            {
              groupId: "204687306",
              addonId: "101436537",
            },
            {
              groupId: "204687306",
              addonId: "101436538",
            },
            {
              groupId: "204687306",
              addonId: "101436539",
            },
            {
              groupId: "204687306",
              addonId: "101436540",
            },
            {
              groupId: "204687306",
              addonId: "101436541",
            },
            {
              groupId: "204687306",
              addonId: "101436542",
            },
            {
              groupId: "204687306",
              addonId: "101436543",
            },
            {
              groupId: "204687306",
              addonId: "101436544",
            },
            {
              groupId: "204687311",
              addonId: "135558625",
            },
            {
              groupId: "204687311",
              addonId: "134234111",
            },
            {
              groupId: "204687311",
              addonId: "134234118",
            },
            {
              groupId: "204687311",
              addonId: "134234101",
            },
            {
              groupId: "204687311",
              addonId: "134234090",
            },
            {
              groupId: "204687311",
              addonId: "134234103",
            },
            {
              groupId: "204687311",
              addonId: "134234106",
            },
            {
              groupId: "204687311",
              addonId: "134234116",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795926",
              variationId: "200980380",
            },
            {
              groupId: "55795927",
              variationId: "200980382",
            },
          ],
          price: 43400,
          addonCombinations: [
            {
              groupId: "204687302",
              addonId: "140544085",
            },
            {
              groupId: "204687302",
              addonId: "101436527",
            },
            {
              groupId: "204687302",
              addonId: "101436531",
            },
            {
              groupId: "204687302",
              addonId: "101436528",
            },
            {
              groupId: "204687289",
              addonId: "135558626",
            },
            {
              groupId: "204687289",
              addonId: "101436548",
            },
            {
              groupId: "204687289",
              addonId: "101436550",
            },
            {
              groupId: "204687289",
              addonId: "101436551",
            },
            {
              groupId: "204687289",
              addonId: "101436552",
            },
            {
              groupId: "204687289",
              addonId: "101436553",
            },
            {
              groupId: "204687289",
              addonId: "101436554",
            },
            {
              groupId: "204687289",
              addonId: "101436555",
            },
            {
              groupId: "204687289",
              addonId: "101436556",
            },
            {
              groupId: "204687289",
              addonId: "101436557",
            },
            {
              groupId: "204687297",
              addonId: "135558624",
            },
            {
              groupId: "204687297",
              addonId: "134234088",
            },
            {
              groupId: "204687297",
              addonId: "134234100",
            },
            {
              groupId: "204687297",
              addonId: "134234098",
            },
            {
              groupId: "204687297",
              addonId: "134234092",
            },
            {
              groupId: "204687297",
              addonId: "134234104",
            },
            {
              groupId: "204687297",
              addonId: "134234097",
            },
            {
              groupId: "204687297",
              addonId: "134234089",
            },
            {
              groupId: "204687257",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795926",
              variationId: "200980380",
            },
            {
              groupId: "55795927",
              variationId: "200980383",
            },
          ],
          price: 73800,
          addonCombinations: [
            {
              groupId: "204687302",
              addonId: "140544085",
            },
            {
              groupId: "204687302",
              addonId: "101436527",
            },
            {
              groupId: "204687302",
              addonId: "101436531",
            },
            {
              groupId: "204687302",
              addonId: "101436528",
            },
            {
              groupId: "204687260",
              addonId: "117622336",
            },
            {
              groupId: "204687306",
              addonId: "135558627",
            },
            {
              groupId: "204687306",
              addonId: "101436533",
            },
            {
              groupId: "204687306",
              addonId: "101436535",
            },
            {
              groupId: "204687306",
              addonId: "101436536",
            },
            {
              groupId: "204687306",
              addonId: "101436537",
            },
            {
              groupId: "204687306",
              addonId: "101436538",
            },
            {
              groupId: "204687306",
              addonId: "101436539",
            },
            {
              groupId: "204687306",
              addonId: "101436540",
            },
            {
              groupId: "204687306",
              addonId: "101436541",
            },
            {
              groupId: "204687306",
              addonId: "101436542",
            },
            {
              groupId: "204687306",
              addonId: "101436543",
            },
            {
              groupId: "204687306",
              addonId: "101436544",
            },
            {
              groupId: "204687311",
              addonId: "135558625",
            },
            {
              groupId: "204687311",
              addonId: "134234111",
            },
            {
              groupId: "204687311",
              addonId: "134234118",
            },
            {
              groupId: "204687311",
              addonId: "134234101",
            },
            {
              groupId: "204687311",
              addonId: "134234090",
            },
            {
              groupId: "204687311",
              addonId: "134234103",
            },
            {
              groupId: "204687311",
              addonId: "134234106",
            },
            {
              groupId: "204687311",
              addonId: "134234116",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795926",
              variationId: "173627629",
            },
            {
              groupId: "55795927",
              variationId: "173627634",
            },
          ],
          price: 43400,
          addonCombinations: [
            {
              groupId: "204687302",
              addonId: "140544085",
            },
            {
              groupId: "204687302",
              addonId: "101436527",
            },
            {
              groupId: "204687302",
              addonId: "101436531",
            },
            {
              groupId: "204687302",
              addonId: "101436528",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795926",
              variationId: "173627629",
            },
            {
              groupId: "55795927",
              variationId: "173627638",
            },
          ],
          price: 73800,
          addonCombinations: [
            {
              groupId: "204687302",
              addonId: "140544085",
            },
            {
              groupId: "204687302",
              addonId: "101436527",
            },
            {
              groupId: "204687302",
              addonId: "101436531",
            },
            {
              groupId: "204687302",
              addonId: "101436528",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795926",
              variationId: "173627631",
            },
            {
              groupId: "55795927",
              variationId: "173627635",
            },
          ],
          price: 84900,
          addonCombinations: [
            {
              groupId: "204687302",
              addonId: "140544085",
            },
            {
              groupId: "204687302",
              addonId: "101436527",
            },
            {
              groupId: "204687302",
              addonId: "101436531",
            },
            {
              groupId: "204687302",
              addonId: "101436528",
            },
            {
              groupId: "204687265",
              addonId: "114794727",
            },
            {
              groupId: "204687279",
              addonId: "135558623",
            },
            {
              groupId: "204687279",
              addonId: "114794726",
            },
            {
              groupId: "204687279",
              addonId: "114794727",
            },
            {
              groupId: "204687279",
              addonId: "114794728",
            },
            {
              groupId: "204687279",
              addonId: "114794729",
            },
            {
              groupId: "204687279",
              addonId: "114794725",
            },
            {
              groupId: "204687279",
              addonId: "114794737",
            },
            {
              groupId: "204687279",
              addonId: "114794738",
            },
            {
              groupId: "204687279",
              addonId: "114794733",
            },
            {
              groupId: "204687279",
              addonId: "114794734",
            },
            {
              groupId: "204687279",
              addonId: "114794735",
            },
            {
              groupId: "204687279",
              addonId: "114794736",
            },
            {
              groupId: "204687279",
              addonId: "114794731",
            },
            {
              groupId: "204687270",
              addonId: "135558629",
            },
            {
              groupId: "204687270",
              addonId: "134234099",
            },
            {
              groupId: "204687270",
              addonId: "134234109",
            },
            {
              groupId: "204687270",
              addonId: "134234110",
            },
            {
              groupId: "204687270",
              addonId: "134234115",
            },
            {
              groupId: "204687270",
              addonId: "134234117",
            },
            {
              groupId: "204687270",
              addonId: "134234119",
            },
            {
              groupId: "204687270",
              addonId: "134234114",
            },
          ],
        },
      ],
    },
    addons: [
      {
        groupId: "204687257",
        groupName: "Extra Cheese Topping",
        choices: [
          {
            id: "101436545",
            name: "Cheese",
            price: 6500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 1,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687265",
        groupName: "Extra-Cheese Topping",
        choices: [
          {
            id: "114794727",
            name: "Cheese",
            price: 10900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 1,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687270",
        groupName: "Add More Non Veg Toppings TNC",
        choices: [
          {
            id: "134234099",
            name: "Chicken Keema Masala",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234109",
            name: "Chicken Malai Tikka",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234110",
            name: "Chicken Pepperoni",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234115",
            name: "Chicken sausage",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234117",
            name: "Chicken Tikka",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234119",
            name: "Herbed Chicken",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234114",
            name: "Schezwan Chicken Meatball",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "135558629",
            name: "Marinated Chicken",
            price: 9900,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687279",
        groupName: "Add More Veg Toppings TNC",
        choices: [
          {
            id: "114794726",
            name: "Black Olives",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794727",
            name: "Cheese",
            price: 10900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794728",
            name: "Capsicum",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794729",
            name: "Herbed Veggies",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794725",
            name: "Jalapeno",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794737",
            name: "Paneer",
            price: 8500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794738",
            name: "Mushroom",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794733",
            name: "Onion",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794734",
            name: "Red Capsicum",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794735",
            name: "Red Paprika",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794736",
            name: "Sweet Corn",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794731",
            name: "Tomato",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "135558623",
            name: "Marinated Paneer",
            price: 8500,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687289",
        groupName: "Add More Veg Toppings Personal",
        choices: [
          {
            id: "135558626",
            name: "Marinated Paneer",
            price: 5500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436548",
            name: "Capsicum",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436550",
            name: "Jalapeno",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436551",
            name: "Mushroom",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436552",
            name: "Onion",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436553",
            name: "Paneer",
            price: 5500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436554",
            name: "Red Paprika",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436555",
            name: "Red Capsicum",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436556",
            name: "Sweet Corn",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436557",
            name: "Tomato",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687297",
        groupName: "Add More Non-Veg Toppings Personal",
        choices: [
          {
            id: "134234088",
            name: "Chicken Pepperoni",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234100",
            name: "Chicken Sausage",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234098",
            name: "Chicken Tikka",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234092",
            name: "Chicken Malai Tikka",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234104",
            name: "Herbed Chicken",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234097",
            name: "Schezwan Chicken Meatball",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234089",
            name: "Chicken Keema Masala",
            price: 6000,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "135558624",
            name: "Marinated Chicken",
            price: 6500,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687302",
        groupName: "Make it a Meal",
        choices: [
          {
            id: "140544085",
            name: "Indi Cheese Pocket - Flat Rs 20 Off",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436527",
            name: "Classic BreadStix : Flat Rs 20 Off",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436531",
            name: "Choco Volcano",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436528",
            name: "Cheese Garlic Bread : Flat Rs 20 Off",
            price: 13900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 4,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687306",
        groupName: "Add More Veg Toppings",
        choices: [
          {
            id: "101436533",
            name: "Black Olives",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436535",
            name: "Capsicum",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436536",
            name: "Herbed Veggies",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436537",
            name: "Jalapeno",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436538",
            name: "Mushroom",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436539",
            name: "Onion",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436540",
            name: "Paneer",
            price: 7500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436541",
            name: "Red Paprika",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436542",
            name: "Red Capsicum",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436543",
            name: "Sweet Corn",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436544",
            name: "Tomato",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "135558627",
            name: "Marinated Paneer",
            price: 7500,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687311",
        groupName: "Add More Non-Veg Toppings Medium",
        choices: [
          {
            id: "134234111",
            name: "Chicken Pepperoni",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234118",
            name: "Chicken Tikka",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234101",
            name: "Chicken Sausage",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234090",
            name: "Chicken Malai Tikka",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234103",
            name: "Herbed Chicken",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234106",
            name: "Chicken Keema Masala",
            price: 8000,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234116",
            name: "Schezwan Chicken Meatball",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "135558625",
            name: "Marinated Chicken",
            price: 8500,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
    ],
    itemAttribute: {
      vegClassifier: "NONVEG",
      portionSize: "Serves 1",
    },
    defaultPrice: 35900,
    ribbon: {},
    showImage: true,
    offerTags: [
      {
        title: "60% OFF",
        subTitle: "USE TRYNEW",
        textColor: "#DB6742",
        backgroundColor: "#FAE8E3",
        matchText: "SILD",
      },
    ],
    itemBadge: {},
    badgesV2: {},
    ratings: {
      aggregatedRating: {
        rating: "3.9",
        ratingCount: "10 ratings",
        ratingCountV2: "10",
      },
      ratingsPresentationConfig: {
        bgGradient: {
          colours: ["#D9EFEC", "#00FFFFFF"],
          gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
        },
        ratingIconColor: "rating_medium",
        ratingTextColor: "rating_medium",
        ratingCountTextColor: "rating_medium",
        ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
        ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
      },
    },
    itemPriceStrikeOff: true,
    offerIds: ["7073b976-05da-4329-a969-37b559a97efc"],
    parentId: "66066910",
  },
  {
    id: "114716720",
    name: "Chicken Supreme",
    category: "Non Veg Pizza",
    description:
      "Serves 1 | Loaded with delicious chicken tikka, flavourful herbed chicken, spicy schezwan chicken meatball with flavourful pan sauce and mozzarella cheese. (PAN Per/Med-273 Kcal/100g | TnC-284 Kcal/100g | Stuffed Crust Add : Per: 295 Kcal/Pizza | Med: 448kcal/Pizza| Ultimate Cheese : PER: 250 kcal/Pizza | MED: 375 kcal/Pizza| Stuff Crust Chicken Seekh Kebab Add : Per: 389 kcal/Pizza | Med: 614 Kcal/Pizza. Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/17/e4d15638-5d14-444b-96ce-0314b1d4b0dc_e626776a-fa5d-4302-9c53-58893fe5c90d.jpg_compressed",
    inStock: 1,
    variants: {},
    variantsV2: {
      variantGroups: [
        {
          groupId: "55795986",
          name: "Choose your Crust",
          variations: [
            {
              name: "Pan",
              default: 1,
              id: "173627958",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55795987",
                variationId: "173627962",
              },
            },
            {
              name: "Stuffed Crust - Maxx",
              id: "173627959",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55795987",
                variationId: "173627963",
              },
            },
            {
              name: "Ultimate Cheese",
              id: "200980984",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55795987",
                variationId: "200980991",
              },
            },
            {
              name: "Stuffed Crust - Chicken Seekh Kebab",
              id: "173627960",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55795987",
                variationId: "173627964",
              },
            },
            {
              name: "Thin n Crispy",
              id: "173627961",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55795987",
                variationId: "173627965",
              },
            },
          ],
        },
        {
          groupId: "55795987",
          name: "Choose Size",
          variations: [
            {
              name: "Personal",
              price: 454,
              id: "200980991",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 379,
              default: 1,
              id: "173627962",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 454,
              id: "173627963",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 798,
              id: "200980992",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 454,
              id: "173627964",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Large.",
              price: 949,
              id: "173627965",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 699,
              id: "173627966",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 798,
              id: "173627967",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 798,
              id: "173627968",
              inStock: 1,
              isEnabled: 1,
            },
          ],
        },
      ],
      pricingModels: [
        {
          variations: [
            {
              groupId: "55795986",
              variationId: "173627958",
            },
            {
              groupId: "55795987",
              variationId: "173627962",
            },
          ],
          price: 37900,
          addonCombinations: [
            {
              groupId: "204687593",
              addonId: "140544085",
            },
            {
              groupId: "204687593",
              addonId: "101436527",
            },
            {
              groupId: "204687593",
              addonId: "101436531",
            },
            {
              groupId: "204687593",
              addonId: "101436528",
            },
            {
              groupId: "204687585",
              addonId: "135558626",
            },
            {
              groupId: "204687585",
              addonId: "101436548",
            },
            {
              groupId: "204687585",
              addonId: "101436550",
            },
            {
              groupId: "204687585",
              addonId: "101436551",
            },
            {
              groupId: "204687585",
              addonId: "101436552",
            },
            {
              groupId: "204687585",
              addonId: "101436553",
            },
            {
              groupId: "204687585",
              addonId: "101436554",
            },
            {
              groupId: "204687585",
              addonId: "101436555",
            },
            {
              groupId: "204687585",
              addonId: "101436556",
            },
            {
              groupId: "204687585",
              addonId: "101436557",
            },
            {
              groupId: "204687590",
              addonId: "135558624",
            },
            {
              groupId: "204687590",
              addonId: "134234088",
            },
            {
              groupId: "204687590",
              addonId: "134234100",
            },
            {
              groupId: "204687590",
              addonId: "134234098",
            },
            {
              groupId: "204687590",
              addonId: "134234092",
            },
            {
              groupId: "204687590",
              addonId: "134234104",
            },
            {
              groupId: "204687590",
              addonId: "134234097",
            },
            {
              groupId: "204687590",
              addonId: "134234089",
            },
            {
              groupId: "204687567",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795986",
              variationId: "173627958",
            },
            {
              groupId: "55795987",
              variationId: "173627966",
            },
          ],
          price: 69900,
          addonCombinations: [
            {
              groupId: "204687593",
              addonId: "140544085",
            },
            {
              groupId: "204687593",
              addonId: "101436527",
            },
            {
              groupId: "204687593",
              addonId: "101436531",
            },
            {
              groupId: "204687593",
              addonId: "101436528",
            },
            {
              groupId: "204687569",
              addonId: "117622336",
            },
            {
              groupId: "204687597",
              addonId: "135558627",
            },
            {
              groupId: "204687597",
              addonId: "101436533",
            },
            {
              groupId: "204687597",
              addonId: "101436535",
            },
            {
              groupId: "204687597",
              addonId: "101436536",
            },
            {
              groupId: "204687597",
              addonId: "101436537",
            },
            {
              groupId: "204687597",
              addonId: "101436538",
            },
            {
              groupId: "204687597",
              addonId: "101436539",
            },
            {
              groupId: "204687597",
              addonId: "101436540",
            },
            {
              groupId: "204687597",
              addonId: "101436541",
            },
            {
              groupId: "204687597",
              addonId: "101436542",
            },
            {
              groupId: "204687597",
              addonId: "101436543",
            },
            {
              groupId: "204687597",
              addonId: "101436544",
            },
            {
              groupId: "204687600",
              addonId: "135558625",
            },
            {
              groupId: "204687600",
              addonId: "134234111",
            },
            {
              groupId: "204687600",
              addonId: "134234118",
            },
            {
              groupId: "204687600",
              addonId: "134234101",
            },
            {
              groupId: "204687600",
              addonId: "134234090",
            },
            {
              groupId: "204687600",
              addonId: "134234103",
            },
            {
              groupId: "204687600",
              addonId: "134234106",
            },
            {
              groupId: "204687600",
              addonId: "134234116",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795986",
              variationId: "173627959",
            },
            {
              groupId: "55795987",
              variationId: "173627963",
            },
          ],
          price: 45400,
          addonCombinations: [
            {
              groupId: "204687593",
              addonId: "140544085",
            },
            {
              groupId: "204687593",
              addonId: "101436527",
            },
            {
              groupId: "204687593",
              addonId: "101436531",
            },
            {
              groupId: "204687593",
              addonId: "101436528",
            },
            {
              groupId: "204687585",
              addonId: "135558626",
            },
            {
              groupId: "204687585",
              addonId: "101436548",
            },
            {
              groupId: "204687585",
              addonId: "101436550",
            },
            {
              groupId: "204687585",
              addonId: "101436551",
            },
            {
              groupId: "204687585",
              addonId: "101436552",
            },
            {
              groupId: "204687585",
              addonId: "101436553",
            },
            {
              groupId: "204687585",
              addonId: "101436554",
            },
            {
              groupId: "204687585",
              addonId: "101436555",
            },
            {
              groupId: "204687585",
              addonId: "101436556",
            },
            {
              groupId: "204687585",
              addonId: "101436557",
            },
            {
              groupId: "204687590",
              addonId: "135558624",
            },
            {
              groupId: "204687590",
              addonId: "134234088",
            },
            {
              groupId: "204687590",
              addonId: "134234100",
            },
            {
              groupId: "204687590",
              addonId: "134234098",
            },
            {
              groupId: "204687590",
              addonId: "134234092",
            },
            {
              groupId: "204687590",
              addonId: "134234104",
            },
            {
              groupId: "204687590",
              addonId: "134234097",
            },
            {
              groupId: "204687590",
              addonId: "134234089",
            },
            {
              groupId: "204687567",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795986",
              variationId: "173627959",
            },
            {
              groupId: "55795987",
              variationId: "173627967",
            },
          ],
          price: 79800,
          addonCombinations: [
            {
              groupId: "204687593",
              addonId: "140544085",
            },
            {
              groupId: "204687593",
              addonId: "101436527",
            },
            {
              groupId: "204687593",
              addonId: "101436531",
            },
            {
              groupId: "204687593",
              addonId: "101436528",
            },
            {
              groupId: "204687569",
              addonId: "117622336",
            },
            {
              groupId: "204687597",
              addonId: "135558627",
            },
            {
              groupId: "204687597",
              addonId: "101436533",
            },
            {
              groupId: "204687597",
              addonId: "101436535",
            },
            {
              groupId: "204687597",
              addonId: "101436536",
            },
            {
              groupId: "204687597",
              addonId: "101436537",
            },
            {
              groupId: "204687597",
              addonId: "101436538",
            },
            {
              groupId: "204687597",
              addonId: "101436539",
            },
            {
              groupId: "204687597",
              addonId: "101436540",
            },
            {
              groupId: "204687597",
              addonId: "101436541",
            },
            {
              groupId: "204687597",
              addonId: "101436542",
            },
            {
              groupId: "204687597",
              addonId: "101436543",
            },
            {
              groupId: "204687597",
              addonId: "101436544",
            },
            {
              groupId: "204687600",
              addonId: "135558625",
            },
            {
              groupId: "204687600",
              addonId: "134234111",
            },
            {
              groupId: "204687600",
              addonId: "134234118",
            },
            {
              groupId: "204687600",
              addonId: "134234101",
            },
            {
              groupId: "204687600",
              addonId: "134234090",
            },
            {
              groupId: "204687600",
              addonId: "134234103",
            },
            {
              groupId: "204687600",
              addonId: "134234106",
            },
            {
              groupId: "204687600",
              addonId: "134234116",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795986",
              variationId: "200980984",
            },
            {
              groupId: "55795987",
              variationId: "200980991",
            },
          ],
          price: 45400,
          addonCombinations: [
            {
              groupId: "204687593",
              addonId: "140544085",
            },
            {
              groupId: "204687593",
              addonId: "101436527",
            },
            {
              groupId: "204687593",
              addonId: "101436531",
            },
            {
              groupId: "204687593",
              addonId: "101436528",
            },
            {
              groupId: "204687585",
              addonId: "135558626",
            },
            {
              groupId: "204687585",
              addonId: "101436548",
            },
            {
              groupId: "204687585",
              addonId: "101436550",
            },
            {
              groupId: "204687585",
              addonId: "101436551",
            },
            {
              groupId: "204687585",
              addonId: "101436552",
            },
            {
              groupId: "204687585",
              addonId: "101436553",
            },
            {
              groupId: "204687585",
              addonId: "101436554",
            },
            {
              groupId: "204687585",
              addonId: "101436555",
            },
            {
              groupId: "204687585",
              addonId: "101436556",
            },
            {
              groupId: "204687585",
              addonId: "101436557",
            },
            {
              groupId: "204687590",
              addonId: "135558624",
            },
            {
              groupId: "204687590",
              addonId: "134234088",
            },
            {
              groupId: "204687590",
              addonId: "134234100",
            },
            {
              groupId: "204687590",
              addonId: "134234098",
            },
            {
              groupId: "204687590",
              addonId: "134234092",
            },
            {
              groupId: "204687590",
              addonId: "134234104",
            },
            {
              groupId: "204687590",
              addonId: "134234097",
            },
            {
              groupId: "204687590",
              addonId: "134234089",
            },
            {
              groupId: "204687567",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795986",
              variationId: "200980984",
            },
            {
              groupId: "55795987",
              variationId: "200980992",
            },
          ],
          price: 79800,
          addonCombinations: [
            {
              groupId: "204687593",
              addonId: "140544085",
            },
            {
              groupId: "204687593",
              addonId: "101436527",
            },
            {
              groupId: "204687593",
              addonId: "101436531",
            },
            {
              groupId: "204687593",
              addonId: "101436528",
            },
            {
              groupId: "204687569",
              addonId: "117622336",
            },
            {
              groupId: "204687597",
              addonId: "135558627",
            },
            {
              groupId: "204687597",
              addonId: "101436533",
            },
            {
              groupId: "204687597",
              addonId: "101436535",
            },
            {
              groupId: "204687597",
              addonId: "101436536",
            },
            {
              groupId: "204687597",
              addonId: "101436537",
            },
            {
              groupId: "204687597",
              addonId: "101436538",
            },
            {
              groupId: "204687597",
              addonId: "101436539",
            },
            {
              groupId: "204687597",
              addonId: "101436540",
            },
            {
              groupId: "204687597",
              addonId: "101436541",
            },
            {
              groupId: "204687597",
              addonId: "101436542",
            },
            {
              groupId: "204687597",
              addonId: "101436543",
            },
            {
              groupId: "204687597",
              addonId: "101436544",
            },
            {
              groupId: "204687600",
              addonId: "135558625",
            },
            {
              groupId: "204687600",
              addonId: "134234111",
            },
            {
              groupId: "204687600",
              addonId: "134234118",
            },
            {
              groupId: "204687600",
              addonId: "134234101",
            },
            {
              groupId: "204687600",
              addonId: "134234090",
            },
            {
              groupId: "204687600",
              addonId: "134234103",
            },
            {
              groupId: "204687600",
              addonId: "134234106",
            },
            {
              groupId: "204687600",
              addonId: "134234116",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795986",
              variationId: "173627960",
            },
            {
              groupId: "55795987",
              variationId: "173627964",
            },
          ],
          price: 45400,
          addonCombinations: [
            {
              groupId: "204687593",
              addonId: "140544085",
            },
            {
              groupId: "204687593",
              addonId: "101436527",
            },
            {
              groupId: "204687593",
              addonId: "101436531",
            },
            {
              groupId: "204687593",
              addonId: "101436528",
            },
            {
              groupId: "204687585",
              addonId: "135558626",
            },
            {
              groupId: "204687585",
              addonId: "101436548",
            },
            {
              groupId: "204687585",
              addonId: "101436550",
            },
            {
              groupId: "204687585",
              addonId: "101436551",
            },
            {
              groupId: "204687585",
              addonId: "101436552",
            },
            {
              groupId: "204687585",
              addonId: "101436553",
            },
            {
              groupId: "204687585",
              addonId: "101436554",
            },
            {
              groupId: "204687585",
              addonId: "101436555",
            },
            {
              groupId: "204687585",
              addonId: "101436556",
            },
            {
              groupId: "204687585",
              addonId: "101436557",
            },
            {
              groupId: "204687590",
              addonId: "135558624",
            },
            {
              groupId: "204687590",
              addonId: "134234088",
            },
            {
              groupId: "204687590",
              addonId: "134234100",
            },
            {
              groupId: "204687590",
              addonId: "134234098",
            },
            {
              groupId: "204687590",
              addonId: "134234092",
            },
            {
              groupId: "204687590",
              addonId: "134234104",
            },
            {
              groupId: "204687590",
              addonId: "134234097",
            },
            {
              groupId: "204687590",
              addonId: "134234089",
            },
            {
              groupId: "204687567",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795986",
              variationId: "173627960",
            },
            {
              groupId: "55795987",
              variationId: "173627968",
            },
          ],
          price: 79800,
          addonCombinations: [
            {
              groupId: "204687593",
              addonId: "140544085",
            },
            {
              groupId: "204687593",
              addonId: "101436527",
            },
            {
              groupId: "204687593",
              addonId: "101436531",
            },
            {
              groupId: "204687593",
              addonId: "101436528",
            },
            {
              groupId: "204687569",
              addonId: "117622336",
            },
            {
              groupId: "204687597",
              addonId: "135558627",
            },
            {
              groupId: "204687597",
              addonId: "101436533",
            },
            {
              groupId: "204687597",
              addonId: "101436535",
            },
            {
              groupId: "204687597",
              addonId: "101436536",
            },
            {
              groupId: "204687597",
              addonId: "101436537",
            },
            {
              groupId: "204687597",
              addonId: "101436538",
            },
            {
              groupId: "204687597",
              addonId: "101436539",
            },
            {
              groupId: "204687597",
              addonId: "101436540",
            },
            {
              groupId: "204687597",
              addonId: "101436541",
            },
            {
              groupId: "204687597",
              addonId: "101436542",
            },
            {
              groupId: "204687597",
              addonId: "101436543",
            },
            {
              groupId: "204687597",
              addonId: "101436544",
            },
            {
              groupId: "204687600",
              addonId: "135558625",
            },
            {
              groupId: "204687600",
              addonId: "134234111",
            },
            {
              groupId: "204687600",
              addonId: "134234118",
            },
            {
              groupId: "204687600",
              addonId: "134234101",
            },
            {
              groupId: "204687600",
              addonId: "134234090",
            },
            {
              groupId: "204687600",
              addonId: "134234103",
            },
            {
              groupId: "204687600",
              addonId: "134234106",
            },
            {
              groupId: "204687600",
              addonId: "134234116",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795986",
              variationId: "173627961",
            },
            {
              groupId: "55795987",
              variationId: "173627965",
            },
          ],
          price: 94900,
          addonCombinations: [
            {
              groupId: "204687593",
              addonId: "140544085",
            },
            {
              groupId: "204687593",
              addonId: "101436527",
            },
            {
              groupId: "204687593",
              addonId: "101436531",
            },
            {
              groupId: "204687593",
              addonId: "101436528",
            },
            {
              groupId: "204687571",
              addonId: "114794727",
            },
            {
              groupId: "204687581",
              addonId: "135558623",
            },
            {
              groupId: "204687581",
              addonId: "114794726",
            },
            {
              groupId: "204687581",
              addonId: "114794727",
            },
            {
              groupId: "204687581",
              addonId: "114794728",
            },
            {
              groupId: "204687581",
              addonId: "114794729",
            },
            {
              groupId: "204687581",
              addonId: "114794725",
            },
            {
              groupId: "204687581",
              addonId: "114794737",
            },
            {
              groupId: "204687581",
              addonId: "114794738",
            },
            {
              groupId: "204687581",
              addonId: "114794733",
            },
            {
              groupId: "204687581",
              addonId: "114794734",
            },
            {
              groupId: "204687581",
              addonId: "114794735",
            },
            {
              groupId: "204687581",
              addonId: "114794736",
            },
            {
              groupId: "204687581",
              addonId: "114794731",
            },
            {
              groupId: "204687576",
              addonId: "135558629",
            },
            {
              groupId: "204687576",
              addonId: "134234099",
            },
            {
              groupId: "204687576",
              addonId: "134234109",
            },
            {
              groupId: "204687576",
              addonId: "134234110",
            },
            {
              groupId: "204687576",
              addonId: "134234115",
            },
            {
              groupId: "204687576",
              addonId: "134234117",
            },
            {
              groupId: "204687576",
              addonId: "134234119",
            },
            {
              groupId: "204687576",
              addonId: "134234114",
            },
          ],
        },
      ],
    },
    addons: [
      {
        groupId: "204687567",
        groupName: "Extra Cheese Topping",
        choices: [
          {
            id: "101436545",
            name: "Cheese",
            price: 6500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 1,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687571",
        groupName: "Extra-Cheese Topping",
        choices: [
          {
            id: "114794727",
            name: "Cheese",
            price: 10900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 1,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687576",
        groupName: "Add More Non Veg Toppings TNC",
        choices: [
          {
            id: "134234099",
            name: "Chicken Keema Masala",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234109",
            name: "Chicken Malai Tikka",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234110",
            name: "Chicken Pepperoni",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234115",
            name: "Chicken sausage",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234117",
            name: "Chicken Tikka",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234119",
            name: "Herbed Chicken",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234114",
            name: "Schezwan Chicken Meatball",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "135558629",
            name: "Marinated Chicken",
            price: 9900,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687581",
        groupName: "Add More Veg Toppings TNC",
        choices: [
          {
            id: "114794726",
            name: "Black Olives",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794727",
            name: "Cheese",
            price: 10900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794728",
            name: "Capsicum",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794729",
            name: "Herbed Veggies",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794725",
            name: "Jalapeno",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794737",
            name: "Paneer",
            price: 8500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794738",
            name: "Mushroom",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794733",
            name: "Onion",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794734",
            name: "Red Capsicum",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794735",
            name: "Red Paprika",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794736",
            name: "Sweet Corn",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794731",
            name: "Tomato",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "135558623",
            name: "Marinated Paneer",
            price: 8500,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687585",
        groupName: "Add More Veg Toppings Personal",
        choices: [
          {
            id: "135558626",
            name: "Marinated Paneer",
            price: 5500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436548",
            name: "Capsicum",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436550",
            name: "Jalapeno",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436551",
            name: "Mushroom",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436552",
            name: "Onion",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436553",
            name: "Paneer",
            price: 5500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436554",
            name: "Red Paprika",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436555",
            name: "Red Capsicum",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436556",
            name: "Sweet Corn",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436557",
            name: "Tomato",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687590",
        groupName: "Add More Non-Veg Toppings Personal",
        choices: [
          {
            id: "134234088",
            name: "Chicken Pepperoni",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234100",
            name: "Chicken Sausage",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234098",
            name: "Chicken Tikka",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234092",
            name: "Chicken Malai Tikka",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234104",
            name: "Herbed Chicken",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234097",
            name: "Schezwan Chicken Meatball",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234089",
            name: "Chicken Keema Masala",
            price: 6000,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "135558624",
            name: "Marinated Chicken",
            price: 6500,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687593",
        groupName: "Make it a Meal",
        choices: [
          {
            id: "140544085",
            name: "Indi Cheese Pocket - Flat Rs 20 Off",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436527",
            name: "Classic BreadStix : Flat Rs 20 Off",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436531",
            name: "Choco Volcano",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436528",
            name: "Cheese Garlic Bread : Flat Rs 20 Off",
            price: 13900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 4,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687597",
        groupName: "Add More Veg Toppings",
        choices: [
          {
            id: "101436533",
            name: "Black Olives",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436535",
            name: "Capsicum",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436536",
            name: "Herbed Veggies",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436537",
            name: "Jalapeno",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436538",
            name: "Mushroom",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436539",
            name: "Onion",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436540",
            name: "Paneer",
            price: 7500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436541",
            name: "Red Paprika",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436542",
            name: "Red Capsicum",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436543",
            name: "Sweet Corn",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436544",
            name: "Tomato",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "135558627",
            name: "Marinated Paneer",
            price: 7500,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687600",
        groupName: "Add More Non-Veg Toppings Medium",
        choices: [
          {
            id: "134234111",
            name: "Chicken Pepperoni",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234118",
            name: "Chicken Tikka",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234101",
            name: "Chicken Sausage",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234090",
            name: "Chicken Malai Tikka",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234103",
            name: "Herbed Chicken",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234106",
            name: "Chicken Keema Masala",
            price: 8000,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234116",
            name: "Schezwan Chicken Meatball",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "135558625",
            name: "Marinated Chicken",
            price: 8500,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
    ],
    itemAttribute: {
      vegClassifier: "NONVEG",
      portionSize: "Serves 1",
    },
    defaultPrice: 37900,
    ribbon: {},
    showImage: true,
    itemBadge: {},
    badgesV2: {},
    ratings: {
      aggregatedRating: {
        rating: "4.4",
        ratingCount: "27 ratings",
        ratingCountV2: "27",
      },
      ratingsPresentationConfig: {
        bgGradient: {
          colours: ["#C8F9E5", "#00FFFFFF"],
          gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
        },
        ratingIconColor: "rating_very_good",
        ratingTextColor: "rating_very_good",
        ratingCountTextColor: "rating_very_good",
        ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
        ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
      },
    },
    itemPriceStrikeOff: true,
    parentId: "31607147",
  },
  {
    id: "23372839",
    name: "Triple Chicken Feast",
    category: "Non Veg Pizza",
    description:
      "Serves 1 | Spicy schezwan chicken meatball, flavourful herbed chicken, juicy chicken sausage, green capsicum & onion, spicy red paprika with classic pan sauce and mozzarella cheese (PAN Per/Med-262 Kcal/100g | TnC-277 Kcal/100g | Stuffed Crust Add : Per: 295 Kcal/Pizza | Med: 448kcal/Pizza| Ultimate Cheese : PER: 250 kcal/Pizza | MED: 375 kcal/Pizza| Stuff Crust Chicken Seekh Kebab Add : Per: 389 kcal/Pizza | Med: 614 Kcal/Pizza. Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/16/cef96188-c26a-4706-9843-5d03f41ba7cb_00643046-5886-4012-964f-010fa22f50d1.jpg_compressed",
    inStock: 1,
    variants: {},
    variantsV2: {
      variantGroups: [
        {
          groupId: "55795956",
          name: "Choose your Crust",
          variations: [
            {
              name: "Pan",
              default: 1,
              id: "173627793",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55795957",
                variationId: "173627797",
              },
            },
            {
              name: "Stuffed Crust - Maxx",
              id: "173627794",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55795957",
                variationId: "173627798",
              },
            },
            {
              name: "Ultimate Cheese",
              id: "200980602",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55795957",
                variationId: "200980603",
              },
            },
            {
              name: "Stuffed Crust - Chicken Seekh Kebab",
              id: "173627795",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55795957",
                variationId: "173627799",
              },
            },
            {
              name: "Thin n Crispy",
              id: "173627796",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "55795957",
                variationId: "173627800",
              },
            },
          ],
        },
        {
          groupId: "55795957",
          name: "Choose Size",
          variations: [
            {
              name: "Personal",
              price: 454,
              id: "200980603",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 379,
              default: 1,
              id: "173627797",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 454,
              id: "173627798",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 798,
              id: "200980604",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Personal",
              price: 454,
              id: "173627799",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Large.",
              price: 949,
              id: "173627800",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 699,
              id: "173627801",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 798,
              id: "173627802",
              inStock: 1,
              isEnabled: 1,
            },
            {
              name: "Medium",
              price: 798,
              id: "173627803",
              inStock: 1,
              isEnabled: 1,
            },
          ],
        },
      ],
      pricingModels: [
        {
          variations: [
            {
              groupId: "55795956",
              variationId: "173627793",
            },
            {
              groupId: "55795957",
              variationId: "173627797",
            },
          ],
          price: 37900,
          addonCombinations: [
            {
              groupId: "204687440",
              addonId: "140544085",
            },
            {
              groupId: "204687440",
              addonId: "101436527",
            },
            {
              groupId: "204687440",
              addonId: "101436531",
            },
            {
              groupId: "204687440",
              addonId: "101436528",
            },
            {
              groupId: "204687430",
              addonId: "135558626",
            },
            {
              groupId: "204687430",
              addonId: "101436548",
            },
            {
              groupId: "204687430",
              addonId: "101436550",
            },
            {
              groupId: "204687430",
              addonId: "101436551",
            },
            {
              groupId: "204687430",
              addonId: "101436552",
            },
            {
              groupId: "204687430",
              addonId: "101436553",
            },
            {
              groupId: "204687430",
              addonId: "101436554",
            },
            {
              groupId: "204687430",
              addonId: "101436555",
            },
            {
              groupId: "204687430",
              addonId: "101436556",
            },
            {
              groupId: "204687430",
              addonId: "101436557",
            },
            {
              groupId: "204687436",
              addonId: "135558624",
            },
            {
              groupId: "204687436",
              addonId: "134234088",
            },
            {
              groupId: "204687436",
              addonId: "134234100",
            },
            {
              groupId: "204687436",
              addonId: "134234098",
            },
            {
              groupId: "204687436",
              addonId: "134234092",
            },
            {
              groupId: "204687436",
              addonId: "134234104",
            },
            {
              groupId: "204687436",
              addonId: "134234097",
            },
            {
              groupId: "204687436",
              addonId: "134234089",
            },
            {
              groupId: "204687420",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795956",
              variationId: "173627793",
            },
            {
              groupId: "55795957",
              variationId: "173627801",
            },
          ],
          price: 69900,
          addonCombinations: [
            {
              groupId: "204687440",
              addonId: "140544085",
            },
            {
              groupId: "204687440",
              addonId: "101436527",
            },
            {
              groupId: "204687440",
              addonId: "101436531",
            },
            {
              groupId: "204687440",
              addonId: "101436528",
            },
            {
              groupId: "204687423",
              addonId: "117622336",
            },
            {
              groupId: "204687444",
              addonId: "135558627",
            },
            {
              groupId: "204687444",
              addonId: "101436533",
            },
            {
              groupId: "204687444",
              addonId: "101436535",
            },
            {
              groupId: "204687444",
              addonId: "101436536",
            },
            {
              groupId: "204687444",
              addonId: "101436537",
            },
            {
              groupId: "204687444",
              addonId: "101436538",
            },
            {
              groupId: "204687444",
              addonId: "101436539",
            },
            {
              groupId: "204687444",
              addonId: "101436540",
            },
            {
              groupId: "204687444",
              addonId: "101436541",
            },
            {
              groupId: "204687444",
              addonId: "101436542",
            },
            {
              groupId: "204687444",
              addonId: "101436543",
            },
            {
              groupId: "204687444",
              addonId: "101436544",
            },
            {
              groupId: "204687452",
              addonId: "135558625",
            },
            {
              groupId: "204687452",
              addonId: "134234111",
            },
            {
              groupId: "204687452",
              addonId: "134234118",
            },
            {
              groupId: "204687452",
              addonId: "134234101",
            },
            {
              groupId: "204687452",
              addonId: "134234090",
            },
            {
              groupId: "204687452",
              addonId: "134234103",
            },
            {
              groupId: "204687452",
              addonId: "134234106",
            },
            {
              groupId: "204687452",
              addonId: "134234116",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795956",
              variationId: "173627794",
            },
            {
              groupId: "55795957",
              variationId: "173627798",
            },
          ],
          price: 45400,
          addonCombinations: [
            {
              groupId: "204687440",
              addonId: "140544085",
            },
            {
              groupId: "204687440",
              addonId: "101436527",
            },
            {
              groupId: "204687440",
              addonId: "101436531",
            },
            {
              groupId: "204687440",
              addonId: "101436528",
            },
            {
              groupId: "204687430",
              addonId: "135558626",
            },
            {
              groupId: "204687430",
              addonId: "101436548",
            },
            {
              groupId: "204687430",
              addonId: "101436550",
            },
            {
              groupId: "204687430",
              addonId: "101436551",
            },
            {
              groupId: "204687430",
              addonId: "101436552",
            },
            {
              groupId: "204687430",
              addonId: "101436553",
            },
            {
              groupId: "204687430",
              addonId: "101436554",
            },
            {
              groupId: "204687430",
              addonId: "101436555",
            },
            {
              groupId: "204687430",
              addonId: "101436556",
            },
            {
              groupId: "204687430",
              addonId: "101436557",
            },
            {
              groupId: "204687436",
              addonId: "135558624",
            },
            {
              groupId: "204687436",
              addonId: "134234088",
            },
            {
              groupId: "204687436",
              addonId: "134234100",
            },
            {
              groupId: "204687436",
              addonId: "134234098",
            },
            {
              groupId: "204687436",
              addonId: "134234092",
            },
            {
              groupId: "204687436",
              addonId: "134234104",
            },
            {
              groupId: "204687436",
              addonId: "134234097",
            },
            {
              groupId: "204687436",
              addonId: "134234089",
            },
            {
              groupId: "204687420",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795956",
              variationId: "173627794",
            },
            {
              groupId: "55795957",
              variationId: "173627802",
            },
          ],
          price: 79800,
          addonCombinations: [
            {
              groupId: "204687440",
              addonId: "140544085",
            },
            {
              groupId: "204687440",
              addonId: "101436527",
            },
            {
              groupId: "204687440",
              addonId: "101436531",
            },
            {
              groupId: "204687440",
              addonId: "101436528",
            },
            {
              groupId: "204687423",
              addonId: "117622336",
            },
            {
              groupId: "204687444",
              addonId: "135558627",
            },
            {
              groupId: "204687444",
              addonId: "101436533",
            },
            {
              groupId: "204687444",
              addonId: "101436535",
            },
            {
              groupId: "204687444",
              addonId: "101436536",
            },
            {
              groupId: "204687444",
              addonId: "101436537",
            },
            {
              groupId: "204687444",
              addonId: "101436538",
            },
            {
              groupId: "204687444",
              addonId: "101436539",
            },
            {
              groupId: "204687444",
              addonId: "101436540",
            },
            {
              groupId: "204687444",
              addonId: "101436541",
            },
            {
              groupId: "204687444",
              addonId: "101436542",
            },
            {
              groupId: "204687444",
              addonId: "101436543",
            },
            {
              groupId: "204687444",
              addonId: "101436544",
            },
            {
              groupId: "204687452",
              addonId: "135558625",
            },
            {
              groupId: "204687452",
              addonId: "134234111",
            },
            {
              groupId: "204687452",
              addonId: "134234118",
            },
            {
              groupId: "204687452",
              addonId: "134234101",
            },
            {
              groupId: "204687452",
              addonId: "134234090",
            },
            {
              groupId: "204687452",
              addonId: "134234103",
            },
            {
              groupId: "204687452",
              addonId: "134234106",
            },
            {
              groupId: "204687452",
              addonId: "134234116",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795956",
              variationId: "200980602",
            },
            {
              groupId: "55795957",
              variationId: "200980603",
            },
          ],
          price: 45400,
          addonCombinations: [
            {
              groupId: "204687440",
              addonId: "140544085",
            },
            {
              groupId: "204687440",
              addonId: "101436527",
            },
            {
              groupId: "204687440",
              addonId: "101436531",
            },
            {
              groupId: "204687440",
              addonId: "101436528",
            },
            {
              groupId: "204687430",
              addonId: "135558626",
            },
            {
              groupId: "204687430",
              addonId: "101436548",
            },
            {
              groupId: "204687430",
              addonId: "101436550",
            },
            {
              groupId: "204687430",
              addonId: "101436551",
            },
            {
              groupId: "204687430",
              addonId: "101436552",
            },
            {
              groupId: "204687430",
              addonId: "101436553",
            },
            {
              groupId: "204687430",
              addonId: "101436554",
            },
            {
              groupId: "204687430",
              addonId: "101436555",
            },
            {
              groupId: "204687430",
              addonId: "101436556",
            },
            {
              groupId: "204687430",
              addonId: "101436557",
            },
            {
              groupId: "204687436",
              addonId: "135558624",
            },
            {
              groupId: "204687436",
              addonId: "134234088",
            },
            {
              groupId: "204687436",
              addonId: "134234100",
            },
            {
              groupId: "204687436",
              addonId: "134234098",
            },
            {
              groupId: "204687436",
              addonId: "134234092",
            },
            {
              groupId: "204687436",
              addonId: "134234104",
            },
            {
              groupId: "204687436",
              addonId: "134234097",
            },
            {
              groupId: "204687436",
              addonId: "134234089",
            },
            {
              groupId: "204687420",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795956",
              variationId: "200980602",
            },
            {
              groupId: "55795957",
              variationId: "200980604",
            },
          ],
          price: 79800,
          addonCombinations: [
            {
              groupId: "204687440",
              addonId: "140544085",
            },
            {
              groupId: "204687440",
              addonId: "101436527",
            },
            {
              groupId: "204687440",
              addonId: "101436531",
            },
            {
              groupId: "204687440",
              addonId: "101436528",
            },
            {
              groupId: "204687423",
              addonId: "117622336",
            },
            {
              groupId: "204687444",
              addonId: "135558627",
            },
            {
              groupId: "204687444",
              addonId: "101436533",
            },
            {
              groupId: "204687444",
              addonId: "101436535",
            },
            {
              groupId: "204687444",
              addonId: "101436536",
            },
            {
              groupId: "204687444",
              addonId: "101436537",
            },
            {
              groupId: "204687444",
              addonId: "101436538",
            },
            {
              groupId: "204687444",
              addonId: "101436539",
            },
            {
              groupId: "204687444",
              addonId: "101436540",
            },
            {
              groupId: "204687444",
              addonId: "101436541",
            },
            {
              groupId: "204687444",
              addonId: "101436542",
            },
            {
              groupId: "204687444",
              addonId: "101436543",
            },
            {
              groupId: "204687444",
              addonId: "101436544",
            },
            {
              groupId: "204687452",
              addonId: "135558625",
            },
            {
              groupId: "204687452",
              addonId: "134234111",
            },
            {
              groupId: "204687452",
              addonId: "134234118",
            },
            {
              groupId: "204687452",
              addonId: "134234101",
            },
            {
              groupId: "204687452",
              addonId: "134234090",
            },
            {
              groupId: "204687452",
              addonId: "134234103",
            },
            {
              groupId: "204687452",
              addonId: "134234106",
            },
            {
              groupId: "204687452",
              addonId: "134234116",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795956",
              variationId: "173627795",
            },
            {
              groupId: "55795957",
              variationId: "173627799",
            },
          ],
          price: 45400,
          addonCombinations: [
            {
              groupId: "204687440",
              addonId: "140544085",
            },
            {
              groupId: "204687440",
              addonId: "101436527",
            },
            {
              groupId: "204687440",
              addonId: "101436531",
            },
            {
              groupId: "204687440",
              addonId: "101436528",
            },
            {
              groupId: "204687430",
              addonId: "135558626",
            },
            {
              groupId: "204687430",
              addonId: "101436548",
            },
            {
              groupId: "204687430",
              addonId: "101436550",
            },
            {
              groupId: "204687430",
              addonId: "101436551",
            },
            {
              groupId: "204687430",
              addonId: "101436552",
            },
            {
              groupId: "204687430",
              addonId: "101436553",
            },
            {
              groupId: "204687430",
              addonId: "101436554",
            },
            {
              groupId: "204687430",
              addonId: "101436555",
            },
            {
              groupId: "204687430",
              addonId: "101436556",
            },
            {
              groupId: "204687430",
              addonId: "101436557",
            },
            {
              groupId: "204687436",
              addonId: "135558624",
            },
            {
              groupId: "204687436",
              addonId: "134234088",
            },
            {
              groupId: "204687436",
              addonId: "134234100",
            },
            {
              groupId: "204687436",
              addonId: "134234098",
            },
            {
              groupId: "204687436",
              addonId: "134234092",
            },
            {
              groupId: "204687436",
              addonId: "134234104",
            },
            {
              groupId: "204687436",
              addonId: "134234097",
            },
            {
              groupId: "204687436",
              addonId: "134234089",
            },
            {
              groupId: "204687420",
              addonId: "101436545",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795956",
              variationId: "173627795",
            },
            {
              groupId: "55795957",
              variationId: "173627803",
            },
          ],
          price: 79800,
          addonCombinations: [
            {
              groupId: "204687440",
              addonId: "140544085",
            },
            {
              groupId: "204687440",
              addonId: "101436527",
            },
            {
              groupId: "204687440",
              addonId: "101436531",
            },
            {
              groupId: "204687440",
              addonId: "101436528",
            },
            {
              groupId: "204687423",
              addonId: "117622336",
            },
            {
              groupId: "204687444",
              addonId: "135558627",
            },
            {
              groupId: "204687444",
              addonId: "101436533",
            },
            {
              groupId: "204687444",
              addonId: "101436535",
            },
            {
              groupId: "204687444",
              addonId: "101436536",
            },
            {
              groupId: "204687444",
              addonId: "101436537",
            },
            {
              groupId: "204687444",
              addonId: "101436538",
            },
            {
              groupId: "204687444",
              addonId: "101436539",
            },
            {
              groupId: "204687444",
              addonId: "101436540",
            },
            {
              groupId: "204687444",
              addonId: "101436541",
            },
            {
              groupId: "204687444",
              addonId: "101436542",
            },
            {
              groupId: "204687444",
              addonId: "101436543",
            },
            {
              groupId: "204687444",
              addonId: "101436544",
            },
            {
              groupId: "204687452",
              addonId: "135558625",
            },
            {
              groupId: "204687452",
              addonId: "134234111",
            },
            {
              groupId: "204687452",
              addonId: "134234118",
            },
            {
              groupId: "204687452",
              addonId: "134234101",
            },
            {
              groupId: "204687452",
              addonId: "134234090",
            },
            {
              groupId: "204687452",
              addonId: "134234103",
            },
            {
              groupId: "204687452",
              addonId: "134234106",
            },
            {
              groupId: "204687452",
              addonId: "134234116",
            },
          ],
        },
        {
          variations: [
            {
              groupId: "55795956",
              variationId: "173627796",
            },
            {
              groupId: "55795957",
              variationId: "173627800",
            },
          ],
          price: 94900,
          addonCombinations: [
            {
              groupId: "204687440",
              addonId: "140544085",
            },
            {
              groupId: "204687440",
              addonId: "101436527",
            },
            {
              groupId: "204687440",
              addonId: "101436531",
            },
            {
              groupId: "204687440",
              addonId: "101436528",
            },
            {
              groupId: "204687428",
              addonId: "135558623",
            },
            {
              groupId: "204687428",
              addonId: "114794726",
            },
            {
              groupId: "204687428",
              addonId: "114794727",
            },
            {
              groupId: "204687428",
              addonId: "114794728",
            },
            {
              groupId: "204687428",
              addonId: "114794729",
            },
            {
              groupId: "204687428",
              addonId: "114794725",
            },
            {
              groupId: "204687428",
              addonId: "114794737",
            },
            {
              groupId: "204687428",
              addonId: "114794738",
            },
            {
              groupId: "204687428",
              addonId: "114794733",
            },
            {
              groupId: "204687428",
              addonId: "114794734",
            },
            {
              groupId: "204687428",
              addonId: "114794735",
            },
            {
              groupId: "204687428",
              addonId: "114794736",
            },
            {
              groupId: "204687428",
              addonId: "114794731",
            },
            {
              groupId: "204687426",
              addonId: "135558629",
            },
            {
              groupId: "204687426",
              addonId: "134234099",
            },
            {
              groupId: "204687426",
              addonId: "134234109",
            },
            {
              groupId: "204687426",
              addonId: "134234110",
            },
            {
              groupId: "204687426",
              addonId: "134234115",
            },
            {
              groupId: "204687426",
              addonId: "134234117",
            },
            {
              groupId: "204687426",
              addonId: "134234119",
            },
            {
              groupId: "204687426",
              addonId: "134234114",
            },
          ],
        },
      ],
    },
    addons: [
      {
        groupId: "204687420",
        groupName: "Extra Cheese Topping",
        choices: [
          {
            id: "101436545",
            name: "Cheese",
            price: 6500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 1,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687426",
        groupName: "Add More Non Veg Toppings TNC",
        choices: [
          {
            id: "134234099",
            name: "Chicken Keema Masala",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234109",
            name: "Chicken Malai Tikka",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234110",
            name: "Chicken Pepperoni",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234115",
            name: "Chicken sausage",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234117",
            name: "Chicken Tikka",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234119",
            name: "Herbed Chicken",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234114",
            name: "Schezwan Chicken Meatball",
            price: 9900,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "135558629",
            name: "Marinated Chicken",
            price: 9900,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687428",
        groupName: "Add More Veg Toppings TNC",
        choices: [
          {
            id: "114794726",
            name: "Black Olives",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794727",
            name: "Cheese",
            price: 10900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794728",
            name: "Capsicum",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794729",
            name: "Herbed Veggies",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794725",
            name: "Jalapeno",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794737",
            name: "Paneer",
            price: 8500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794738",
            name: "Mushroom",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794733",
            name: "Onion",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794734",
            name: "Red Capsicum",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794735",
            name: "Red Paprika",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794736",
            name: "Sweet Corn",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "114794731",
            name: "Tomato",
            price: 8000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "135558623",
            name: "Marinated Paneer",
            price: 8500,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687430",
        groupName: "Add More Veg Toppings Personal",
        choices: [
          {
            id: "135558626",
            name: "Marinated Paneer",
            price: 5500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436548",
            name: "Capsicum",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436550",
            name: "Jalapeno",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436551",
            name: "Mushroom",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436552",
            name: "Onion",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436553",
            name: "Paneer",
            price: 5500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436554",
            name: "Red Paprika",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436555",
            name: "Red Capsicum",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436556",
            name: "Sweet Corn",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436557",
            name: "Tomato",
            price: 4500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687436",
        groupName: "Add More Non-Veg Toppings Personal",
        choices: [
          {
            id: "134234088",
            name: "Chicken Pepperoni",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234100",
            name: "Chicken Sausage",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234098",
            name: "Chicken Tikka",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234092",
            name: "Chicken Malai Tikka",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234104",
            name: "Herbed Chicken",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234097",
            name: "Schezwan Chicken Meatball",
            price: 6500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234089",
            name: "Chicken Keema Masala",
            price: 6000,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "135558624",
            name: "Marinated Chicken",
            price: 6500,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687440",
        groupName: "Make it a Meal",
        choices: [
          {
            id: "140544085",
            name: "Indi Cheese Pocket - Flat Rs 20 Off",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436527",
            name: "Classic BreadStix : Flat Rs 20 Off",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436531",
            name: "Choco Volcano",
            price: 9900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436528",
            name: "Cheese Garlic Bread : Flat Rs 20 Off",
            price: 13900,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 4,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687444",
        groupName: "Add More Veg Toppings",
        choices: [
          {
            id: "101436533",
            name: "Black Olives",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436535",
            name: "Capsicum",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436536",
            name: "Herbed Veggies",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436537",
            name: "Jalapeno",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436538",
            name: "Mushroom",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436539",
            name: "Onion",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436540",
            name: "Paneer",
            price: 7500,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436541",
            name: "Red Paprika",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436542",
            name: "Red Capsicum",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436543",
            name: "Sweet Corn",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "101436544",
            name: "Tomato",
            price: 7000,
            inStock: 1,
            isVeg: 1,
            isEnabled: 1,
          },
          {
            id: "135558627",
            name: "Marinated Paneer",
            price: 7500,
            isVeg: 1,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
      {
        groupId: "204687452",
        groupName: "Add More Non-Veg Toppings Medium",
        choices: [
          {
            id: "134234111",
            name: "Chicken Pepperoni",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234118",
            name: "Chicken Tikka",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234101",
            name: "Chicken Sausage",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234090",
            name: "Chicken Malai Tikka",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234103",
            name: "Herbed Chicken",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234106",
            name: "Chicken Keema Masala",
            price: 8000,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "134234116",
            name: "Schezwan Chicken Meatball",
            price: 8500,
            inStock: 1,
            isEnabled: 1,
          },
          {
            id: "135558625",
            name: "Marinated Chicken",
            price: 8500,
            isEnabled: 1,
          },
        ],
        maxAddons: 2,
        maxFreeAddons: -1,
      },
    ],
    itemAttribute: {
      vegClassifier: "NONVEG",
      portionSize: "Serves 1",
    },
    defaultPrice: 37900,
    ribbon: {},
    showImage: true,
    offerTags: [
      {
        title: "60% OFF",
        subTitle: "USE TRYNEW",
        textColor: "#DB6742",
        backgroundColor: "#FAE8E3",
        matchText: "SILD",
      },
    ],
    itemBadge: {},
    badgesV2: {},
    ratings: {
      aggregatedRating: {
        rating: "4.9",
        ratingCount: "24 ratings",
        ratingCountV2: "24",
      },
      ratingsPresentationConfig: {
        bgGradient: {
          colours: ["#C8F9E5", "#00FFFFFF"],
          gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
        },
        ratingIconColor: "rating_very_good",
        ratingTextColor: "rating_very_good",
        ratingCountTextColor: "rating_very_good",
        ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
        ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
      },
    },
    itemPriceStrikeOff: true,
    offerIds: ["7073b976-05da-4329-a969-37b559a97efc"],
    parentId: "31609105",
  },
  {
    id: "117548052",
    name: "Classic Onion Capsicum",
    category: "Flavour Fun Range",
    description:
      "Serves 1 | Pizza topped with our classic pan sauce, crunchy onion & capsicum and a flavourful dressing. (307 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/16/d13a98aa-2f5c-4e1b-9b97-0205353a3d86_f888407f-6e73-4c2b-b016-d284e6d65f84.jpg_compressed",
    inStock: 1,
    isVeg: 1,
    finalPrice: 9900,
    variants: {},
    variantsV2: {
      variantGroups: [
        {
          groupId: "37445866",
          name: "Size",
          variations: [
            {
              name: "Personal",
              default: 1,
              id: "117133071",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "37445867",
                variationId: "117133074",
              },
            },
          ],
        },
        {
          groupId: "37445867",
          name: "Choose your Crust",
          variations: [
            {
              name: "Pan",
              price: 109,
              default: 1,
              id: "117133074",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
          ],
        },
      ],
      pricingModels: [
        {
          variations: [
            {
              groupId: "37445866",
              variationId: "117133071",
            },
            {
              groupId: "37445867",
              variationId: "117133074",
            },
          ],
          price: 10900,
          finalPrice: {
            units: "99",
          },
        },
      ],
    },
    itemAttribute: {
      vegClassifier: "VEG",
      portionSize: "Serves 1",
    },
    defaultPrice: 10900,
    ribbon: {
      text: "Bestseller",
      textColor: "#ffffff",
      topBackgroundColor: "#d53d4c",
      bottomBackgroundColor: "#b02331",
    },
    showImage: true,
    offerTags: [
      {
        matchText: "SILD",
      },
      {
        title: "60% OFF",
        subTitle: "USE TRYNEW",
        textColor: "#DB6742",
        backgroundColor: "#FAE8E3",
        matchText: "SILD",
      },
    ],
    itemBadge: {},
    badgesV2: {},
    itemNudgeType: "FinalPrice",
    isBestseller: true,
    ratings: {
      aggregatedRating: {
        rating: "4.0",
        ratingCount: "230 ratings",
        ratingCountV2: "230",
      },
      ratingsPresentationConfig: {
        bgGradient: {
          colours: ["#C8F9E5", "#00FFFFFF"],
          gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
        },
        ratingIconColor: "rating_very_good",
        ratingTextColor: "rating_very_good",
        ratingCountTextColor: "rating_very_good",
        ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
        ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
      },
    },
    itemPriceStrikeOff: true,
    cartContext: "quick_prep",
    offerIds: [
      "a8372c7e-6c6d-4d1b-bbff-d968d2bbf0db",
      "7073b976-05da-4329-a969-37b559a97efc",
    ],
    isNinetyninestoreItem: true,
    parentId: "47040143",
  },
  {
    id: "133111819",
    name: "Cheesy Spicy Delight",
    category: "Flavour Fun Range",
    description:
      "Pizza topped with mozzarella cheese, a flavourful dressing, onion and spicy green chilli, sprinkled with our signature spiced seasoning. (367 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/17/a0f6c844-9018-4e2b-863a-ea927066e424_0433fd68-7144-4663-86f6-8430a633dbc6.jpg_compressed",
    inStock: 1,
    isVeg: 1,
    variants: {},
    variantsV2: {
      variantGroups: [
        {
          groupId: "37445918",
          name: "Size",
          variations: [
            {
              name: "Personal",
              default: 1,
              id: "117133317",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "37445919",
                variationId: "117133318",
              },
            },
          ],
        },
        {
          groupId: "37445919",
          name: "Choose your Crust",
          variations: [
            {
              name: "Pan",
              price: 169,
              default: 1,
              id: "117133318",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
          ],
        },
      ],
      pricingModels: [
        {
          variations: [
            {
              groupId: "37445918",
              variationId: "117133317",
            },
            {
              groupId: "37445919",
              variationId: "117133318",
            },
          ],
          price: 16900,
        },
      ],
    },
    itemAttribute: {
      vegClassifier: "VEG",
    },
    defaultPrice: 16900,
    ribbon: {},
    showImage: true,
    offerTags: [
      {
        title: "60% OFF",
        subTitle: "USE TRYNEW",
        textColor: "#DB6742",
        backgroundColor: "#FAE8E3",
        matchText: "SILD",
      },
    ],
    itemBadge: {},
    badgesV2: {},
    ratings: {
      aggregatedRating: {
        rating: "4.1",
        ratingCount: "19 ratings",
        ratingCountV2: "19",
      },
      ratingsPresentationConfig: {
        bgGradient: {
          colours: ["#C8F9E5", "#00FFFFFF"],
          gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
        },
        ratingIconColor: "rating_very_good",
        ratingTextColor: "rating_very_good",
        ratingCountTextColor: "rating_very_good",
        ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
        ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
      },
    },
    itemPriceStrikeOff: true,
    offerIds: ["7073b976-05da-4329-a969-37b559a97efc"],
    parentId: "77519006",
  },
  {
    id: "133111822",
    name: "Chilli Paneer Sizzle",
    category: "Flavour Fun Range",
    description:
      "Pizza topped with spiced paneer, a spicy Schezwan sauce, juicy tomato, crunchy onion & capsicum and a flavourful dressing. (298 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/16/4cbb05b7-a58e-41e5-9ac9-6e1dd9c7e64f_b046f848-fbdf-43dd-9a50-39a2528d2eab.jpg",
    inStock: 1,
    isVeg: 1,
    variants: {},
    variantsV2: {
      variantGroups: [
        {
          groupId: "37445941",
          name: "Size",
          variations: [
            {
              name: "Personal",
              default: 1,
              id: "117133402",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "37445943",
                variationId: "117133404",
              },
            },
          ],
        },
        {
          groupId: "37445943",
          name: "Choose your Crust",
          variations: [
            {
              name: "Pan",
              price: 189,
              default: 1,
              id: "117133404",
              inStock: 1,
              isVeg: 1,
              isEnabled: 1,
            },
          ],
        },
      ],
      pricingModels: [
        {
          variations: [
            {
              groupId: "37445941",
              variationId: "117133402",
            },
            {
              groupId: "37445943",
              variationId: "117133404",
            },
          ],
          price: 18900,
        },
      ],
    },
    itemAttribute: {
      vegClassifier: "VEG",
    },
    defaultPrice: 18900,
    ribbon: {},
    showImage: true,
    offerTags: [
      {
        title: "60% OFF",
        subTitle: "USE TRYNEW",
        textColor: "#DB6742",
        backgroundColor: "#FAE8E3",
        matchText: "SILD",
      },
    ],
    itemBadge: {},
    badgesV2: {},
    ratings: {
      aggregatedRating: {
        rating: "4.1",
        ratingCount: "38 ratings",
        ratingCountV2: "38",
      },
      ratingsPresentationConfig: {
        bgGradient: {
          colours: ["#C8F9E5", "#00FFFFFF"],
          gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
        },
        ratingIconColor: "rating_very_good",
        ratingTextColor: "rating_very_good",
        ratingCountTextColor: "rating_very_good",
        ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
        ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
      },
    },
    itemPriceStrikeOff: true,
    offerIds: ["7073b976-05da-4329-a969-37b559a97efc"],
    parentId: "77519007",
  },
  {
    id: "133111825",
    name: "Classic Chicken Pepperoni & Onion",
    category: "Flavour Fun Range",
    description:
      "Pizza topped with our classic signature pan sauce, chicken pepperoni, crunchy onion and a flavourful dressing. (332 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/16/89388c2c-cf71-41d0-8836-16b6db60b806_2a0c2718-fb4f-47b1-b445-2f56bea382a8.jpg",
    inStock: 1,
    variants: {},
    variantsV2: {
      variantGroups: [
        {
          groupId: "37445956",
          name: "Size",
          variations: [
            {
              name: "Personal",
              default: 1,
              id: "117133439",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "37445957",
                variationId: "117133440",
              },
            },
          ],
        },
        {
          groupId: "37445957",
          name: "Choose your Crust",
          variations: [
            {
              name: "Pan",
              price: 159,
              default: 1,
              id: "117133440",
              inStock: 1,
              isEnabled: 1,
            },
          ],
        },
      ],
      pricingModels: [
        {
          variations: [
            {
              groupId: "37445956",
              variationId: "117133439",
            },
            {
              groupId: "37445957",
              variationId: "117133440",
            },
          ],
          price: 15900,
        },
      ],
    },
    itemAttribute: {
      vegClassifier: "NONVEG",
    },
    defaultPrice: 15900,
    ribbon: {},
    showImage: true,
    offerTags: [
      {
        title: "60% OFF",
        subTitle: "USE TRYNEW",
        textColor: "#DB6742",
        backgroundColor: "#FAE8E3",
        matchText: "SILD",
      },
    ],
    itemBadge: {},
    badgesV2: {},
    ratings: {
      aggregatedRating: {
        rating: "4.4",
        ratingCount: "9 ratings",
        ratingCountV2: "9",
      },
      ratingsPresentationConfig: {
        bgGradient: {
          colours: ["#C8F9E5", "#00FFFFFF"],
          gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
        },
        ratingIconColor: "rating_very_good",
        ratingTextColor: "rating_very_good",
        ratingCountTextColor: "rating_very_good",
        ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
        ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
      },
    },
    itemPriceStrikeOff: true,
    offerIds: ["7073b976-05da-4329-a969-37b559a97efc"],
    parentId: "77519008",
  },
  {
    id: "133111824",
    name: "Classic Herbed Chicken & Capsicum",
    category: "Flavour Fun Range",
    description:
      "Pizza topped with our classic signature pan sauce, herbed chicken, crunchy capsicum and a flavourful dressing. (331 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/16/d13cbf3c-bea0-44aa-8fe8-3d52e7f4b5fa_819c0696-a813-4e36-aee7-c78410473a6f.jpg",
    inStock: 1,
    variants: {},
    variantsV2: {
      variantGroups: [
        {
          groupId: "37445954",
          name: "Size",
          variations: [
            {
              name: "Personal",
              default: 1,
              id: "117133437",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "37445955",
                variationId: "117133438",
              },
            },
          ],
        },
        {
          groupId: "37445955",
          name: "Choose your Crust",
          variations: [
            {
              name: "Pan",
              price: 179,
              default: 1,
              id: "117133438",
              inStock: 1,
              isEnabled: 1,
            },
          ],
        },
      ],
      pricingModels: [
        {
          variations: [
            {
              groupId: "37445954",
              variationId: "117133437",
            },
            {
              groupId: "37445955",
              variationId: "117133438",
            },
          ],
          price: 17900,
        },
      ],
    },
    itemAttribute: {
      vegClassifier: "NONVEG",
    },
    defaultPrice: 17900,
    ribbon: {},
    showImage: true,
    offerTags: [
      {
        title: "60% OFF",
        subTitle: "USE TRYNEW",
        textColor: "#DB6742",
        backgroundColor: "#FAE8E3",
        matchText: "SILD",
      },
    ],
    itemBadge: {},
    badgesV2: {},
    ratings: {
      aggregatedRating: {
        rating: "4.5",
        ratingCount: "9 ratings",
        ratingCountV2: "9",
      },
      ratingsPresentationConfig: {
        bgGradient: {
          colours: ["#C8F9E5", "#00FFFFFF"],
          gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
        },
        ratingIconColor: "rating_very_good",
        ratingTextColor: "rating_very_good",
        ratingCountTextColor: "rating_very_good",
        ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
        ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
      },
    },
    itemPriceStrikeOff: true,
    offerIds: ["7073b976-05da-4329-a969-37b559a97efc"],
    parentId: "77519009",
  },
  {
    id: "133111823",
    name: "Chatpata Chicken Feast",
    category: "Flavour Fun Range",
    description:
      "Pizza topped with a spicy tandoori sauce, Schezwan chicken meatballs, crunchy onion & capsicum, green chilli, juicy tomato and a flavourful dressing. (294 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/16/aaf412f3-ddd0-4da3-8461-0a8bc424719d_4bc316aa-16ae-46d6-9d78-f2917b072a38.jpg",
    inStock: 1,
    variants: {},
    variantsV2: {
      variantGroups: [
        {
          groupId: "37445946",
          name: "Size",
          variations: [
            {
              name: "Personal",
              default: 1,
              id: "117133419",
              inStock: 1,
              isEnabled: 1,
              dependantVariation: {
                groupId: "37445947",
                variationId: "117133420",
              },
            },
          ],
        },
        {
          groupId: "37445947",
          name: "Choose your Crust",
          variations: [
            {
              name: "Pan",
              price: 199,
              default: 1,
              id: "117133420",
              inStock: 1,
              isEnabled: 1,
            },
          ],
        },
      ],
      pricingModels: [
        {
          variations: [
            {
              groupId: "37445946",
              variationId: "117133419",
            },
            {
              groupId: "37445947",
              variationId: "117133420",
            },
          ],
          price: 19900,
        },
      ],
    },
    itemAttribute: {
      vegClassifier: "NONVEG",
    },
    defaultPrice: 19900,
    ribbon: {},
    showImage: true,
    offerTags: [
      {
        title: "60% OFF",
        subTitle: "USE TRYNEW",
        textColor: "#DB6742",
        backgroundColor: "#FAE8E3",
        matchText: "SILD",
      },
    ],
    itemBadge: {},
    badgesV2: {},
    ratings: {
      aggregatedRating: {
        rating: "4.6",
        ratingCount: "3 ratings",
        ratingCountV2: "3",
      },
      ratingsPresentationConfig: {
        bgGradient: {
          colours: ["#C8F9E5", "#00FFFFFF"],
          gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
        },
        ratingIconColor: "rating_very_good",
        ratingTextColor: "rating_very_good",
        ratingCountTextColor: "rating_very_good",
        ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
        ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
      },
    },
    itemPriceStrikeOff: true,
    offerIds: ["7073b976-05da-4329-a969-37b559a97efc"],
    parentId: "77519004",
  },
  {
    id: "114792727",
    name: "Sprinkled Fries - New",
    category: "Appetizer",
    description:
      "Serves 1 | Baked fries seasoned with our signature peruvian seasoning (204 Kcal/100g) Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/16/366ad3ca-9597-4f0a-aa87-66ff29d4204d_8ee697df-7baa-49df-87dc-d6277bcf73fa.jpg",
    inStock: 1,
    isVeg: 1,
    price: 10900,
    variants: {},
    variantsV2: {},
    itemAttribute: {
      vegClassifier: "VEG",
      portionSize: "Serves 1",
    },
    ribbon: {},
    showImage: true,
    offerTags: [
      {
        title: "60% OFF",
        subTitle: "USE TRYNEW",
        textColor: "#DB6742",
        backgroundColor: "#FAE8E3",
        matchText: "SILD",
      },
    ],
    itemBadge: {},
    badgesV2: {},
    ratings: {
      aggregatedRating: {
        rating: "4.1",
        ratingCount: "35 ratings",
        ratingCountV2: "35",
      },
      ratingsPresentationConfig: {
        bgGradient: {
          colours: ["#C8F9E5", "#00FFFFFF"],
          gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
        },
        ratingIconColor: "rating_very_good",
        ratingTextColor: "rating_very_good",
        ratingCountTextColor: "rating_very_good",
        ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
        ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
      },
    },
    itemPriceStrikeOff: true,
    offerIds: ["7073b976-05da-4329-a969-37b559a97efc"],
    parentId: "66114575",
  },
  {
    id: "55965883",
    name: "Spicy Baked Chicken Wings 4pc",
    category: "Appetizer",
    description:
      "Serves 1 | 4 pcs of tender and juicy sweet chilly chicken wings (189 Kcal/100g) Contains Cereals containing Gluten (Wheat) & Soya.",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/17/03653d71-0f72-4f8d-9bb0-c96d8038ee7d_21b9ecf2-4aeb-49d9-a513-54140c5c4a8a.jpg",
    inStock: 1,
    price: 20900,
    variants: {},
    variantsV2: {},
    itemAttribute: {
      vegClassifier: "NONVEG",
      portionSize: "Serves 1",
    },
    ribbon: {},
    showImage: true,
    offerTags: [
      {
        title: "60% OFF",
        subTitle: "USE TRYNEW",
        textColor: "#DB6742",
        backgroundColor: "#FAE8E3",
        matchText: "SILD",
      },
    ],
    itemBadge: {},
    badgesV2: {},
    ratings: {
      aggregatedRating: {
        rating: "4.0",
        ratingCount: "2 ratings",
        ratingCountV2: "2",
      },
      ratingsPresentationConfig: {
        bgGradient: {
          colours: ["#C8F9E5", "#00FFFFFF"],
          gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
        },
        ratingIconColor: "rating_very_good",
        ratingTextColor: "rating_very_good",
        ratingCountTextColor: "rating_very_good",
        ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
        ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
      },
    },
    itemPriceStrikeOff: true,
    offerIds: ["7073b976-05da-4329-a969-37b559a97efc"],
    parentId: "31608911",
  },
  {
    id: "119747221",
    name: "Brow-wow-nie",
    category: "Drinks & Desserts",
    description:
      "Serves 1 | A divine choco brownie for your all time chocolate cravings (273 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/16/c99e2359-999f-410a-be36-89f5dd86fc4e_be0bb96e-ae2b-405a-abaa-a80f7551c3a5.jpg",
    inStock: 1,
    isVeg: 1,
    price: 10900,
    variants: {},
    variantsV2: {},
    itemAttribute: {
      vegClassifier: "VEG",
      portionSize: "Serves 1",
    },
    ribbon: {},
    showImage: true,
    offerTags: [
      {
        title: "60% OFF",
        subTitle: "USE TRYNEW",
        textColor: "#DB6742",
        backgroundColor: "#FAE8E3",
        matchText: "SILD",
      },
    ],
    itemBadge: {},
    badgesV2: {},
    ratings: {
      aggregatedRating: {
        rating: "2.5",
        ratingCount: "4 ratings",
        ratingCountV2: "4",
      },
      ratingsPresentationConfig: {
        bgGradient: {
          colours: ["#FFF0CD", "#00FFFFFF"],
          gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
        },
        ratingIconColor: "rating_low",
        ratingTextColor: "rating_low",
        ratingCountTextColor: "rating_low",
        ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
        ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
      },
    },
    itemPriceStrikeOff: true,
    offerIds: ["7073b976-05da-4329-a969-37b559a97efc"],
    parentId: "68626769",
  },
  {
    id: "70797168",
    name: "Choco Volcano",
    category: "Drinks & Desserts",
    description:
      "Serves 1 | Warm choco cake with gooey center (262 Kcal/100g). Contains Cereals containing Gluten (Wheat), Soya and Milk & Milk Products.",
    imageId:
      "FOOD_CATALOG/IMAGES/CMS/2025/4/16/f70ec3a0-baa2-4b7d-a1f3-2f16c10028c3_f127c54f-8b53-45f1-b92f-a62e650bf334.jpg",
    inStock: 1,
    isVeg: 1,
    price: 9900,
    variants: {},
    variantsV2: {},
    itemAttribute: {
      vegClassifier: "VEG",
      portionSize: "Serves 1",
    },
    ribbon: {},
    showImage: true,
    offerTags: [
      {
        title: "60% OFF",
        subTitle: "USE TRYNEW",
        textColor: "#DB6742",
        backgroundColor: "#FAE8E3",
        matchText: "SILD",
      },
    ],
    itemBadge: {},
    badgesV2: {},
    ratings: {
      aggregatedRating: {
        rating: "4.3",
        ratingCount: "371 ratings",
        ratingCountV2: "371",
      },
      ratingsPresentationConfig: {
        bgGradient: {
          colours: ["#C8F9E5", "#00FFFFFF"],
          gradientDirection: "GRADIENT_DIRECTION_LEFT_TO_RIGHT",
        },
        ratingIconColor: "rating_very_good",
        ratingTextColor: "rating_very_good",
        ratingCountTextColor: "rating_very_good",
        ratingFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
        ratingCountFontName: "FONT_NAME_V2_OVERLINE_NEUTRAL_BOLD",
      },
    },
    itemPriceStrikeOff: true,
    offerIds: ["7073b976-05da-4329-a969-37b559a97efc"],
    parentId: "31607330",
  },
];

export default menuData;
