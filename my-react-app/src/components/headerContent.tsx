import React from "react";
import { Avatar, Typography, Dropdown, Menu, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./headerContent.css";

const HeaderContent: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <Button type="link" onClick={handleLogout}>
          Logout
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="headerContent">
      <Typography.Title level={2} style={{ color: "#32DB86" }}>
        /LiveRamp
      </Typography.Title>
      <Dropdown overlay={menu}>
        <Avatar icon={<UserOutlined />} />
      </Dropdown>
    </div>
  );
};

export default HeaderContent;
