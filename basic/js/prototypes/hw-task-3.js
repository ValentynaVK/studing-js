// Напиши функцию mergeAllSettings, которая принимает три объекта: объект настроек
// по умолчанию, объект настроек профиля пользователя и объект временных настроек
// сессии. Функция должна возвращать новый объект, который объединяет все три
// объекта. Если в нескольких объектах есть одинаковые ключи, приоритет имеют
// значения из объектов в порядке: временные настройки, настройки профиля,
// настройки по умолчанию.

const mergeAllSettings = function (
  defaultSettings,
  profileSettings,
  sessionSettings
) {
  return { ...defaultSettings, ...profileSettings, ...sessionSettings };
};

const defaultSettings = {
  theme: "light",
  language: "en",
  notifications: true,
};

const profileSettings = {
  theme: "dark",
  language: "fr",
};

const sessionSettings = {
  notifications: false,
  privacy: "high",
};

console.log(
  mergeAllSettings(defaultSettings, profileSettings, sessionSettings)
);
// { theme: 'dark', language: 'fr', notifications: false, privacy: 'high' }

const profileSettings2 = {
  language: "es",
  fontSize: "medium",
};

const sessionSettings2 = {
  language: "de",
};

console.log(
  mergeAllSettings(defaultSettings, profileSettings2, sessionSettings2)
);
// { theme: 'light', language: 'de', notifications: true, fontSize: 'medium' }
