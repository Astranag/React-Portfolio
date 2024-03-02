import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";


import Work1 from './assets/14-object-oriented-programming-challenge-demo.png';
import Work2 from './assets/github.com_Astranag_Professional-README-Generator_tree_main_starter_READMEGen.png';
import Work3 from './assets/screencapture-astranag-github-io-FlavorFusion-index-html-2024-02-07-12_55_01.png';
import Work4 from './assets/Weather-Dashboard.png'
import Work5 from './assets/astranag.github.io_Daily-Planner-App_.png'
import Work6 from './assets/05-javascript-challenge-demo.png'

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
  },
  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Stivin James",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Mavelil",
  },

  {
    id: 3,
    title: "Age : ",
    description: "26 Years",
  },

  {
    id: 4,
    title: "GitHub : ",
    description: "https://github.com/Astranag/",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "London",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+447449817135",
  },

  {
    id: 8,
    title: "Email : ",
    description: "stivinmavelil@gmail.com",
  },

  {
    id: 9,
    title: "Skype : ",
    description: "Stivin Mavelil",
  },

  {
    id: 10,
    title: "Languages : ",
    description: "English, Italian, Malayalam",
  },
];

export const stats = [
  {
    id: 1,
    no: "5+",
    title: "Years of <br/> Experience",
  },

  {
    id: 2,
    no: "15+",
    title: "Completed <br/> Code Challanges",
  },

  {
    id: 3,
    no: "5+",
    title: "Happy <br/> Projects",
  },

  {
    id: 4,
    no: "5+",
    title: "Awards <br/> Accademic awards (certificates)",
  },
];

