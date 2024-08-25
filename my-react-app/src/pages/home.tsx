import React from "react";
import { Typography, Card } from "antd";
import {
  HomeOutlined,
  AppstoreOutlined,
  UserOutlined,
  SettingOutlined,
  RocketOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./home.css";

const HomePage: React.FC = () => {
  return (
    <div className="homeContent">
      <Typography.Title level={2}>Welcome, Sumanth</Typography.Title>
      <Typography.Title level={3}>Your Account</Typography.Title>
      <div className="cardContainer">
        <Card className="card">
          <UserOutlined className="icon" />
          <p>Personal Information</p>
        </Card>
        <Card className="card">
          <SettingOutlined className="icon" />
          <p>
            <Link to="/page/account" className="customLink">
              Account Settings
            </Link>
          </p>
        </Card>
        <Card className="card">
          <UserSwitchOutlined className="icon" />
          <p>User Management</p>
        </Card>
        <Card className="card">
          <RocketOutlined className="icon" />
          <p>
            <Link to="/page/launchPad" className="customLink">
              LaunchPad
            </Link>
          </p>
        </Card>
      </div>
      <br></br>
      <Typography.Title level={3}>Explore</Typography.Title>
      <div className="cardContainer">
        <Card className="card">
          <AppstoreOutlined className="icon" />
          <p>
            <Link to="/page/marketPlace" className="customLink">
              Marketplace
            </Link>
          </p>
        </Card>
        <Card className="card">
          <HomeOutlined className="icon" />
          <p>Documentation</p>
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
