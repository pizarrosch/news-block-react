import s from './News.module.css';
import {useParams} from "react-router";
import ReturnButton from "./ReturnButton";
import {Link} from "react-router-dom";

function News({topics, theme}) {

  const {topic} = useParams();

  const filteredNews = topics.find((item) => {
    return topic === item.title;
  }).news

  return (
    <div>
      <ReturnButton theme={theme}/>
      {filteredNews.map((item) => (
        <div className={s.container} key={item.id}>
          <Link className={theme === 'dark' ? s.newsItemDark : s.newsItem} to={`/news/${item.title}/${item.alt}`}>
            <h1>{item.description}</h1>
            <div className={s.imageAndPretextContainer}>
              <img className={s.itemImage} src={item.image} alt={item.alt}/>
              <p className={theme === 'dark' ? s.darkPretext : s.pretext}>{item.insight}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default News;