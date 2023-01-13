import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import mainEn from 'translations/en/main.json';
import commonEn from 'translations/en/common.json';
import purposeEn from 'translations/en/purpose.json';
import howToUseEn from 'translations/en/howToUse.json';
import overviewEn from 'translations/en/overview.json';
import roadmapEn from 'translations/en/roadmap.json';
import architectureEn from 'translations/en/architecture.json';
import deliveryEn from 'translations/en/delivery.json';
import webEn from 'translations/en/web.json';
import desktopEn from 'translations/en/desktop.json';
import mobileEn from 'translations/en/mobile.json';
import dataEn from 'translations/en/data.json';
import projectEn from 'translations/en/project.json';
import reportEn from 'translations/en/report.json';
import contributeEn from 'translations/en/contribute.json';
import thanksEn from 'translations/en/thanks.json';
import donateEn from 'translations/en/donate.json';

import mainUa from 'translations/ua/main.json';
import commonUa from 'translations/ua/common.json';
import howToUseUa from 'translations/ua/howToUse.json';
import purposeUa from 'translations/ua/purpose.json';
import overviewUa from 'translations/ua/overview.json';
import roadmapUa from 'translations/ua/roadmap.json';
import architectureUa from 'translations/ua/architecture.json';
import deliveryUa from 'translations/ua/delivery.json';
import webUa from 'translations/en/web.json';
import desktopUa from 'translations/en/desktop.json';
import mobileUa from 'translations/en/mobile.json';
import dataUa from 'translations/ua/data.json';
import projectUa from 'translations/ua/project.json';
import reportUa from 'translations/ua/report.json';
import contributeUa from 'translations/ua/contribute.json';
import thanksUa from 'translations/ua/thanks.json';
import donateUa from 'translations/ua/donate.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        main: mainEn,
        common: commonEn,
        purpose: purposeEn,
        howToUse: howToUseEn,
        overview: overviewEn,
        roadmap: roadmapEn,
        architecture: architectureEn,
        delivery: deliveryEn,
        web: webEn,
        desktop: desktopEn,
        mobile: mobileEn,
        data: dataEn,
        project: projectEn,
        report: reportEn,
        contribute: contributeEn,
        thanks: thanksEn,
        donate: donateEn,
      },
      ua: {
        main: mainUa,
        common: commonUa,
        purpose: purposeUa,
        howToUse: howToUseUa,
        overview: overviewUa,
        roadmap: roadmapUa,
        architecture: architectureUa,
        delivery: deliveryUa,
        web: webUa,
        desktop: desktopUa,
        mobile: mobileUa,
        data: dataUa,
        project: projectUa,
        report: reportUa,
        contribute: contributeUa,
        thanks: thanksUa,
        donate: donateUa,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
