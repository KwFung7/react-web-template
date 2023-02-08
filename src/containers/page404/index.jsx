import { useTranslation } from 'react-i18next';

const Page404 = () => {
  const { t } = useTranslation();

  return (
    <div className="page-404-container">
      {t('page_404_title')}
    </div>
  )
};

export default Page404;