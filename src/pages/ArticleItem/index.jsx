import MetaTags from "@/ui/MetaTags/MetaTags";
import styles from "./ArticleItem.module.scss";
import { useEffect, useRef, useState } from "react";
import { throttle } from "../../utils/throttle";
import { useNavigate, useParams } from "react-router-dom";
import { localeDateString } from "../../utils/localeDateString";
import { getArticlesItem } from "../../utils/getArticlesItem";

export default function ArticleItemPage() {
  const progressRef = useRef(null); // useRef
  const { articleId } = useParams(); // type string
  const [article, setArticle] = useState(null);
  const navigate = useNavigate();

  if (!article) {
    navigate({ pathname: "/404" });
  }

  const calculate = () => {
    const viewPortHeight = window.innerHeight; // custom hook
    const pageHeight = document.body.offsetHeight; // custom hook
    const scrollY = window.scrollY; // custom hook
    const availableHeight = pageHeight - viewPortHeight;
    const percent = (scrollY / availableHeight) * 100;

    if (progressRef.current) {
      progressRef.current.value = percent;
    }
  };

  // Получение конкретной статьи
  useEffect(() => {
    const fetchArticle = async () => {
      const res = await getArticlesItem(articleId);
      setArticle(res);
    };

    fetchArticle();
  }, [articleId]);

  // Расчёт прогресса
  useEffect(() => {
    const throttleCalculate = throttle(calculate, 50);

    throttleCalculate();

    window.addEventListener("scroll", throttleCalculate);
    window.addEventListener("resize", throttleCalculate);

    return () => {
      window.removeEventListener("scroll", throttleCalculate);
      window.removeEventListener("resize", throttleCalculate);
    };
  }, []);

  return article ? (
    <div className={styles.root}>
      <MetaTags
        title="ArticleItem page"
        description="This is an article item page"
        keywords="article,article"
      />

      <progress
        className={styles.progress}
        value="0"
        max="100"
        ref={progressRef}
      ></progress>

      {article.name && <h1>{article.name}</h1>}
      <div className={styles.info}>
        {article.category && <span>#{article.category}</span>}
        <br />
        {article.date && (
          <time dateTime={article.date}>{localeDateString(article.date)}</time>
        )}
      </div>
      {article.description && (
        <article
          id="article"
          className={styles.article}
          dangerouslySetInnerHTML={{ __html: article.description }}
        />
      )}
    </div>
  ) : null;
}
