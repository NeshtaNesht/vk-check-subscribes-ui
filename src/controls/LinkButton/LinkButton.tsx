import React from "react";
import "./link-button.css";
import { Typography } from "antd";
import { FlexBox } from "..";

type LinkButtonProps = {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
};

const LinkButton: React.FC<LinkButtonProps> = ({ icon, title, onClick }) => {
  return (
    <FlexBox
      gap="mini"
      className="link-button"
      alignItems="center"
      width="100%"
      onClick={onClick}
    >
      <div className="link-button-icon">{icon}</div>
      <Typography.Title level={3}>{title}</Typography.Title>
    </FlexBox>
  );
};

export default LinkButton;
