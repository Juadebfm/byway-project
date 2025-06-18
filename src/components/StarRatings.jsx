import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Star Rating Component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          // Full Star
          return <FaStar key={index} className="w-4 h-4 text-yellow-400" />;
        } else if (index === fullStars && hasHalfStar) {
          // Half Star
          return (
            <FaStarHalfAlt key={index} className="w-4 h-4 text-yellow-400" />
          );
        } else {
          // Empty Star
          return <FaRegStar key={index} className="w-4 h-4 text-gray-300" />;
        }
      })}
    </div>
  );
};

export default StarRating;
