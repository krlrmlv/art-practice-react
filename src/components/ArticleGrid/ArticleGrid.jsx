import ArticleCard from '../ArticleCard/ArticleCard';

export default function ArticleGrid({list}) {
  if(!list) return
  return (
    <div>
      { 
        list.map((element, index) => 
          <ArticleCard {...element} index={index} key={element.id} />
         )
      }
    </div>
  );
}
