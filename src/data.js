import lions from "./images/Lions.jpg";
import dog from "./images/yorkie.jpg";
import sheep from "./images/sheep.jpg";
import lynx from "./images/lynx.jpg";
import books from "./images/photo-1553729784-e91953dec042.jpg";
import dogs from "./images/progulka-s-sobakami-.jpg";
import hiking from "./images/HikingDayontheTrails-GettyImages-1049524114.jpg";
import travel from "./images/deanna-ritchie-worturlz7jg-unsplash.jpg";
import food from "./images/french-food-1920x1080.jpg";

const news = [
  {
    id: 0,
    title: 'Books',
    image: books,
    alt: 'reading-woman',
    news: [
      {
        id: 0,
        title: 'Books',
        description: "Arthur Conan Doyle 'Adventures of Sherlock Holmes'",
        genre: 'detective-story',
        alt: 'Sherlock'
      },
      {
        id: 1,
        title: 'Books',
        description: "Ernest Hemingway 'The old man and the sea'",
        genre: 'novel',
        alt: 'Hemingway'
      },
      {
        id: 2,
        title: 'Books',
        description: "Agatha Christie 'The mysterious affair at Styles'",
        genre: 'detective-story'
      },
      {
        id: 3,
        title: 'Books',
        description: "Charles Dickens 'Bleak house'",
        genre: 'novel'
      },
      {
        id: 4,
        title: 'Books',
        description: "John Steinbeck 'Of mice and men'",
        genre: 'novella'
      },
      {
        id: 5,
        title: 'Books',
        description: "George Orwell 'Animal farm'",
        genre: 'novella'
      },
      {
        id: 6,
        title: 'Books',
        description: "Charles Dickens 'A Christmas carol'",
        genre: 'novella'
      },
      {
        id: 7,
        title: 'Books',
        description: "Edgar Allan Poe 'The murders in the Rue Morgue'",
        genre: 'detective-story'
      }
    ]
  },
  {
    id: 1,
    title: 'Animals',
    image: dogs,
    alt: 'walking-with-dog',
    news: [
      {
        id: 0,
        title: 'Animals',
        description: 'Lions return to zoo after Storm Eunice damage',
        image: lions,
        insight: 'Zero, Mo, Tor, Kaya and Jabu, went on a 10-week holiday to Whipsnade from Africa Live in Suffolk.',
        species: 'wild-animals',
        alt: 'Lions',
      },
      {
        id: 1,
        title: 'Animals',
        description: 'Tiny Yorkie loses leg after venomous snake bite',
        image: dog,
        insight: 'Junior the Yorkshire terrier is in a critical condition after being attacked by an adder on a walk.',
        species: 'dogs',
        alt: 'Yorkie',
      },
      {
        id: 2,
        title: 'Animals',
        description: 'Police appeal after 55 sheep stolen on Lewis',
        image: sheep,
        insight: 'Extensive searches have been made for the animals, but no trace of them has been found.',
        species: 'cattle',
        alt: 'theSheep',
      },
      {
        id: 3,
        title: 'Animals',
        description: 'Opinions divided over reintroduction of lynx',
        image: lynx,
        insight: 'The first detailed social feasibility study into a trial reintroduction of the cat has been held.',
        species: 'wild-animals',
        alt: 'Lynx',
      },
      {
        id: 4,
        title: 'Animals',
        description: 'Lions return to zoo after Storm Eunice damage',
        image: lions,
        insight: 'Zero, Mo, Tor, Kaya and Jabu, went on a 10-week holiday to Whipsnade from Africa Live in Suffolk.'
      },
      {
        id: 5,
        title: 'Animals',
        description: 'Lions return to zoo after Storm Eunice damage',
        image: lions,
        insight: 'Zero, Mo, Tor, Kaya and Jabu, went on a 10-week holiday to Whipsnade from Africa Live in Suffolk.'
      },
      {
        id: 6,
        title: 'Animals',
        description: 'Lions return to zoo after Storm Eunice damage',
        image: lions,
        insight: 'Zero, Mo, Tor, Kaya and Jabu, went on a 10-week holiday to Whipsnade from Africa Live in Suffolk.'
      },
      {
        id: 7,
        title: 'Animals',
        description: 'Lions return to zoo after Storm Eunice damage',
        image: lynx,
        insight: 'Zero, Mo, Tor, Kaya and Jabu, went on a 10-week holiday to Whipsnade from Africa Live in Suffolk.'
      },
    ]
  },
  {
    id: 2,
    title: 'Hiking',
    image: hiking,
    alt: 'hiking',
    news: [
      {
        id: 0,
        title: 'Hiking',
        description: 'Lions return to zoo after Storm Eunice damage',
        image: sheep,
        insight: 'Zero, Mo, Tor, Kaya and Jabu, went on a 10-week holiday to Whipsnade from Africa Live in Suffolk.'
      },
    ]
  },
  {
    id: 3,
    title: 'Travelling',
    image: travel,
    alt: 'travel',
    news: [
      {
        id: 0,
        title: 'Travelling',
        description: 'Lions return to zoo after Storm Eunice damage',
        image: dog,
        insight: 'Zero, Mo, Tor, Kaya and Jabu, went on a 10-week holiday to Whipsnade from Africa Live in Suffolk.'
      },
    ]
  },
  {
    id: 4,
    title: 'Food',
    image: food,
    alt: 'food',
    news: [
      {
        id: 0,
        title: 'Food',
        description: 'Lions return to zoo after Storm Eunice damage',
        image: lions,
        insight: 'Zero, Mo, Tor, Kaya and Jabu, went on a 10-week holiday to Whipsnade from Africa Live in Suffolk.'
      },
    ]
  },
]

export default news;