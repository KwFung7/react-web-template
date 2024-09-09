import React from 'react';
import { useTranslation } from 'react-i18next';
import './style.scss';

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  const { t } = useTranslation();

  return <div className="homepage-container">Homepage Test</div>;
};

export default Home;
