import { Typography } from "antd";
import "./content-layout.css";

type ContentLayoutProps = {
  header: string | React.ReactNode;
  children?: React.ReactNode;
};

const ContentLayout: React.FC<ContentLayoutProps> = ({ header, children }) => {
  return (
    <div className="content">
      <header>
        {typeof header === "string" ? (
          <Typography.Title
            level={1}
            style={{ marginBottom: "var(--default-margin)" }}
          >
            {header}
          </Typography.Title>
        ) : (
          header
        )}
      </header>
      {children}
    </div>
  );
};

export default ContentLayout;
