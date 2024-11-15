import { Helmet } from "react-helmet-async";

export default function MetaTags({
  title = "Some Page",
  description = "Some page description",
  keywords = "some,page,keywords",
}) {
  return (
    <Helmet>
      {title ? <title key="title">React Art Practice | {title}</title> : null}
      {description ? (
        <meta key="description" name="description" content={description} />
      ) : null}
      {keywords ? (
        <meta key="keywords" name="keywords" content={keywords} />
      ) : null}

      {/* Open Graph tags (OG) */}
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      {title ? <meta property="og:title" content={title} /> : null}
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}

      {/* OG image tags */}
      <meta property="og:image" content={"https://krlrmlv.github.io/art-practice-react/logo192.png"} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="192" />
      {title ? (
        <meta property="og:image:alt" content={`Image of ${title} site`} />
      ) : null}
    </Helmet>
  );
}
