import React from 'react';
import { Star, StarHalf } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  reviews?: number;
  size?: number;
  showText?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  reviews,
  size = 14,
  showText = true
}) => {
  const safeRating = typeof rating === 'number' && !isNaN(rating) ? rating : 0;
  const fullStars = Math.floor(safeRating);
  const hasHalfStar = safeRating % 1 >= 0.3 && safeRating % 1 < 0.8;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center text-amber-400">
        {Array.from({ length: Math.max(0, fullStars) }).map((_, i) => (
          <Star key={`full-${i}`} size={size} className="fill-amber-400 stroke-amber-400" />
        ))}
        {hasHalfStar && <StarHalf key="half" size={size} className="fill-amber-400 stroke-amber-400" />}
        {Array.from({ length: Math.max(0, emptyStars) }).map((_, i) => (
          <Star key={`empty-${i}`} size={size} className="text-gray-300 dark:text-zinc-600" />
        ))}
      </div>
      {showText && (
        <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 ml-1">
          {safeRating.toFixed(1)}
          {reviews !== undefined && (
            <span className="text-zinc-400 dark:text-zinc-500 font-normal ml-1">
              ({reviews})
            </span>
          )}
        </span>
      )}
    </div>
  );
};
