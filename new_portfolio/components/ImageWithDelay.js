import { useEffect, useState } from "react";

export default function ImageWithDelay(props) {
  const { image, delay, top, left } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, delay);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
      <img className="h-80 object-contain" src={image} />
    </div>
  );
}
