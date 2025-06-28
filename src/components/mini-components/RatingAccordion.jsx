import { ChevronDown, ChevronUp, Star } from "lucide-react";
import { useState } from "react";

const Ratings = ({ rating, maxStars = 5 }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: maxStars }, (_, index) => (
        <Star
          key={index}
          className={`w-4 h-4 ${
            index < rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
};

const RatingAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ratings = [5, 4, 3, 2, 1];

  return (
    <div className="w-64 bg-white border-b border-gray-200 ">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none focus:ring-0 rounded-t-lg"
      >
        <span className="font-medium text-bywayTextDark">Rating</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-bywayTextDark" />
        ) : (
          <ChevronDown className="w-5 h-5 text-bywayTextDark" />
        )}
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="px-4 pb-4 space-y-3 border-t border-gray-100 py-5">
          {ratings.map((rating) => (
            <div key={rating} className="flex items-center space-x-2">
              <label htmlFor={`rating-${rating}`} className="cursor-pointer">
                <Ratings rating={rating} />
              </label>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RatingAccordion;
