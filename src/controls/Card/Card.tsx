import React from "react";
import "./card.css";
import clsx from "clsx";

type CardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  width?: string;
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  children,
  width,
  style,
  className,
  ...props
}) => {
  const styles = { ...style, width };
  return (
    <div className={clsx("card", className)} style={styles} {...props}>
      {children}
    </div>
  );
};

export default Card;
