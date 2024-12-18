import { localeDateString } from "../../utils/localeDateString";
import { sliceString } from "../../utils/sliceString";

export default function ArticleCard({ id, name, description, category, date }) {
  return (
    <article>
      <h2>
        <a href={window.location.href + "/" + id}>{name}</a>
      </h2>
      <span>{category}</span>
      <br />
      <p dangerouslySetInnerHTML={{ __html: sliceString(description, 0, 100) }}></p>
      <time dateTime={date} >{localeDateString(date)}</time>
    </article>
  );
}
