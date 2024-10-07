import { useEffect, useState } from "react";
import Popup from "../../components/Popup/Popup";
import Modal from "../../hoc/Modal/Modal";

import { Link, useSearchParams } from "react-router-dom";
import ArticleGrid from "../../components/ArticleGrid/ArticleGrid";

export default function Index() {
  const [isOpen, setIsOpen] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("popup")) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [searchParams]);

  return (
    <>
      <h1>Portal tutorial</h1>
      <h2>Try to make your own modal window</h2>

      <button onClick={() => setIsOpen(true)}> Open </button>

      <Modal shown={isOpen} onClose={() => setIsOpen(false)}>
        <Popup onClose={() => setIsOpen(false)} />
      </Modal>
<hr />
      <Link to="/articles">Articles</Link>
    </>
  );
}
