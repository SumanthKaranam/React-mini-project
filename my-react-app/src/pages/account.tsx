import React from "react";
import "./account.css";
import Breadcrumbs from "../components/customBreadCrumbs";

const AccountPage: React.FC = () => {
  return (
    <>
      <Breadcrumbs />
      <h1> Welcome to your Account Page</h1>
    </>
  );
};

export default AccountPage;
