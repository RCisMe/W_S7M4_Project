import React, { useState } from 'react';
import i18n from '../i18n/index.json';

const App = () => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'en' ? 'esp' : 'en'));
  };

  const texts = i18n[language];

  return (
    <div>
      <button onClick={toggleLanguage}>
        {language === 'en' ? '🇪🇸' : '🇺🇸'}
      </button>
      <form>
        <h1>{texts.TEXT_HEADING_CREATE_ACCOUNT}</h1>
        <label>
          {texts.LABEL_USERNAME}
          <input type="text" placeholder={texts.PLACEHOLDER_USERNAME} />
        </label>
        <label>
          {texts.LABEL_FAV_FOOD}
          <select>
            <option value="">{texts.TEXT_OPT_FAV_FOOD_1}</option>
            <option value="pizza">{texts.TEXT_OPT_FAV_FOOD_2}</option>
            <option value="spaghetti">{texts.TEXT_OPT_FAV_FOOD_3}</option>
            <option value="broccoli">{texts.TEXT_OPT_FAV_FOOD_4}</option>
          </select>
        </label>
        <label>
          {texts.LABEL_ACCEPT_TERMS}
          <input type="checkbox" />
        </label>
        <button type="submit">{texts.TEXT_SUBMIT}</button>
      </form>
    </div>
  );
};

export default App;
