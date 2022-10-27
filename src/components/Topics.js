import s from './Topics.module.css';
import {Link} from "react-router-dom";
import cx from "classnames";

function Topics({topics, theme}) {

  return (
    <div className={s.container}>
      {topics.map((topic) => (
          <Link className={s.link} to={`/news/${topic.title}`}>
            <img className={s.topicImage} src={topic.image} alt={topic.alt}/>
            <p className={cx(
              theme === 'dark' ? s.dark : null,
              s.paragraph
            )}>{topic.title}</p>
          </Link>
        )
      )}
    </div>
  )
}

export default Topics;