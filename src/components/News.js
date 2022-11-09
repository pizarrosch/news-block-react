import s from './News.module.css';
import {useParams} from "react-router";
import ReturnButton from "./ReturnButton";
import {Link} from "react-router-dom";
import Filter from "./Filter";
import {useState} from "react";
import placeholder from '../images/placeholder-image.png';

function News({topics, theme}) {

  const {topic} = useParams();
  const [subdivision, setSubdivision] = useState('All');

  //Display news list corresponding with the topic title (e.g. news list for animals should be displayed if topic titled 'animals' is chosen)
  const filteredNews = topics.find((item) => {
    return topic === item.title;
  }).news

  //Display an array of all categories of the items in the news list
  const filteredCategory = topics.find((item) => {
    return topic === item.title;
  }).news.map((item) => item.category);

  //Exclude duplicated categories from the array of categories
  const filteredCategoryWithoutDuplicates = filteredCategory.filter((category, id) => {
    return filteredCategory.indexOf(category) === id;
  })

  //Option values for the dropdown menu
  const filterName = ['All', ...filteredCategoryWithoutDuplicates];

  function handleSelectClick(e) {
    setSubdivision(e.target.value);
  }

  return (
    <div className={s.wrapper}>
      <ReturnButton theme={theme}/>
      <Filter topics={topics} filterName={filterName} onClick={handleSelectClick}/>
      <div className={s.mainContainer}>
        {filteredNews.filter((item) => subdivision === item.category || subdivision === 'All').map((item) => (
          <div key={item.id}>
            <Link className={theme === 'dark' ? s.newsItemDark : s.newsItem} to={`/news/${item.title}/${item.alt}`}>
              {item.image ? <img className={s.itemImage} src={item.image} alt={item.alt}/> : <img className={s.itemImage} src={placeholder} alt='placeholder'/>}
              <h1>{item.description}</h1>
              <p className={theme === 'dark' ? s.darkPretext : null}>{item.insight}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default News;