import Star from "../components/ui/star";

export const FiveStars = () => {
  return (
    <div className="flex items-center ">
      <Star filled={true} />
      <Star filled={true} />
      <Star filled={true} />
      <Star filled={true} />
      <Star filled={true} />
    </div>
  );
};

export const FourStars = () => {
  return (
    <div className="flex items-center ">
      <Star filled={true} />
      <Star filled={true} />
      <Star filled={true} />
      <Star filled={true} />
      <Star filled={false} />
    </div>
  );
};

export const ThreeStars = () => {
  return (
    <div className="flex items-center ">
      <Star filled={true} />
      <Star filled={true} />
      <Star filled={true} />
      <Star filled={false} />
      <Star filled={false} />
    </div>
  );
};

export const TwoStars = () => {
  return (
    <div className="flex items-center ">
      <Star filled={true} />
      <Star filled={true} />
      <Star filled={false} />
      <Star filled={false} />
      <Star filled={false} />
    </div>
  );
};

export const OneStar = () => {
  return (
    <div className="flex items-center">
      <Star filled={true} />
      <Star filled={false} />
      <Star filled={false} />
      <Star filled={false} />
      <Star filled={false} />
    </div>
  );
};
