import styles from "./ArticleSearch.module.scss";
import { useState } from "react";
import classNames from "classnames";
import debounce from "../../utils/debounce";

export default function ArticleSearch({ list }) {
  const [searchResults, setSearchResults] = useState("");

  const handleInput = (e) => {
    if (e.target) {
      const { value } = e.target;
      if (value && value.length > 2) {
        const result = list.filter((article) =>
          article.name.toLowerCase().includes(value.toLowerCase())
        );
        const listItems = result.reduce(
          (markup, item) =>
            `${markup}<li><a href="${window.location.href}/${item.id}">${item.name}</a></li>`,
          ""
        );
        setSearchResults(listItems);
      }
      if (!value) {
        setSearchResults("");
      }
    }
  };
  const debouncedHandleInput = debounce(handleInput, 300);

  if (!list) return;

  return (
    <div>
      <form className={styles.form}>
        <label>Найди любимую пиццу:</label>

        <input
          onInput={debouncedHandleInput}
          type="search"
          name="query"
          placeholder="Маргарита"
        />

        {/* <button type="submit">Искать!</button> */}
      </form>

      <ul
        className={classNames(styles["search-results"], {
          [styles.active]: searchResults,
        })}
        dangerouslySetInnerHTML={{ __html: searchResults }}
      ></ul>
    </div>
  );
}
