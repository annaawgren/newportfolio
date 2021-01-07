import { useEffect, useState } from "react";

export default function ImageWithDelay(props) {
  const { image, delay, transform } = props;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // console.log("setVisible True", image, delay);
      setIsVisible(true);
    }, delay);

    setTimeout(() => {
      // console.log("setVisible False", image, delay * 1000);
      // setIsVisible(false);
    }, delay + 5000);
  }, []);

  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }

  let randomImagePositionTop = getRandom(-100, 100);
  let randomImagePositionLeft = getRandom(-300, 300);
  let opacityValue = 0;

  if (isVisible == true) {
    opacityValue = 1;
  }

  const styles = {
    top: randomImagePositionTop,
    left: randomImagePositionLeft,
    transform: transform,
    opacity: opacityValue,
  };

  return (
    <div className="absolute top-0 left-1/2  transform -translate-x-1/2 ">
      <img
        className="h-80 object-contain relative opacity-0 transition duration-300 ease-in-out "
        src={image}
        style={styles}
      />

      <style jsx>{``}</style>
    </div>
  );
}
