/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // custom lottie

// Splash Screen
const splashScreen = {
  enabled: false,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Simon",
  title: "Hola, Soy Simón",
  subTitle: emoji(
    "💻 Desarrollador full stack apasionado 🚀 con experiencia en aplicaciones web y móviles usando JavaScript, React, Node.js y React Native, además de desarrollo backend con Java, Python y servicios en la nube con AWS."
  ),
  // resumeLink: "https://drive.google.com/...", // Set to empty to hide the button
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/simon1820",
  linkedin: "https://www.linkedin.com/in/saguijarro/",
  gmail: "simonandresguijarromurrieta@gmail.com",
  hotmail:
    "https://outlook.live.com/mail/0/deeplink/compose?to=simon132000@hotmail.com",
  medium: "https://medium.com/@simonandresguijarromurrieta",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Diseño y desarrollo de arquitecturas de microservicios, con experiencia en integración y optimización de sistemas en la nube."
    ),
    emoji(
      "⚡ Refactorización y migración de aplicaciones hacia entornos modernos y escalables, aprovechando al máximo los servicios de AWS."
    ),
    emoji(
      "⚡ Creación de aplicaciones web y móviles interactivas y funcionales."
    )
  ],
  /* Make Sure to include correct Font Awesome Classname to view your icon
  https://fontawesome.com/icons?d=gallery */
  softwareSkills: [
    {skillName: "html-5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "css3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "sass", fontAwesomeClassname: "fab fa-sass"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "reactjs", fontAwesomeClassname: "fab fa-react"},
    {skillName: "nodejs", fontAwesomeClassname: "fab fa-node"},
    {skillName: "swift", fontAwesomeClassname: "fab fa-swift"},
    {skillName: "npm", fontAwesomeClassname: "fab fa-npm"},
    {skillName: "sql-database", fontAwesomeClassname: "fas fa-database"},
    {skillName: "aws", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "firebase", fontAwesomeClassname: "fas fa-fire"},
    {skillName: "python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "docker", fontAwesomeClassname: "fab fa-docker"}
  ],
  display: true
};

// Education Section
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Instituto Superior Universitario Bolivariano de Tecnología",
      logo: require("./assets/images/itblogo.png"),
      subHeader: "Tecnólogo en Desarrollo de Software",
      duration: "August 2020 - June 2024",
      desc: "Formación sólida en desarrollo de software con enfoque en arquitectura, bases de datos y tecnologías web modernas.",
      descBullets: [
        "Proyectos académicos en desarrollo web y móvil usando React, Node.js y SQL",
        "Cursos en sistemas operativos, seguridad informática y metodologías ágiles"
      ]
    },
    {
      schoolName: "Universidad Espíritu Santo",
      logo: require("./assets/images/UEES-repositorio1.png"),
      subHeader: "Estudiante en la Carrera de Ciencia de la Computación",
      duration: "Septiembre 2025 - Actualidad",
      desc: "Formación enfocada en el desarrollo de software, arquitecturas modernas y soluciones en la nube.",
      descBullets: [
        "Proyectos académicos en desarrollo de microservicios y aplicaciones distribuidas",
        "Experiencia práctica con AWS y bases de datos SQL/NoSQL",
        "Participación en equipos multidisciplinarios de desarrollo de software"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience
const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Frontend/Design", progressPercentage: "90%"},
    {Stack: "Backend", progressPercentage: "90%"},
    {Stack: "Programming", progressPercentage: "75%"}
  ],
  displayCodersrank: false
};

// Work experience section
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "Iroute (Entornos Financieros)",
      companylogo: require("./assets/images/iroute-logo.png"),
      date: "Noviembre 2024 - Presente",
      desc: "Desarrollo de soluciones tecnológicas, con enfoque en microservicios y entornos en la nube.",
      descBullets: [
        "Implementación y refactorización de arquitecturas monolíticas a microservicios",
        "Integraciones con APIs REST y SOAP en entornos críticos de alta disponibilidad",
        "Uso de AWS (Lambda, S3, API Gateway, Glue, Step Functions) para procesos ETL y batch"
      ]
    },
    {
      role: "Hackathon Participant",
      company: "Tech Week Ecuador",
      companylogo: require("./assets/images/tech-logo.png"),
      date: "Julio 2025",
      desc: "Participación en evento nacional de innovación y tecnología, desarrollando soluciones en equipo bajo presión de tiempo.",
      descBullets: [
        "Diseño de un prototipo funcional en menos de 48 horas",
        "Aplicación de IA y servicios cloud en la solución propuesta"
      ]
    },
    {
      role: "Full Stack Developer (Freelance/Personal Projects)",
      company: "Proyectos Independientes",
      companylogo: require("./assets/images/desarrollador.png"),
      date: "2020 - Presente",
      desc: "Desarrollo de aplicaciones web y móviles para clientes independientes y proyectos personales.",
      descBullets: [
        "Interfaces con React.js, Node.js y bases de datos SQL/NoSQL",
        "Diseño de APIs REST y despliegue con Docker",
        "Integración con servicios en la nube como Firebase y AWS"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */
const openSource = {
  showGithubProfile: "true", // keep as string to match template expectation
  display: true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [],
  display: false
};

// Achievement Section (certifications, etc.)
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: ".NET Code Camp",
      subtitle:
        "Programa intensivo orientado a proyectos con C# y .NET (ASP.NET Core, Entity Framework y SQL Server), construcción de APIs REST, pruebas unitarias y despliegue con Git/Docker.",
      image: require("./assets/images/Udemy-Logo.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1Aqp8C0Qu-6VidXlTaJMmZe2eEzx9hb16/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Certificación de Developer de Amazon Web Services (DVA-C02)",
      subtitle:
        "Preparación para AWS Developer – Associate enfocada en diseñar, desarrollar y depurar aplicaciones en AWS usando Lambda, API Gateway, DynamoDB, S3, SQS/SNS y monitoreo con CloudWatch, además de CI/CD con CodePipeline.",
      image: require("./assets/images/Udemy-Logo.png"),
      imageAlt: "Udemy Logo",
      footerLink: [
        {
          name: "View Course of AWS",
          url: "https://www.udemy.com/course/aws-certified-developer-associate-dva/"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true",
  blogs: [],
  display: false
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),
  talks: [],
  display: false
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: false
};

// Contact Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+593 986525812",
  email_address: "simon132000@hotmail.com"
};

// Twitter Section (disabled to evitar loader)
const twitterDetails = {
  userName: "twitter", // Replace with your username without @ if you enable it
  display: false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