export const skills = [
  {
    id: 1,
    title: "HTML",
    percentage: "90",
  },
  {
    id: 2,
    title: "JAVASCRIPT",
    percentage: "90",
  },
  {
    id: 3,
    title: "CSS",
    percentage: "90",
  },
  {
    id: 4,
    title: "REACT",
    percentage: "90",
  },
  {
    id: 5,
    title: "R",
    percentage: "70",
  },
  {
    id: 6,
    title: "SASS",
    percentage: "70",
  },
  {
    id: 7,
    title: "SQL",
    percentage: "90",
  },
  {
    id: 8,
    title: "PYTHON",
    percentage: "70",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2022 - 2023",
    title: "Business Analyst Trainee <span> Brainnest - Remote, Germany </span>",
    desc: "Completed an intensive business analyst industry training program focused on research,  analytical skills, and business analysis techniques.  Collaborated with a diverse team to address real-world business challenges and develop strategic solutions. Applied critical thinking and data analysis to extract insights and support decision-making processes.",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2021 - 2022",
    title: "Operated video cameras during services and special ceremonies at the Vatican and related venues. Assisted with video production, providing creative solutions and video editing skills for commercials, non-broadcast video productions, and television/closed circuit programming. Communicated with and assisted Video Production Manager with shooting, editing, and departmental organization. ",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2017 - 2018",
    title: "Professional Shop Assistant <span> ESSO Station Service -  New Waltham, UK <span>",
    desc: "Arranged products on display shelves, processed payments, and maintained shop cleanliness. Received, unpacked, and arranged new shipments from suppliers and vendors. Assisted customers in finding products, addressed inquiries and complaints, and provide shopping advice and recommendations. Collaborated with team members to keep the sales floor area clean and organized",
  },

  
  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "March 2024 ",
    title: "edX Boot Camps - Skills Bootcamp in Front-End Web Development <span> edX </span>",
    desc: "Relevant Modules: application programming interfaces (APIs), HTML5, CSS3, JavaScript, jQuery, React.js, Nodes, Git, GitHub, and Netlify.",
  },
  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2022",
    title: "BSc Hons Business Analytics  <span> University of Southampton </span>",
    desc: "Relevant Modules: Management Analysis, Financial Accounting, SAS Base Programming, Principles & Practise of Management, Social Enterprise.",
  },

];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Team Profile Generator',
    details: [
      {
        icon: <FiFileText/>,
        title: 'Project : ',
        desc: 'Object-Oriented Programming: Team Profile Generator'
      },
      {
        icon: <FiUser/>,
        title: 'Client : ',
        desc: 'edX'
      },
      {
        icon: <FaCode/>,
        title: 'Language : ',
        desc: 'Nodejs, Inquirer, Jest, Markdown, JSON'
      },
      {
        icon: <FiExternalLink/>,
        title: 'Preview : ',
        desc: 'https://github.com/Astranag/Team-Profile-Generator'
      },
    ]
  },

  {
    id: 2,
    img: Work2,
    title: 'Professional README Generator',
    details: [
      {
        icon: <FiFileText/>,
        title: 'Project : ',
        desc: 'Working with ES6 & Node.js: Professional README Generator'
      },
      {
        icon: <FiUser/>,
        title: 'Client : ',
        desc: 'edX'
      },
      {
        icon: <FaCode/>,
        title: 'Language : ',
        desc: 'ES6, Markdown, Nodejs, JSON'
      },
      {
        icon: <FiExternalLink/>,
        title: 'Preview : ',
        desc: 'https://github.com/Astranag/Professional-README-Generator'
      },
    ]
  },

  {
    id: 3,
    img: Work3,
    title: 'FlavorFusion',
    details: [
      {
        icon: <FiFileText/>,
        title: 'Project : ',
        desc: 'Interactive Front-End Application'
      },
      {
        icon: <FiUser/>,
        title: 'Client : ',
        desc: 'edX'
      },
      {
        icon: <FaCode/>,
        title: 'Language : ',
        desc: 'Javascript, HTML, CSS, API'
      },
      {
        icon: <FiExternalLink/>,
        title: 'Preview : ',
        desc: 'https://github.com/Astranag/FlavorFusion'
      },
    ]
  },

  {
    id: 4,
    img: Work4,
    title: 'Weather-Dashboard',
    details: [
      {
        icon: <FiFileText/>,
        title: 'Project : ',
        desc: 'Server-Side APIs: Weather Dashboard'
      },
      {
        icon: <FiUser/>,
        title: 'Client : ',
        desc: 'edX'
      },
      {
        icon: <FaCode/>,
        title: 'Language : ',
        desc: 'Javascript, CSS, HTML, API'
      },
      {
        icon: <FiExternalLink/>,
        title: 'Preview : ',
        desc: 'https://github.com/Astranag/Weather-Dashboard'
      },
    ]
  },

  {
    id: 5,
    img: Work5,
    title: 'Daily Planner App',
    details: [
      {
        icon: <FiFileText/>,
        title: 'Project : ',
        desc: 'Third-Party APIs: Work Day Scheduler'
      },
      {
        icon: <FiUser/>,
        title: 'Client : ',
        desc: 'edX'
      },
      {
        icon: <FaCode/>,
        title: 'Language : ',
        desc: 'JavaScript, JQery, HTML, CSS'
      },
      {
        icon: <FiExternalLink/>,
        title: 'Preview : ',
        desc: 'https://github.com/Astranag/Daily-Planner-App'
      },
    ]
  },

  {
    id: 6,
    img: Work6,
    title: 'Password-Generator',
    details: [
      {
        icon: <FiFileText/>,
        title: 'Project : ',
        desc: 'Intermediate JavaScript: Password Generator'
      },
      {
        icon: <FiUser/>,
        title: 'Client : ',
        desc: 'edX'
      },
      {
        icon: <FaCode/>,
        title: 'Language : ',
        desc: 'JavaScript, HTML, CSS'
      },
      {
        icon: <FiExternalLink/>,
        title: 'Preview : ',
        desc: 'https://github.com/Astranag/Password-Generator'
      },
    ]
  }
]