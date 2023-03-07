import { nanoid } from "nanoid";
import p1 from './assets/p1.jpg'
import p2 from './assets/p2.jpg'
import p3 from './assets/p3.jpg'
import p4 from './assets/p4.jpg'
import p5 from './assets/p5.jpg'

export const data = [{
  id:nanoid(),
  title: 'Movie A',
  rating: 4.6,
  author: 'ABC',
  release_date: '6th January, 2022',
  link: 'https://www.youtube.com/watch?v=6QbHoQzmLdc',
  genre: 'A Genre',
  plot: 'A Plot',
  image: p1
},
{
  id:nanoid(),
  title: 'Movie B',
  rating: 3.6,
  author: 'C1',
  release_date: '7th June, 2002',
  link: 'https://www.youtube.com/watch?v=6WWx-l6vWE4',
  genre: 'B Genre',
  plot: 'B Plot',
  image: p2
},
{
  id:nanoid(),
  title: 'Movie C',
  rating: 4.3,
  author: 'ALK',
  release_date: '21th May, 2021',
  link: 'https://www.youtube.com/watch?v=xc4e8PWqWm8',
  genre: 'C Genre',
  plot: 'C Plot',
  image: p3
},
{
  id:nanoid(),
  title: 'Movie D',
  rating: 3.6,
  author: 'ABo',
  release_date: '6th April, 2013',
  link: 'https://www.youtube.com/watch?v=IAdCsNtEuBU',
  genre: 'D Genre',
  plot: 'D Plot',
  image: p4
},
{
  id:nanoid(),
  title: 'Movie E',
  rating: 2.8,
  author: 'AUT',
  release_date: '12th March, 2020',
  link: 'https://www.youtube.com/watch?v=zKk1dY4XWtY',
  genre: 'E Genre',
  plot: 'E Plot',
  image: p5
}]