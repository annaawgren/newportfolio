import React, { useState, useEffect } from "react";

import { Transition } from "react-transition-group";

const childrenHeight = (node) => {
  let total = 0;
  if (node && node.children) {
    const children = node.children;
    for (let i = 0; i < children.length; i++) {
      total += children[i].offsetHeight;
    }
  }
  return total;
};

export const ExpandTransitionChild = ({
  enterDelay = 0,
  exitDelay = 0,
  duration = 300,
  minHeight = 0,
  withOpacity = false,
  children,
  ...props
}) => {
  const ref = React.createRef();
  let [height, setHeight] = useState(0);
  useEffect(() => {
    setHeight(childrenHeight(ref.current));
  });

  return (
    <Transition timeout={duration + Math.max(enterDelay, exitDelay)} {...props}>
      {(state) => (
        <div
          ref={ref}
          style={{
            overflow: "hidden",
            transform: "translate3d(0, 0, 0)",
            opacity: withOpacity
              ? state == "exited" || state == "exiting"
                ? 0
                : ref.current
                ? 1
                : ""
              : 1,
            height:
              state == "exited" || state == "exiting" ? minHeight : height,
            transitionDelay:
              state == "entered" || state == "entering"
                ? `${enterDelay}ms`
                : `${exitDelay}ms`,
            transitionDuration: `${duration}ms`,
            transitionProperty: `height, opacity`,
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default ExpandTransitionChild;
