import React from "react";
import {
  AppstoreOutlined,
  HomeOutlined,
  UserOutlined,
  RocketOutlined,
  LockOutlined,
  LinkOutlined,
  IdcardOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import type { MenuProps } from "antd";
import "./sideBar.css";

type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  {
    key: "home",
    label: (
      <Link to="/page/home" className="custonLink">
        Home
      </Link>
    ),
    icon: <HomeOutlined />,
    title: "Home",
  },
  {
    key: "marketPlace",
    label: (
      <Link to="/page/marketPlace" className="custonLink">
        MarketPlace
      </Link>
    ),
    icon: <AppstoreOutlined />,
    title: "MarketPlace",
  },
  {
    key: "account",
    label: (
      <Link to="/page/account" className="custonLink">
        Account
      </Link>
    ),
    icon: <UserOutlined />,
    title: "Account",
  },
  {
    key: "launchPad",
    label: (
      <Link to="/page/launchPad" className="custonLink">
        LaunchPad
      </Link>
    ),
    icon: <RocketOutlined />,
    title: "LaunchPad",
  },
  {
    key: "privacyManager",
    label: (
      <Link to="/page/privacyManager" className="custonLink">
        Privacy Manager
      </Link>
    ),
    icon: <LockOutlined />,
    title: " Privacy Manager",
    children: [
      {
        key: "global",
        label: <Link to="/page/global">Global</Link>,
        title: "Global",
      },
      { key: "ccpa", label: <Link to="/page/ccpa">CCPA</Link>, title: "CCPA" },
      { key: "gdpr", label: <Link to="/page/gdpr">GDPR</Link>, title: "GDPR" },
      { key: "tags", label: <Link to="/page/tags">Tags</Link>, title: "Tags" },
    ],
  },
  {
    key: "preferenceLink",
    label: (
      <Link to="/page/preferenceLink" className="custonLink">
        Preference Link
      </Link>
    ),
    icon: <LinkOutlined />,
    title: "Preference Link",
  },
  {
    key: "preferenceLinkEnterprise",
    label: (
      <Link to="/page/preferenceLinkEnterprise" className="custonLink">
        PreferenceLink Enterprise
      </Link>
    ),
    icon: <LinkOutlined />,
    title: "PreferenceLink Enterprise",
  },
  {
    key: "identity",
    label: (
      <Link to="/page/identity" className="custonLink">
        Identity
      </Link>
    ),
    icon: <IdcardOutlined />,
    title: "Identity",
    children: [
      { key: "ats", label: <Link to="/page/ats">ATS</Link>, title: "ATS" },
      {
        key: "atsAnalytics",
        label: <Link to="/page/atsAnalytics">ATS Analytics</Link>,
        title: "ATS Analytics",
      },
    ],
  },
  {
    key: "registrationManager",
    label: (
      <Link to="/page/registrationManager" className="custonLink">
        Registration Manager
      </Link>
    ),
    icon: <FormOutlined />,
    title: "Registration Manager",
  },
];

const SiderMenu: React.FC = () => {
  return (
    <Menu
      // defaultSelectedKeys={['home']}
      // defaultOpenKeys={['privacyManager']}
      mode="inline"
      theme="dark"
      items={items}
      className="customMenu"
    />
  );
};

export default SiderMenu;
