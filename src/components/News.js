import s from './News.module.css';
import {useParams} from "react-router";
import ReturnButton from "./ReturnButton";
import {Link} from "react-router-dom";
import Filter from "./Filter";
import {useState} from "react";

function News({topics, theme}) {

  const {topic} = useParams();
  const [subdivision, setSubdivision] = useState('All');

  const filteredNews = topics.find((item) => {
    return topic === item.title;
  }).news

  const filteredCategory = topics.find((item) => {
    return topic === item.title;
  }).news.map((item) => item.category);

  const filteredCategoryWithoutDuplicates = filteredCategory.filter((category, id) => {
    return filteredCategory.indexOf(category) === id;
  })

  const filterName = ['All', ...filteredCategoryWithoutDuplicates];

  function handleSelectClick(e) {
    setSubdivision(e.target.value);
  }

  return (
    <>
      <ReturnButton theme={theme}/>
      <Filter topics={topics} filterName={filterName} onClick={handleSelectClick}/>
      <div className={s.mainContainer}>
        {filteredNews.filter((item) => subdivision === item.category || subdivision === 'All').map((item) => (
          <div className={s.container} key={item.id}>
            <Link className={theme === 'dark' ? s.newsItemDark : s.newsItem} to={`/news/${item.title}/${item.alt}`}>
              <img className={s.itemImage} src={item.image} alt={item.alt}/>
              <h1>{item.description}</h1>
              <p className={theme === 'dark' ? s.darkPretext : null}>{item.insight}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default News;