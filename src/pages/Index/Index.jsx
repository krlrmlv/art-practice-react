import { Link } from "react-router-dom";

export default function Index() {
  return (
    <ul>
      <li>
      <Link to="/portal">Portal</Link>
      </li>
      <li>
      <Link to="/articles">Articles</Link>
      </li>
    </ul>
  );
}
