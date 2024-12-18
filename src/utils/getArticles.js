export const getArticles = async () => {
    const result = await fetch("articles.json")
        .then(res => res.json())
        .catch(e => console.error("Error. Articles not found", e));
    return result;
}