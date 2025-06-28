import React, { useState } from "react";
import { reviewsData } from "../data/courseData";
import { renderStars } from "../utils/renderStars";
import { Star } from "lucide-react";

const LearnerReviewsComponent = () => {
  // Keep track of how many reviews to show (start with 3)
  const [visibleReviews, setVisibleReviews] = useState(3);

  // Function to show more reviews when button is clicked
  const showMoreReviews = () => {
    setVisibleReviews((prev) => prev + 3); // Show 3 more reviews each time
  };
  return (
    <div className="bg-white px-9 lg:px-20 py-16 rounded-lg shadow-sm">
      {/* Main title */}
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Learner Reviews</h2>

      <div className="flex flex-col lg:flex-row gap-0 lg:gap-32">
        {/* Left side: Rating summary */}
        <div className="w-full lg:w-1/3">
          {/* Overall rating display */}
          <div className="flex items-center gap-2 mb-4">
            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            <span className="text-2xl font-bold">
              {reviewsData.overallRating}
            </span>
            <span className="text-gray-600">
              {reviewsData.totalReviews.toLocaleString()} reviews
            </span>
          </div>

          {/* Rating breakdown bars */}
          <div className="space-y-2">
            {reviewsData.ratingBreakdown.map((rating) => (
              <div key={rating.stars} className="flex items-center gap-3">
                {/* Stars for this rating level */}
                <div className="flex">{renderStars(rating.stars)}</div>

                {/* Progress bar showing percentage */}
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{ width: `${rating.percentage}%` }}
                  ></div>
                </div>

                {/* Percentage text */}
                <span className="text-sm text-gray-600 w-8">
                  {rating.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side: Individual reviews */}
        <div className="w-full lg:w-2/3 space-y-6">
          {/* Show only the visible number of reviews */}
          {reviewsData.individualReviews
            .slice(0, visibleReviews)
            .map((review) => (
              <div
                key={review.id}
                className="border-b border p-3 lg:p-7 rounded-lg pb-6 last:border-b-0"
              >
                {/* Review header: user info and rating */}
                <div className="flex items-start gap-4 mb-3">
                  {/* User profile picture */}
                  <img
                    src={review.userImage}
                    alt={review.userName}
                    className="w-10 h-10 rounded-full"
                  />

                  <div className="flex-1">
                    {/* User name and rating stars */}
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-semibold text-gray-900">
                        {review.userName}
                      </h4>
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-yellow-500 font-medium">
                        {review.rating}
                      </span>
                    </div>

                    {/* Review date */}
                    <p className="text-sm text-gray-500">
                      Reviewed on {review.reviewDate}
                    </p>
                  </div>
                </div>

                {/* Review text */}
                <p className="text-gray-700 leading-relaxed ml-14">
                  {review.reviewText}
                </p>
              </div>
            ))}

          {/* Show "View more Reviews" button if there are more reviews to show */}
          {visibleReviews < reviewsData.individualReviews.length && (
            <div className="text-start">
              <button
                onClick={showMoreReviews}
                className="px-6 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors min-w-44 h-12 text-sm"
              >
                View more Reviews
              </button>
            </div>
          )}

          {/* Show message when all reviews are displayed */}
          {visibleReviews >= reviewsData.individualReviews.length &&
            reviewsData.individualReviews.length > 3 && (
              <div className="text-center pt-4">
                <p className="text-gray-500">All reviews displayed</p>
              </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default LearnerReviewsComponent;
