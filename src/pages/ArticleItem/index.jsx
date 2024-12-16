import MetaTags from "@/ui/MetaTags/MetaTags";
import styles from "./ArticleItem.module.scss";
import { useEffect, useRef } from "react";
import { throttle } from "../../utils/throttle";

export default function ArticleItemPage() {
  const progressRef = useRef(null); // useRef

  const calculate = () => {
    const viewPortHeight = window.innerHeight; // custom hook
    const pageHeight = document.body.offsetHeight; // custom hook
    const scrollY = window.scrollY; // custom hook
    const availableHeight = pageHeight - viewPortHeight;
    const percent = (scrollY / availableHeight) * 100;

    progressRef.current.value = percent;
  };

  useEffect(() => {
    const throttleCalculate = throttle(calculate, 50);

    throttleCalculate();

    window.addEventListener("scroll", throttleCalculate);
    window.addEventListener("resize", throttleCalculate);

    return () => {
      window.removeEventListener("scroll", throttleCalculate);
      window.removeEventListener("resize", throttleCalculate);
    };
  }, []);

  return (
    <div>
      <MetaTags
        title="ArticleItem page"
        description="This is an article item page"
        keywords="article,article"
      />

      <progress
        className={styles.progress}
        value="0"
        max="100"
        ref={progressRef}
      ></progress>

      <h1>Article Item</h1>

      <article id="article" className={styles.article}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
        exercitationem commodi accusamus amet molestiae, eveniet aliquam placeat
        maxime. Animi quas mollitia nemo natus recusandae voluptatum voluptatem
        quasi, quo laudantium. Inventore! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Modi et suscipit beatae pariatur, esse ad
        possimus, repellendus iure accusamus fugiat asperiores, quaerat harum id
        totam tenetur doloremque. Aliquam, accusamus tempore? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Praesentium consequuntur
        obcaecati perferendis possimus, corporis asperiores exercitationem
        cumque est nobis. Totam quod asperiores, in laborum labore et
        consequuntur temporibus incidunt officia! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Alias obcaecati adipisci, omnis quidem
        perferendis culpa eveniet voluptatem itaque molestias possimus rem,
        necessitatibus consequuntur, perspiciatis totam fugiat in enim ad vitae!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
        exercitationem commodi accusamus amet molestiae, eveniet aliquam placeat
        maxime. Animi quas mollitia nemo natus recusandae voluptatum voluptatem
        quasi, quo laudantium. Inventore! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Modi et suscipit beatae pariatur, esse ad
        possimus, repellendus iure accusamus fugiat asperiores, quaerat harum id
        totam tenetur doloremque. Aliquam, accusamus tempore? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Praesentium consequuntur
        obcaecati perferendis possimus, corporis asperiores exercitationem
        cumque est nobis. Totam quod asperiores, in laborum labore et
        consequuntur temporibus incidunt officia! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Alias obcaecati adipisci, omnis quidem
        perferendis culpa eveniet voluptatem itaque molestias possimus rem,
        necessitatibus consequuntur, perspiciatis totam fugiat in enim ad vitae!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
        exercitationem commodi accusamus amet molestiae, eveniet aliquam placeat
        maxime. Animi quas mollitia nemo natus recusandae voluptatum voluptatem
        quasi, quo laudantium. Inventore! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Modi et suscipit beatae pariatur, esse ad
        possimus, repellendus iure accusamus fugiat asperiores, quaerat harum id
        totam tenetur doloremque. Aliquam, accusamus tempore? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Praesentium consequuntur
        obcaecati perferendis possimus, corporis asperiores exercitationem
        cumque est nobis. Totam quod asperiores, in laborum labore et
        consequuntur temporibus incidunt officia! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Alias obcaecati adipisci, omnis quidem
        perferendis culpa eveniet voluptatem itaque molestias possimus rem,
        necessitatibus consequuntur, perspiciatis totam fugiat in enim ad vitae!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
        exercitationem commodi accusamus amet molestiae, eveniet aliquam placeat
        maxime. Animi quas mollitia nemo natus recusandae voluptatum voluptatem
        quasi, quo laudantium. Inventore! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Modi et suscipit beatae pariatur, esse ad
        possimus, repellendus iure accusamus fugiat asperiores, quaerat harum id
        totam tenetur doloremque. Aliquam, accusamus tempore? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Praesentium consequuntur
        obcaecati perferendis possimus, corporis asperiores exercitationem
        cumque est nobis. Totam quod asperiores, in laborum labore et
        consequuntur temporibus incidunt officia! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Alias obcaecati adipisci, omnis quidem
        perferendis culpa eveniet voluptatem itaque molestias possimus rem,
        necessitatibus consequuntur, perspiciatis totam fugiat in enim ad vitae!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
        exercitationem commodi accusamus amet molestiae, eveniet aliquam placeat
        maxime. Animi quas mollitia nemo natus recusandae voluptatum voluptatem
        quasi, quo laudantium. Inventore! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Modi et suscipit beatae pariatur, esse ad
        possimus, repellendus iure accusamus fugiat asperiores, quaerat harum id
        totam tenetur doloremque. Aliquam, accusamus tempore? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Praesentium consequuntur
        obcaecati perferendis possimus, corporis asperiores exercitationem
        cumque est nobis. Totam quod asperiores, in laborum labore et
        consequuntur temporibus incidunt officia! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Alias obcaecati adipisci, omnis quidem
        perferendis culpa eveniet voluptatem itaque molestias possimus rem,
        necessitatibus consequuntur, perspiciatis totam fugiat in enim ad vitae!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
        exercitationem commodi accusamus amet molestiae, eveniet aliquam placeat
        maxime. Animi quas mollitia nemo natus recusandae voluptatum voluptatem
        quasi, quo laudantium. Inventore! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Modi et suscipit beatae pariatur, esse ad
        possimus, repellendus iure accusamus fugiat asperiores, quaerat harum id
        totam tenetur doloremque. Aliquam, accusamus tempore? Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Praesentium consequuntur
        obcaecati perferendis possimus, corporis asperiores exercitationem
        cumque est nobis. Totam quod asperiores, in laborum labore et
        consequuntur temporibus incidunt officia! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Alias obcaecati adipisci, omnis quidem
        perferendis culpa eveniet voluptatem itaque molestias possimus rem,
        necessitatibus consequuntur, perspiciatis totam fugiat in enim ad vitae!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias obcaecati
        adipisci, omnis quidem perferendis culpa eveniet voluptatem itaque
        molestias possimus rem, necessitatibus consequuntur, perspiciatis totam
        fugiat in enim ad vitae! Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Veritatis exercitationem commodi accusamus amet
        molestiae, eveniet aliquam placeat maxime. Animi quas mollitia nemo
        natus recusandae voluptatum voluptatem quasi, quo laudantium. Inventore!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi et
        suscipit beatae pariatur, esse ad possimus, repellendus iure accusamus
        fugiat asperiores, quaerat harum id totam tenetur doloremque. Aliquam,
        accusamus tempore? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Praesentium consequuntur obcaecati perferendis possimus, corporis
        asperiores exercitationem cumque est nobis. Totam quod asperiores, in
        laborum labore et consequuntur temporibus incidunt officia! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Alias obcaecati adipisci,
        omnis quidem perferendis culpa eveniet voluptatem itaque molestias
        possimus rem, necessitatibus consequuntur, perspiciatis totam fugiat in
        enim ad vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Alias obcaecati adipisci, omnis quidem perferendis culpa eveniet
        voluptatem itaque molestias possimus rem, necessitatibus consequuntur,
        perspiciatis totam fugiat in enim ad vitae! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Veritatis exercitationem commodi accusamus
        amet molestiae, eveniet aliquam placeat maxime. Animi quas mollitia nemo
        natus recusandae voluptatum voluptatem quasi, quo laudantium. Inventore!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi et
        suscipit beatae pariatur, esse ad possimus, repellendus iure accusamus
        fugiat asperiores, quaerat harum id totam tenetur doloremque. Aliquam,
        accusamus tempore? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Praesentium consequuntur obcaecati perferendis possimus, corporis
        asperiores exercitationem cumque est nobis. Totam quod asperiores, in
        laborum labore et consequuntur temporibus incidunt officia! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Alias obcaecati adipisci,
        omnis quidem perferendis culpa eveniet voluptatem itaque molestias
        possimus rem, necessitatibus consequuntur, perspiciatis totam fugiat in
        enim ad vitae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Alias obcaecati adipisci, omnis quidem perferendis culpa eveniet
        voluptatem itaque molestias possimus rem, necessitatibus consequuntur,
        perspiciatis totam fugiat in enim ad vitae! Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Veritatis exercitationem commodi accusamus
        amet molestiae, eveniet aliquam placeat maxime. Animi quas mollitia nemo
        natus recusandae voluptatum voluptatem quasi, quo laudantium. Inventore!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi et
        suscipit beatae pariatur, esse ad possimus, repellendus iure accusamus
        fugiat asperiores, quaerat harum id totam tenetur doloremque. Aliquam,
        accusamus tempore? Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Praesentium consequuntur obcaecati perferendis possimus, corporis
        asperiores exercitationem cumque est nobis. Totam quod asperiores, in
        laborum labore et consequuntur temporibus incidunt officia! Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Alias obcaecati adipisci,
        omnis quidem perferendis culpa eveniet voluptatem itaque molestias
        possimus rem, necessitatibus consequuntur, perspiciatis totam fugiat in
        enim ad vitae!
      </article>
    </div>
  );
}
