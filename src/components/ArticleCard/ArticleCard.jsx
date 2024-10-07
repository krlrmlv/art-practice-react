export default function ArticleCard({ id, name, description, category, date }) {
  return (
    <div>
      <p>{id}</p>
      <p>{name}</p>
      <p dangerouslySetInnerHTML={{__html:description}} ></p>
    </div>
  );
}
