import articlesDB from '../../database/articles.json'
import ArticleCard from '../ArticleCard/ArticleCard';
const articlesList = articlesDB.data;

export default function ArticleGrid() {
  return (
    <div>
      { 
        articlesList.map((element, index) => 
          <ArticleCard {...element} index={index} key={element.id} />
         )
      }
    </div>
  );
}
