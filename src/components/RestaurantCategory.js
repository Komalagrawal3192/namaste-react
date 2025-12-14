import menuData from "../utilities/mockResData";
import { useState } from "react";
import CategorySection from "./CategorySection";

const RestaurantCategory = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    { title: "Recommended", items: menuData.items },
    { title: "Top Picks", items: menuData.top_picks },
  ];

  return (
    <div>
      {categories.map((category, index) => (
        <CategorySection
          key={category.title}
          title={category.title}
          items={category.items}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
};

export default RestaurantCategory;
