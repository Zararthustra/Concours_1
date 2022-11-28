export const ColorBubble = ({
  className,
  size,
  top,
  left,
  right,
  backgroundColor,
}) => {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        backgroundColor,
        top,
        left,
        right,
        borderRadius: "50%",
        position: "absolute",
        zIndex: "-1",
        transition: "all .5s",
        animation: "bubbleFadeIn 4s ease-in",
        opacity: "0.8",
      }}
    />
  );
};