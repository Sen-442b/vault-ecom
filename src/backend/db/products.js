import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "The Beginner's Guide to React",
    teacher: "Kent C Dodds",
    price: 3000,
    prevPrice: 6000,
    categoryName: "Development",
    rating: 5,
    image:
      "https://res.cloudinary.com/kentcdodds-com/image/upload/w_1517,q_auto,f_auto,b_rgb:e6e9ee/kent/kody-on-shoulders",

    isUpcoming: false,
  },
  {
    _id: uuid(),
    title: "Flutter Firebase  Course",
    teacher: "Jeff Delaney",
    price: 5000,
    prevPrice: 8000,
    categoryName: "Development",
    rating: 4,
    image: "https://fireship.io/courses/flutter-firebase/img/featured.jpg",
    isUpcoming: false,
  },
  {
    _id: uuid(),
    title: "Introduction to Psychology",
    teacher: "Steve Joordens",
    price: 1000,
    prevPrice: 5000,

    categoryName: "Personal Growth",
    rating: 3,
    image:
      "https://leverageedu.com/blog/wp-content/uploads/2020/04/Media-Psychology.jpg",
    isUpcoming: false,
  },
  {
    _id: uuid(),
    title: "Art of Biography writing",
    teacher: "Walter Issacson",
    price: 7000,
    prevPrice: 13000,
    categoryName: "Writing",
    rating: 3,
    image:
      "https://i0.wp.com/tim.blog/wp-content/uploads/2021/03/Walter-Isaacson-Illustration--scaled.jpg?fit=1200%2C960&ssl=1",
    isUpcoming: true,
  },
  {
    _id: uuid(),
    title: "Basics of Story Writing",
    teacher: "Andrew Ryan",
    price: 7000,
    prevPrice: 12000,
    categoryName: "Writing",
    rating: 1,
    image:
      "https://kathakids.com/static/story-images/2020/10/Four_Friends_01-1160x870.jpg",
    isUpcoming: false,
  },
  {
    _id: uuid(),
    title: "Singing without melody",
    teacher: "Prateek Kuhad",
    price: 9000,
    prevPrice: 12000,
    categoryName: "Music",
    rating: 4,
    image:
      "https://imgmedia.lbb.in/media/2021/02/6020ef332d352b3464a48243_1612771123028.png",
    isUpcoming: false,
  },
  {
    _id: uuid(),
    title: "Essence of Scriptwriting",
    teacher: "Varun Grover",
    price: 8000,
    prevPrice: 10000,
    categoryName: "Writing",
    rating: 3,
    image:
      "https://image.scoopwhoop.com/w1200-h667-cfix/https://s4.scoopwhoop.com/anj/sw/3f888f9a-da26-4469-be35-63f8d3aa4274.jpg",
    isUpcoming: false,
  },
  {
    _id: uuid(),
    title: "Money Management 101",
    teacher: "Ankur Warikoo",
    price: 4000,
    prevPrice: 5000,

    categoryName: "Personal Growth",
    rating: 3,
    image:
      "https://cdn.harappa.education/wp-content/uploads/2021/07/04123928/Ankur-Warikoo.jpg",
    isUpcoming: false,
  },
  {
    _id: uuid(),
    title: "Ways to Get Better at Music Composition",
    teacher: "Ritviz Srivastava",
    price: 8000,
    prevPrice: 12000,
    categoryName: "Music",
    rating: 4,
    image: "https://www.groovenexus.com/wp-content/uploads/2021/10/ritviz.jpg",
    isUpcoming: false,
  },
];
