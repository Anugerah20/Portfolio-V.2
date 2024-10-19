import UangmuImg from '../assets/Uangmu_Project.png';
import EarthcareImg from '../assets/Earthcare_Project.png';
import UsedupImg from '../assets/Usedup_Project.png';
import LandingPageKadulimusImg from '../assets/LandingPageKadulimus_Project.png';
import TodoListImg from '../assets/TodoList_Project.png';
import BMIImg from '../assets/BMI_Project.png';

const apiPortfolio = [
     {
          id: Math.random(),
          title: 'Uangmu',
          stack: 'React js, Node js, Prisma ORM, PostgreSQL, Express js, Tailwind css, React Flowbite, Cloudinary, React Chart js, Email js',
          image: './src/assets/Uangmu_Project.png',
          url: UangmuImg
     },
     {
          id: Math.random(),
          title: 'Earthcare',
          stack: 'React js, Bootstrap, MockAPI, React Context, REST API, Email JS, Axios',
          image: './src/assets/Earthcare_Project.png',
          url: EarthcareImg
     },
     {
          id: Math.random(),
          title: 'Usedup',
          stack: 'React js, Node js, Prisma ORM, PostgreSQL, Express js, Tailwind css, React Flowbite, Cloudinary, Midtrans, Email js, Redux Toolkit, Oauth2 Google',
          image: UsedupImg,
          url: 'https://github.com/Anugerah20/Frontend-usedup'
     },
     {
          id: Math.random(),
          title: 'Landing Page Kadulimus',
          stack: 'React js, React Flowbite, REST API, Tailwind css, Axios, React organizational chart',
          image: LandingPageKadulimusImg,
          url: 'https://desa-kadulimus.netlify.app/'

     },
     {
          id: Math.random(),
          title: 'Todo List',
          stack: 'React js, Tailwind css, Redux, React Toastify',
          image: TodoListImg,
          url: 'https://nabil-todolist.netlify.app/'
     },
     {
          id: Math.random(),
          title: 'BMI Calculator',
          stack: 'HTML5, CSS3, JavaScript, Toastify js',
          image: BMIImg,
          url: 'https://tpa2-nabil-bmi-calculator.netlify.app/'
     }
];

export default apiPortfolio;
