import purposeIcon from "../assets/images/categories/purpose.svg";
import howToUseIcon from "../assets/images/categories/how-to-use.svg";
import overviewIcon from "../assets/images/categories/overview.svg";
import roadmapIcon from "../assets/images/categories/roadmap.svg";
import architectureIcon from "../assets/images/categories/architecture.svg";
import deliveryIcon from "../assets/images/categories/delivery.svg";
import webIcon from "../assets/images/categories/web.svg";
import desktopIcon from "../assets/images/categories/desktop.svg";
import mobileIcon from "../assets/images/categories/mobile.svg";
import dataIcon from "../assets/images/categories/data.svg";
import projectIcon from "../assets/images/categories/project.svg";
import reportIcon from "../assets/images/categories/report.svg";
import contributeIcon from "../assets/images/categories/contribute.svg";
import thanksIcon from "../assets/images/categories/thanks.svg";
import donateIcon from "../assets/images/categories/donate.svg";

export const categoryTypes = {
  default: 'default',
  tab: 'tab',
  tabAccordion: 'tabAccordion',
}

export const categoryKeys = {
  purpose: {
    key: 'space-purpose',
    name: 'purpose',
  },
  howToUse: {
    key: 'how-to-use',
    name: 'howToUse',
  },
  overview: {
    key: 'product-overview',
    name: 'overview',
  },
  roadmap: {
    key: 'product-roadmap',
    name: 'roadmap',
  },
  architecture: {
    key: 'architecture',
    name: 'architecture',
  },
  delivery: {
    key: 'continuous-delivery',
    name: 'delivery',
  },
  web: {
    key: 'web',
    name: 'web',
  },
  desktop: {
    key: 'desktop',
    name: 'desktop',
  },
  mobile: {
    key: 'mobile',
    name: 'mobile',
  },
  data: {
    key: 'data',
    name: 'data',
  },
  project: {
    key: 'project',
    name: 'project',
  },
  report: {
    key: 'issues-to-report',
    name: 'report',
  },
  contribute: {
    key: 'how-to-contribute',
    name: 'contribute',
  },
  thanks: {
    key: 'thanks',
    name: 'thanks',
  },
  donate: {
    key: 'donate',
    name: 'donate',
  },
};

export const categories = [
  {
    icon: purposeIcon,
    name: categoryKeys.purpose.key,
    key: categoryKeys.purpose.name,
  },
  {
    icon: howToUseIcon,
    name: categoryKeys.howToUse.key,
    key: categoryKeys.howToUse.name,
  },
  {
    icon: overviewIcon,
    name: categoryKeys.overview.key,
    key: categoryKeys.overview.name,
  },
  {
    icon: roadmapIcon,
    name: categoryKeys.roadmap.key,
    key: categoryKeys.roadmap.name,
  },
  {
    icon: architectureIcon,
    name: categoryKeys.architecture.key,
    key: categoryKeys.architecture.name,
  },
  {
    icon: deliveryIcon,
    name: categoryKeys.delivery.key,
    key: categoryKeys.delivery.name,
  },
  {
    icon: webIcon,
    name: categoryKeys.web.key,
    key: categoryKeys.web.name,
  },
  {
    icon: desktopIcon,
    name: categoryKeys.desktop.key,
    key: categoryKeys.desktop.name,
  },
  {
    icon: mobileIcon,
    name: categoryKeys.mobile.key,
    key: categoryKeys.mobile.name,
  },
  {
    icon: dataIcon,
    name: categoryKeys.data.key,
    key: categoryKeys.data.name,
  },
  {
    icon: projectIcon,
    name: categoryKeys.project.key,
    key: categoryKeys.project.name,
  },
  {
    icon: reportIcon,
    name: categoryKeys.report.key,
    key: categoryKeys.report.name,
  },
  {
    icon: contributeIcon,
    name: categoryKeys.contribute.key,
    key: categoryKeys.contribute.name,
  },
  {
    icon: thanksIcon,
    name: categoryKeys.thanks.key,
    key: categoryKeys.thanks.name,
  },
  {
    icon: donateIcon,
    name: categoryKeys.donate.key,
    key: categoryKeys.donate.name,
  },
];
