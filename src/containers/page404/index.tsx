import React from 'react';
import { useTranslation } from 'react-i18next';

interface Page404Props {}

const Page404: React.FunctionComponent<Page404Props> = () => {
  const { t } = useTranslation();

  return <div className="page-404-container">{t('page_404_title')}</div>;
};

export default Page404;
