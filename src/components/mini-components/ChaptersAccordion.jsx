import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const ChaptersAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [selectedChapters, setSelectedChapters] = useState(["15-20"]);

  const allChapterRanges = [
    "1-10",
    "10-15",
    "15-20",
    "20-25",
    "25-30",
    "30-35",
    "35-40",
    "40-45",
    "45-50",
    "50+",
  ];

  const visibleRanges = showMore
    ? allChapterRanges
    : allChapterRanges.slice(0, 4);

  const handleCheckboxChange = (range) => {
    setSelectedChapters((prev) =>
      prev.includes(range)
        ? prev.filter((item) => item !== range)
        : [...prev, range]
    );
  };

  return (
    <div className="w-64 bg-white border-b border-gray-200">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between text-left focus:outline-none focus:ring-0 rounded-t-lg"
      >
        <span className="font-medium text-bywayTextDark">Number of Chapters</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-bywayTextDark" />
        ) : (
          <ChevronDown className="w-5 h-5 text-bywayTextDark" />
        )}
      </button>

      {/* Accordion Content */}
      {isOpen && (
        <div className="px-4 pb-4 space-y-3 border-t border-gray-100 py-5">
          {visibleRanges.map((range) => (
            <div key={range} className="flex items-center space-x-2">
              <input
                type="checkbox"
                id={`chapters-${range}`}
                checked={selectedChapters.includes(range)}
                onChange={() => handleCheckboxChange(range)}
                className="w-4 h-4 text-bywayBlue border-gray-300 rounded focus:ring-bywayBlue"
              />
              <label
                htmlFor={`chapters-${range}`}
                className="cursor-pointer text-gray-700 text-sm"
              >
                {range}
              </label>
            </div>
          ))}

          {/* See More Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center space-x-1 text-bywayBlue hover:text-bywayBlue text-sm font-medium mt-3"
          >
            <span>{showMore ? "See Less" : "See More"}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                showMore ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChaptersAccordion;
