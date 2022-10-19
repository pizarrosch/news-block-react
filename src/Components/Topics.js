import s from './Topics.module.css';
import dogs from '../images/progulka-s-sobakami-.jpg';
import books from '../images/photo-1553729784-e91953dec042.jpg';
import hiking from '../images/HikingDayontheTrails-GettyImages-1049524114.jpg';
import travel from '../images/deanna-ritchie-worturlz7jg-unsplash.jpg';
import food from '../images/french-food-1920x1080.jpg';
import Theme from './Theme';

function Topics(props) {
  const topics = [
    {
      id: 0,
      topic: 'Books',
      image: books,
      alt: 'reading-woman',
    },
    {
      id: 1,
      topic: 'Animals',
      image: dogs,
      alt: 'walking-with-dog'
    },
    {
      id: 2,
      topic: 'Hiking',
      image: hiking,
      alt: 'hiking'
    },
    {
      id: 3,
      topic: 'Travelling',
      image:  travel,
      alt: 'travel'
    },
    {
      id: 4,
      topic: 'Food',
      image: food,
      alt: 'food'
    },
  ];

  return (
    <>
      <Theme theme={props.theme} onClick={props.onClick}/>
      <div>
        <div className={s.container}>
        {topics.map((topic) => {
          return <div>
          <img className={s.topicImage} src={topic.image} alt={topic.alt} key={topic.id}/>
          <p className={props.theme === 'dark' ? s.dark : null}>{topic.topic}</p>
          </div>
        })}
        </div>
      </div>
    </>
  )
}

export default Topics;