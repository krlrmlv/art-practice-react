import ArticleGrid from "@/components/ArticleGrid/ArticleGrid";
import MetaTags from "@/ui/MetaTags/MetaTags";
import ArticleSearch from "../../components/ArticleSearch/ArticleSearch";
import { useEffect, useState } from "react";
import { getArticles } from "../../utils/getArticles";

export default function ArticlePage() {
  const [articles, setArticles] = useState(null);

  // Получение всех статей
  useEffect(() => {
    const fetchArticles = async () => {
      const res = await getArticles();
      setArticles(res);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <MetaTags
        title="Articles page"
        description="This is an articles page"
        keywords="articles,article"
      />
      <h1>Articles</h1>

      <ArticleSearch list={articles} />
      <ArticleGrid list={articles} />
    </div>
  );
}
