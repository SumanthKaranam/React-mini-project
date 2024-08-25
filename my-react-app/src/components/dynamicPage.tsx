import React from "react";
import { useParams } from "react-router-dom";
import "./dynamicPage.css";
import HomePage from "../pages/home";
import MarketPlacePage from "../pages/marketPlace";
import AccountPage from "../pages/account";
import LaunchPadPage from "../pages/launchPad";
import preferenceLinkPage from "../pages/preferenceLink";
import preferenceLinkEnterprisePage from "../pages/preferenceLinkEnterprise";
import registrationManagerPage from "../pages/registrationManager";
import privacyManagerPage from "../pages/privacyManager/privacyManager";
import IdentityPage from "../pages/identity/identity";
import atsPage from "../pages/identity/subpages/ats";
import atsAnalyticsPage from "../pages/identity/subpages/atsAnalytics";
import tagsPage from "../pages/privacyManager/subpages/tags";
import ccpaPage from "../pages/privacyManager/subpages/ccpa";
import gdprPage from "../pages/privacyManager/subpages/gdpr";
import globalPage from "../pages/privacyManager/subpages/global";
interface RouteParams {
  optionId: string;
  [key: string]: string | undefined;
}

interface PageComponents {
  [key: string]: React.FC;
}

const pageComponents: PageComponents = {
  home: HomePage,
  marketPlace: MarketPlacePage,
  account: AccountPage,
  launchPad: LaunchPadPage,
  preferenceLink: preferenceLinkPage,
  preferenceLinkEnterprise: preferenceLinkEnterprisePage,
  registrationManager: registrationManagerPage,
  privacyManager: privacyManagerPage,
  tags: tagsPage,
  ccpa: ccpaPage,
  gdpr: gdprPage,
  global: globalPage,
  identity: IdentityPage,
  ats: atsPage,
  atsAnalytics: atsAnalyticsPage,
};

const DynamicPage: React.FC = () => {
  const { optionId } = useParams<RouteParams>();
  if (!optionId) {
    return <div>Page not found</div>;
  }
  const PageComponent = pageComponents[optionId];

  return (
    <div className="dynamicPageContent">
      {/* <h1>{optionId}</h1> */}
      {PageComponent ? <PageComponent /> : <div>Page not found</div>}
    </div>
  );
};

export default DynamicPage;
