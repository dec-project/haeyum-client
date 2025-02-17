import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  description: string;
  keywords: string;
}
const MetaTag = (props: Props) => {
  const { title, description, keywords } = props;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={'/src/common/assets/logo/logo.svg'} />
      <meta property="og:url" content={window.location.href} />

      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
};

export default MetaTag;
