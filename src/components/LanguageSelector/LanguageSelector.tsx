import React from "react";
import { useTranslation } from "react-i18next";
import Button from "@/containers/Button/Button";
import styles from './LanguageSelector.module.scss';

const languages = [
  { code: 'en', label: 'English' },
  { code: 'ru', label: 'Русский' }
];

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = async (lng: string) => {
    await i18n.changeLanguage(lng);
  };

  return (
    <div className={styles.container}>
      {languages.map((lng) => (
        <Button
          key={lng.code}
          disabled={lng.code === i18n.language}
          text={lng.label}
          className={styles.button}
          onClick={() => changeLanguage(lng.code)}
        />
      ))}
    </div>
  );
};

export default LanguageSelector;
