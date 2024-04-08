"use client";

import { useState, useEffect } from "react";
import Star from "../components/ui/star";
import HalfStar from "../components/ui/halfstar";
import {
  FiveStars,
  FourStars,
  ThreeStars,
  TwoStars,
  OneStar,
} from "./constant";
import { StarComponentType, WithSkeletonProps } from "./types";

export function SnakeToTitleCase(snakeCaseString: string): string {
  return snakeCaseString
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export const WithSkeleton: React.FC<WithSkeletonProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-2 w-[140px] bg-gray-300 animate-pulse rounded-full" />
    );
  }

  return <>{children(loading)}</>;
};

export const RenderStars = (rating: number) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data with a 2-second delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const stars: React.ReactNode[] = [];

  // Calculate the number of full stars, half stars, and empty stars
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  const getAnimationStyle = (index: number) => ({
    animation: `fadeIn 1s ease-in-out ${2 + index * 0.5}s forwards`,
  });

  // Add full stars to the array with animation delay
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Star
        key={`full-${i}`}
        filled={true}
        className="animate-fadeIn"
        style={getAnimationStyle(i)}
      />
    );
  }

  // Add a half star to the array if needed, with animation delay
  if (halfStars) {
    stars.push(
      <HalfStar
        key="half"
        className="animate-fadeIn"
        style={getAnimationStyle(fullStars)}
      />
    );
  }

  // Add empty stars to the array with animation delay
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Star
        key={`empty-${i}`}
        filled={false}
        className="animate-fadeIn"
        style={getAnimationStyle(fullStars + halfStars + i)}
      />
    );
  }

  if (loading) {
    return (
      <div className="flex items-center">
        <Star filled={false} className="animate-pulse" />
        <Star filled={false} className="animate-pulse" />
        <Star filled={false} className="animate-pulse" />
        <Star filled={false} className="animate-pulse" />
        <Star filled={false} className="animate-pulse" />
      </div>
    );
  }

  return <div className="flex items-center">{stars}</div>;
};

export const RenderRatingStars = (rating: string) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout for 2 seconds before displaying the actual stars
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center">
        <Star filled={false} className="animate-pulse" />
        <Star filled={false} className="animate-pulse" />
        <Star filled={false} className="animate-pulse" />
        <Star filled={false} className="animate-pulse" />
        <Star filled={false} className="animate-pulse" />
      </div>
    );
  }

  // Define the type for the valid rating keys
  type ValidRatingKey =
    | "five_star_ratings"
    | "four_star_ratings"
    | "three_star_ratings"
    | "two_star_ratings"
    | "one_star_ratings";

  const StarComponents = {
    five_star_ratings: FiveStars,
    four_star_ratings: FourStars,
    three_star_ratings: ThreeStars,
    two_star_ratings: TwoStars,
    one_star_ratings: OneStar,
  };

  // Assert that rating is a valid key, otherwise return null
  const validRating = rating as ValidRatingKey;
  if (!validRating) {
    return null;
  }

  // Now TypeScript knows that validRating is one of the valid keys
  const StarComponent = StarComponents[validRating];
  return StarComponent ? <StarComponent /> : null;
};

export const GetNumberRatings = (rating: number) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching data with a 2-second delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-2 w-[50px] bg-gray-300 animate-pulse rounded-full" />
    );
  }

  return rating;
};
