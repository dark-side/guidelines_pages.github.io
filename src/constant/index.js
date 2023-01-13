import { purpose } from './purpose';
import { howToUse } from './howToUse';
import { overview } from './overview';
import { roadmap } from './roadmap';
import { architecture } from './architecture';
import { delivery } from './delivery';
import { web } from './web';
import { desktop } from './desktop';
import { mobile } from './mobile';
import { dataCat } from './data';
import { project } from './project';
import { report } from './report';
import { contribute } from './contribute';
import { thanks } from './thanks';
import { donate } from './donate';

export const BASE_URL = ':lang';

export const routers = {
  category: `${BASE_URL}/:category`,
};

export const LANGS = {
  ua: 'ua',
  en: 'en',
};

export const DEFAULT_VIDEO_OPTIONS = {
  height: '815px',
  width: '545px',
};

export const getBaseUrl = (lang) => `${lang}`;
export const getCategoryLink = (lang, cat) => `${lang}/${cat}`;

export const categoriesInfo = [
  purpose,
  howToUse,
  overview,
  roadmap,
  architecture,
  delivery,
  web,
  desktop,
  mobile,
  dataCat,
  project,
  report,
  contribute,
  thanks,
  donate
];
