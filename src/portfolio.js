/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Simon",
  title: "Hola, Soy Simón",
  subTitle: emoji(
    "💻 Desarrollador full stack apasionado 🚀 con experiencia en aplicaciones web y móviles usando JavaScript, React, Node.js y React Native, además de desarrollo backend con Java, Python y servicios en la nube con AWS."
  ),
  //resumeLink:
    //"https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/simon1820",
  linkedin: "https://www.linkedin.com/in/saguijarro/",
  gmail: "simonandresguijarromurrieta@gmail.com",
  hotmail: "https://outlook.live.com/mail/0/deeplink/compose?to=simon132000@hotmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@simonandresguijarromurrieta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Diseño y desarrollo de arquitecturas de microservicios, con experiencia en integración y optimización de sistemas en la nube."
    ),
    emoji("⚡ Refactorización y migración de aplicaciones hacia entornos modernos y escalables, aprovechando al máximo los servicios de AWS."),
    emoji(
      "⚡ Creación de aplicaciones web y móviles interactivas y funcionales."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
        {
      schoolName: "Instituto Superior Universitario Bolivariano de Tecnología",
      logo: require("./assets/images/itblogo.png"),
      subHeader: "Tecnologo en Desarrollo de Software",
      duration: "August 2020 - June 2024",
      desc: "Formación sólida en desarrollo de software con enfoque en arquitectura, bases de datos y tecnologías web modernas.",
      descBullets: [
        "Proyectos académicos en desarrollo web y móvil usando React, Node.js y SQL",
        "Cursos en sistemas operativos, seguridad informática y metodologías ágiles"
    ]
    },
    {
      schoolName: "Universidad Espirítu Santo",
      logo: require("./assets/images/UEES-repositorio1.png"),
      subHeader: "Estudiante en la Carrera de Ciencia de la Computación",
      duration: "September 2025 - Actualidad",
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
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Mostrar sección de experiencia
  experience: [
    {
      role: "Software Engineer",
      company: "Iroute (Entornos Financieros)",
      companylogo: require("./assets/images/iroute-logo.png"),
      date: "Noviembre 2024 - Presente",
      desc: "Desarrollo de soluciones tecnológicas para el sector bancario, con enfoque en microservicios y entornos en la nube.",
      descBullets: [
        "Implementación y refactorización de arquitecturas monolíticas a microservicios",
        "Integraciones con APIs REST y SOAP en entornos críticos de alta disponibilidad",
        "Uso intensivo de AWS (Lambda, S3, API Gateway, Glue, Step Functions) para procesos ETL y batch"
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
        "Aplicación de inteligencia artificial y cloud services en la solución propuesta"
      ]
    },
    {
      role: "Full Stack Developer (Freelance/Personal Projects)",
      company: "Proyectos Independientes",
      companylogo: require("./assets/images/desarrollador.png"),
      date: "2020 - Presente",
      desc: "Desarrollo de aplicaciones web y móviles para clientes independientes y proyectos personales.",
      descBullets: [
        "Creación de interfaces con React.js, Node.js y bases de datos SQL/NoSQL",
        "Diseño de APIs REST y despliegue en entornos Docker",
        "Integración de servicios en la nube como Firebase y AWS"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = []/*{
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};*/

// Achievement Section
// Include certificates, talks etc

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
      imageAlt: "Google Code-In Logo",
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
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Course of AWS",
          url: "https://www.udemy.com/course/aws-certified-developer-associate-dva/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = []/*{
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};*/

// Talks Sections

const talkSection = []/*{
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};*/

// Podcast Section

const podcastSection = []/*{
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};*/

// Resume Section
const resumeSection = []/*{
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};*/

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+593 986525812",
  email_address: "simon132000@hotmail.com"
};

// Twitter Section

const twitterDetails = []/*{
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};*/

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
