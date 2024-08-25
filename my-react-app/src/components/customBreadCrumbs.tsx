import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";
import { getBreadcrumbItems } from "../routes";

interface BreadcrumbItem {
  title: string;
  link?: string;
}

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const items: BreadcrumbItem[] = getBreadcrumbItems(location.pathname);

  return (
    <Breadcrumb>
      {items.map((item, index) => (
        <Breadcrumb.Item key={index}>
          {item.link ? <Link to={item.link}>{item.title}</Link> : item.title}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
export default Breadcrumbs;
