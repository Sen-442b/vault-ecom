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
    image: "https://picsum.photos/200/300/?blur=2",
  },
  {
    _id: uuid(),
    title: "Flutter Firebase  Course",
    teacher: "Jeff Delaney",
    price: 5000,
    prevPrice: 8000,
    categoryName: "Development",
    rating: 4,
    image: "https://picsum.photos/200/300/?blur=2",
  },
  {
    _id: uuid(),
    title: "Introduction to Psychology",
    teacher: "Steve Joordens",
    price: 4000,
    prevPrice: 5000,

    categoryName: "Personal Growth",
    rating: 3,
    image: "https://picsum.photos/200/300/?blur=2",
  },
  {
    _id: uuid(),
    title: "Art of Biography writing",
    teacher: "Walter Issacson",
    price: 7000,
    prevPrice: 13000,
    categoryName: "Writing",
    rating: 3,
    image: "https://picsum.photos/200/300/?blur=2",
  },
  {
    _id: uuid(),
    title: "Lorem Ipsum",
    teacher: "Talot ipusm",
    price: 7000,
    prevPrice: 12000,
    categoryName: "Writing",
    rating: 1,
    image: "https://picsum.photos/200/300/?blur=2",
  },
  {
    _id: uuid(),
    title: "Singing without melody",
    teacher: "Prateek Kuhad",
    price: 7000,
    prevPrice: 12000,
    categoryName: "Music",
    rating: 3,
    image: "https://picsum.photos/200/300/?blur=2",
  },
];
