import Star from "../components/ui/star";

export const FiveStars = () => {
  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          filled={true}
          className={`animate-fadeIn delay-${i * 100}`}
        />
      ))}
    </div>
  );
};

export const FourStars = () => {
  return (
    <div className="flex items-center">
      {[...Array(4)].map((_, i) => (
        <Star
          key={i}
          filled={true}
          className={`animate-fadeIn delay-${i * 100}`}
        />
      ))}
      <Star filled={false} className="animate-fadeIn delay-400" />
    </div>
  );
};

export const ThreeStars = () => {
  return (
    <div className="flex items-center">
      {[...Array(3)].map((_, i) => (
        <Star
          key={i}
          filled={true}
          className={`animate-fadeIn delay-${i * 100}`}
        />
      ))}
      <Star filled={false} className="animate-fadeIn delay-300" />
      <Star filled={false} className="animate-fadeIn delay-400" />
    </div>
  );
};

export const TwoStars = () => {
  return (
    <div className="flex items-center">
      {[...Array(2)].map((_, i) => (
        <Star
          key={i}
          filled={true}
          className={`animate-fadeIn delay-${i * 100}`}
        />
      ))}
      <Star filled={false} className="animate-fadeIn delay-200" />
      <Star filled={false} className="animate-fadeIn delay-300" />
      <Star filled={false} className="animate-fadeIn delay-400" />
    </div>
  );
};

export const OneStar = () => {
  return (
    <div className="flex items-center">
      {[...Array(1)].map((_, i) => (
        <Star
          key={i}
          filled={true}
          className={`animate-fadeIn delay-${i * 100}`}
        />
      ))}
      <Star filled={false} className="animate-fadeIn delay-100" />
      <Star filled={false} className="animate-fadeIn delay-200" />
      <Star filled={false} className="animate-fadeIn delay-300" />
      <Star filled={false} className="animate-fadeIn delay-400" />
    </div>
  );
};
