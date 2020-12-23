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
    <div className={`${(top, left)} absolute`}>
      <img src={image} />
    </div>
  );
}
