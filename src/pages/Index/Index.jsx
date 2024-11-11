import { Link } from "react-router-dom";
import useScrollTop from "../../hook/useScrollTop";

export default function IndexPage() {
  const scrollTop = useScrollTop();

  return (
    <ul>
      
      <p>scrollTop = {scrollTop}</p>

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
