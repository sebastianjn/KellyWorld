import i18next from 'i18next';
import i18nbackend from 'i18next-fs-backend';
import { readdirSync } from 'node:fs';

export default class LocaleManager {
  constructor(client) {
    this.client = client;
  }

  async loadLocales() {
    this.client.i18next = i18next;
    await i18next.use(i18nbackend).init({
      ns: ['language','permissions'],
      defaultNS: 'language',
      preload: readdirSync('src/Locales'),
      fallbackLng: 'pt-BR',
      backend: { 
        loadPath: 'src/Locales/{{lng}}/{{ns}}.json'
      },
      load: 'all',
      interpolation: {
        escapeValue: false,
        useRawValueToEscape: true
      },
      returnEmptyString: false,
      returnObjects: true
    });
  }
}