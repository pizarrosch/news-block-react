import {useParams} from "react-router";
import s from "./Articles.module.css";
import ReturnButton from "../ReturnButton";
import {articlesList} from "./Article";

function Articles({topics, theme}) {

  const {topic} = useParams();
  const {article} = useParams();

  const filteredNews = topics.find((item) => {
    return topic === item.title;
  }).news

  return (
    <>
    <ReturnButton />
      {filteredNews.map((item) => {
      if(article === item.alt) {
        return (
          <div className={s.container}>
            <div className={theme === 'dark' ? s.textContainerDark : s.textContainer}>
              <h1>{item.description}</h1>
              <p className={s.paragraph}>{articlesList[article]}</p>
            </div>
          </div>
        )
      }
    })}
    </>
  )
}

export default Articles;