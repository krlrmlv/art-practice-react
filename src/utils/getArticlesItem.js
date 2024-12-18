import { getArticles } from "./getArticles";

export const getArticlesItem = async (articleId) => {
    if (!articleId) return;

    const articlesList = await getArticles();

    if (articlesList && articlesList.length > 0) {
        // return articlesList.filter(article => article.id === articleId)
        return articlesList.find(article => article.id === articleId)
    }
}