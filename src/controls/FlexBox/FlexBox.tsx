import React from "react";
import clsx from "clsx";
import css from "./FlexBox.module.css";

type FlexBoxProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  direction?: "column" | "row";
  alignItems?: "center" | "flex-start" | "flex-end";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around";
  gap?: "mini" | "small" | "default" | "large";
  height?: string;
  width?: string;
  wrap?: "wrap" | "nowrap";
  children?: React.ReactNode;
};

const FlexBox: React.FC<FlexBoxProps> = ({
  children,
  direction = "row",
  alignItems = "flex-start",
  justify = "flex-start",
  className: cN,
  gap,
  style,
  width,
  height,
  wrap = "nowrap",
  ...props
}) => {
  const className = clsx(
    css["flex"],
    css[`flex-direction-${direction}`],
    css[`flex-align-items-${alignItems}`],
    css[`flex-justify-${justify}`],
    css[`flex-wrap-${wrap}`],
    css[`flex-gap-${gap}`],
    cN
  );

  const styles = { width, height, ...style };
  return (
    <div className={className} style={styles} {...props}>
      {children}
    </div>
  );
};

export default FlexBox;
