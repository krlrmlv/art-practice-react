import ArticleGrid from "@/components/ArticleGrid/ArticleGrid";
import MetaTags from "@/ui/MetaTags/MetaTags";

export default function ArticlePage() {
  return (
    <div>
      <MetaTags
        title="Articles page"
        description="This is an articles page"
        keywords="articles,article"
      />
      <h1>Articles</h1>
      <ArticleGrid />
    </div>
  );
}
