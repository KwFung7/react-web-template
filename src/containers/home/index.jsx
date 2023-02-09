import { useTranslation } from 'react-i18next';
import './style.scss';

const Home = () => {
  const { t } = useTranslation();

  return <div className="homepage-container">Homepage Test</div>;
};

export default Home;
