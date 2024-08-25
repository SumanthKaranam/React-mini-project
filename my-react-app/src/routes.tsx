
interface BreadcrumbItem {
  title: string;
  link: string;
}

interface BreadcrumbConfig {
  [key: string]: BreadcrumbItem[];
}



const breadcrumbConfig: BreadcrumbConfig = {
  '/': [{ title: 'Home', link: '/' }],
  '/account': [
    { title: 'Home', link: '/' },
    { title: 'Account', link: '/page/account' },
  ],
  '/marketPlace': [
    { title: 'Home', link: '/' },
    { title: 'Market Place', link: '/page/marketPlace' },
  ],
  '/launchPad': [
    { title: 'Home', link: '/' },
    { title: 'Launch Pad', link: '/page/launchPad' },
  ],
  '/preferenceLink': [
    { title: 'Home', link: '/' },
    { title: 'Preference Link', link: '/page/preferenceLink' },
  ],
  '/preferenceLinkEnterprise': [
    { title: 'Home', link: '/' },
    { title: 'Preference Link Enterprise', link: '/page/preferenceLinkEnterprise' },
  ],
  '/registrationManager': [
    { title: 'Home', link: '/' },
    { title: 'Registration Manager', link: '/page/registrationManager' },
  ],
  '/identity': [
    { title: 'Home', link: '/' },
    { title: 'Identity', link: '/page/identity' },
  ],
  '/ats': [
    { title: 'Home', link: '/' },
    { title: 'identity', link: '/page/identity' },
    { title: 'ATS', link: '/page/ats' },
  ],
  '/atsAnalytics': [
    { title: 'Home', link: '/' },
    { title: 'Identity', link: '/page/identity' },
    { title: 'Ats Analytics', link: '/page/atsAnalytics' },
  ],
  '/privacyManager': [
    { title: 'Home', link: '/' },
    { title: 'Privacy manager', link: '/page/privacyManager' },
  ],
  '/global': [
    { title: 'Home', link: '/' },
    { title: 'Privacy manager', link: '/page/privacyManager' },
    { title: 'Global', link: '/page/global' },
  ],
  '/ccpa': [
    { title: 'Home', link: '/' },
    { title: 'Privacy manager', link: '/page/privacyManager' },
    { title: 'CCPA', link: '/page/ccpa' },
  ],
  '/gdpr': [
    { title: 'Home', link: '/' },
    { title: 'Privacy manager', link: '/page/privacyManager' },
    { title: 'GDPR', link: '/page/gdpr' },
  ],
  '/tags': [
    { title: 'Home', link: '/' },
    { title: 'Privacy manager', link: '/page/privacyManager' },
    { title: 'Tags', link: '/page/tags' },
  ],
};
 
export const getBreadcrumbItems = (path: string) => {
  const paths = path.split('/').filter((p) => p);
  const fullPath = paths.reduce((acc, curr) => {
    const newPath = `${acc}/${curr}`;
    if (breadcrumbConfig[newPath]) {
      acc = newPath;
    }
    return acc;
  }, '');
  return breadcrumbConfig[fullPath] || [];
};