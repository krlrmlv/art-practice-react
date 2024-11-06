import { Link } from "react-router-dom";

export default function IndexPage() {
  return (
    <ul>
      <li>
      <Link to="/portal">Portal</Link>
      </li>
      <li>
      <Link to="/articles">Articles</Link>
      </li>
      <li>
      <Link to="/media-queries">Media Queries</Link>
      </li>
    </ul>
  );
}
