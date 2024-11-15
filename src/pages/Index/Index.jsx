import { Link } from "react-router-dom";
import useScrollTop from "../../hook/useScrollTop";
import MetaTags from "../../ui/MetaTags/MetaTags";

export default function IndexPage() {
  const scrollTop = useScrollTop();

  return (
    <>
      <MetaTags
        title="Index page"
        description="This is general page"
        keywords="general,index,navigate"
      />
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
    </>
  );
}
