import UangmuImg from '../assets/Uangmu_Project.png';
import EarthcareImg from '../assets/Earthcare_Project.png';
import UsedupImg from '../assets/Usedup_Project.png';
import LandingPageKadulimusImg from '../assets/LandingPageKadulimus_Project.png';
import TodoListImg from '../assets/TodoList_Project.png';
import BMIImg from '../assets/BMI_Project.png';
import KamiSehatImg from '../assets/KamiSehat_Project.png';
import PokemonImg from '../assets/Pokemon-api.png';
import PortofolioMe from '../assets/Portofolio-me.png';
import NewsNight from "../assets/News-night.png";

// Unique ID
import { v4 as uuidv4 } from 'uuid';

const apiPortfolio = [
     {
          id: uuidv4(),
          title: 'Pokemon API',
          stack: 'Vue js, Pinia, Vue Router, Tailwind CSS, Typescript, Rest API',
          image: PokemonImg,
          url: 'https://karakter-poke.vercel.app/'
     },
     {
          id: uuidv4(),
          title: 'Portofolio Website',
          stack: 'React js, Tailwind CSS, Daisy UI, React Router, React Icons',
          image: PortofolioMe,
          url: 'https://nabilanugerahpangestu.my.id/'
     },
     {
          id: uuidv4(),
          title: 'News Night',
          stack: 'React js, Typescript, Context, Tailwind css, Axios, Fetch API',
          image: NewsNight,
          url: 'https://github.com/Anugerah20/Typescript-API'
     },
     {
          id: uuidv4(),
          title: 'Uangmu',
          stack: 'React js, Node js, Prisma ORM, PostgreSQL, Express js, Tailwind css, React Flowbite, Cloudinary, React Chart js, Email js',
          image: UangmuImg,
          url: 'https://uang-mu.vercel.app/'
     },
     {
          id: uuidv4(),
          title: 'Earthcare',
          stack: 'React js, Bootstrap, MockAPI, React Context, REST API, Email JS, Axios',
          image: EarthcareImg,
          url: 'https://earthcare.netlify.app/'
     },
     {
          id: uuidv4(),
          title: 'Usedup',
          stack: 'React js, Node js, Prisma ORM, PostgreSQL, Express js, Tailwind css, React Flowbite, Cloudinary, Midtrans, Email js, Redux Toolkit, Oauth2 Google',
          image: UsedupImg,
          url: 'https://github.com/Anugerah20/Frontend-usedup'
     },
     {
          id: uuidv4(),
          title: 'Landing Page Kadulimus',
          stack: 'React js, React Flowbite, REST API, Tailwind css, Axios, React organizational chart',
          image: LandingPageKadulimusImg,
          url: 'https://desa-kadulimus.netlify.app/'

     },
     {
          id: uuidv4(),
          title: 'Todo List',
          stack: 'React js, Tailwind css, Redux, React Toastify',
          image: TodoListImg,
          url: 'https://nabil-todolist.netlify.app/'
     },
     {
          id: uuidv4(),
          title: 'BMI Calculator',
          stack: 'HTML5, CSS3, JavaScript, Toastify js',
          image: BMIImg,
          url: 'https://tpa2-nabil-bmi-calculator.netlify.app/'
     },
     {
          id: uuidv4(),
          title: 'Kami Sehat',
          stack: 'HTML5, Tailwind CSS, JavaScript',
          image: KamiSehatImg,
          url: 'https://kamisehat.netlify.app/'
     }
];

export default apiPortfolio;
