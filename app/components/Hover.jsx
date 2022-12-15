import * as React from "react";

export default function Hover({ children }) {
  const [hovering, setHovering] = React.useState(false);

  const mouseOver = () => {
    setHovering(true);
  };
  const mouseOut = () => {
    setHovering(false);
  };

  return (
    <div onMouseOver={mouseOver} onMouseOut={mouseOut}>
      {children(hovering)}
    </div>
  );
}
