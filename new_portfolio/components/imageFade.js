import { useState, useRef, useEffect } from "react";

export const ImageFade = ({ duration, children }) => {
  let [loaded, setLoaded] = useState(false);
  let ref = useRef();

  const child = React.Children.only(children);
  const src = child.props.src;
  useEffect(() => {
    if (src) {
      const image = new Image();
      image.onload = () => {
        setLoaded(true);
      };
      image.src = src;
      ref.current = image;
    }

    return () => {
      if (ref.current) {
        ref.current.onload = null;
      }
    };
  }, [src]);

  const trans = `opacity ${duration || "1000ms"}`;
  return (
    <figure
      className={loaded ? "loaded" : ""}
      style={{
        transition: trans,
      }}
    >
      {children}
      <style jsx>
        {`
          figure {
            opacity: 0;
          }
          .loaded {
            opacity: 1;
          }
        `}
      </style>
    </figure>
  );
};
