import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { syllabusData } from "../../data/courseData";

const SyllabusAccordion = () => {
  const [openSections, setOpenSection] = useState({});

  // This keeps track of which sections are open/closed
  const handleSectionClick = (sectionId) => {
    setOpenSection((currentOpenSections) => {
      // Make a copy of what's currently open
      const newOpenSections = { ...currentOpenSections };
      // If this section is already open, close it
      // If it's closed, open it
      if (newOpenSections[sectionId]) {
        newOpenSections[sectionId] = false; // Close it
      } else {
        newOpenSections[sectionId] = true; // Open it
      }

      return newOpenSections;
    });
  };
  return (
    <div className="bg-white rounded-lg shadow-sm mt-6">
      {/* Main title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Syllabus</h2>

      {/* Container for all the syllabus items */}
      <div className="space-y-4">
        {/* Loop through each item in our syllabus data */}
        {syllabusData.map((syllabusItem) => (
          <div
            key={syllabusItem.id}
            className="border border-gray-200 rounded-lg"
          >
            {/* This is the clickable header part */}
            <div
              className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => handleSectionClick(syllabusItem.id)}
            >
              {/* Left side: Arrow icon + Title */}
              <div className="flex items-center space-x-3">
                {/* Show different arrow based on if section is open or closed */}
                {openSections[syllabusItem.id] ? (
                  <ChevronDown className="w-5 h-5 text-gray-600" /> // Down arrow when open
                ) : (
                  <ChevronRight className="w-5 h-5 text-gray-600" /> // Right arrow when closed
                )}
                <h3 className="font-semibold text-sm lg:text-lg text-gray-900">
                  {syllabusItem.title}
                </h3>
              </div>

              {/* Right side: Lessons count + Duration */}
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <span>{syllabusItem.lessons} Lessons</span>
                <span>{syllabusItem.duration}</span>
              </div>
            </div>

            {/* This part only shows when the section is open */}
            {openSections[syllabusItem.id] && (
              <div className="px-4 pb-4 border-t border-gray-100">
                <p className="text-gray-600 mt-3">
                  Here's where you would put more details about{" "}
                  {syllabusItem.title}... Like lesson names, descriptions, or
                  whatever extra info you want to show.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusAccordion;
