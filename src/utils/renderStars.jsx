// Function to create star icons (filled or empty)

import { Star } from "lucide-react";

export const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        className={`w-4 h-4 ${
          i <= rating ? "fill-[#EAB308] text-[#EAB308]" : "text-gray-300"
        }`}
      />
    );
  }
  return stars;
};
