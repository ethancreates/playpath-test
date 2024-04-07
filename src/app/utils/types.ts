export type TableData = {
  overview: {
    five_star_ratings: number;
    four_star_ratings: number;
    three_star_ratings: number;
    two_star_ratings: number;
    one_star_ratings: number;
  };
  details: {
    shipping_speed: {
      score: number;
      number_of_ratings: number;
    };
    item_accuracy: {
      score: number;
      number_of_ratings: number;
    };
    packaging_quality: {
      score: number;
      number_of_ratings: number;
    };
    seller_communication: {
      score: number;
      number_of_ratings: number;
    };
  };
};

export type RatingOverview = {
  five_star_ratings: number;
  four_star_ratings: number;
  three_star_ratings: number;
  two_star_ratings: number;
  one_star_ratings: number;
};

export type RatingProps = {
  overview: RatingOverview;
};
