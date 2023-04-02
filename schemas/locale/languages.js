// The languages you want to support.
// They need 'id' and 'title'
export const languages = [
  { name: 'en_AE', title: 'English', isDefault: true },
  { name: 'ar_AE', title: 'Arabic' },
];

export const getLocalesForLocation = locationId => localeMap[locationId];
export const addLocalization = schema => languages.map(language => ({
  name: language.name,
  hidden: true,
  type: schema,
}));

export const baseLanguage = languages[0].name;
