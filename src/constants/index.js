import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";
import project7 from "../assets/projects/project-7.png";
import project9 from "../assets/projects/Project-9.png";
export const HERO_CONTENT = `I am a dedicated software engineer with extensive experience in full-stack development, specializing in designing efficient, scalable, and user-focused applications. Throughout my career, I have worked on enhancing system performance, building robust microservices architectures, and delivering seamless user experiences. I have strong proficiency in technologies such as Spring Boot, React, Docker, Kubernetes, and SQL, along with expertise in tools like Jenkins, Prometheus, Grafana, and Kafka. My ultimate goal is to grow as a versatile developer and contribute to impactful, innovative projects that address complex challenges.`;

export const edu_name = `University of Central Floriada`;
export const edu_location=`Oviedo,Fl`

export const edu_level=`Master's in Computer Science.`;

export const bach_name=`Kakatiya Institute of technology and Science`
export const bach_location=`Warangal,India`
export const bach_level=`Bachelors in Computer Science `

export const key_courses_masters=`Design and Analysis of Algorithms, Machine learning, Advanced Computer Architecture, Incident Responce Technologies, Malware and Software vulnerability, Software Engineering,Current Topics in Machine learning, Data Mining, Foundations of Computer Security and Privacy, Advanced Software Systems Security.`


export const key_courses_bachelors=`Web development, Machine learning, Data structures and algorithms, Advanced Data structures and algorithms, Operating System, Java, Spring ,Cyber Security, Cloud Computing, Object Oriented programming, Data Communication & Networks ,Data Mining & Applications, Big Data, Python`
export const EXPERIENCES = [
  {
    year: "June 2022 - June 2023",
    role: "Java Full Stack Developer",
    company: "Infosys",
    description: `Led the migration of the legacy vBuild application to a modern fiber management system, integrating services like budget calculation, activity management, and issue tracking using Spring Boot and React. Improved UI responsiveness with React and jQuery, reducing user-reported issues by 40%. Optimized SQL queries, increasing data processing speed by 20%, and automated deployments with Jenkins, Docker, and Kubernetes, cutting release time and errors by 40%. Designed a scalable microservices architecture, boosting team productivity by 15% through enhanced features like "holdme creation" and improved issue tracking.`,
    technologies: ["SpringBoot", "React.js", "jQuery", "mongoDB", "SQL", "Jenkins", "Docker", "Microservices","Spring data JPA","Hibernate"],
  },
  {
    year: " Jan 2022 – May 2022",
    role: "Java Full stack Developer",
    company: "Epam Systems",
    description: `I developed a Vaccine Management System web application and REST API using Spring Boot, optimizing vaccine dose booking and management processes. To ensure data protection and industry compliance, I secured endpoints with Spring Security and improved database operations with Spring Data JPA and Hibernate, boosting query performance by 25%. By achieving 90% code coverage through unit testing with JUnit and Mockito, I enhanced system reliability. Additionally, I spearheaded the creation of a user-friendly interface using React and Bootstrap, resulting in a 35% increase in user engagement, as measured by time spent on key product pages.`,
    technologies: ["Spring Boot", "Spring data JPA", "Hibernate", "Junit","Mockito","JSP"],
  },

  {
    year: " Jan 2025 – Present",
    role: "Graduate Teaching Assistant",
    company: "University of Central Florida",
    description: `As an Teaching Assistant for a Database Application Development course, students were trained to analyze problems and define computing requirements to develop effective database-driven solutions. They gained hands-on experience in designing, implementing, and evaluating systems using best practices in software development. The course covered foundational topics such as Entity-Relationship and Relational Models, Relational Algebra, and SQL, with a focus on file organization, indexing, query optimization, and schema refinement. Additionally, students worked with technologies like Java and React to build dynamic, interactive web applications. The course also emphasized teamwork, programming fundamentals, and the ability to use multiple programming languages to meet real-world project requirements.`,
    technologies: ["Databases","Mysql","Java","React"],
  }
];

export const PROJECTS = [
  {
    title: "SmartOrder: Microservices-based E-Commerce System",
    image: project9,
    description:
      "A microservices-based architecture was designed and implemented for product, order, inventory, and notification services using Spring Boot, React, MongoDB, and MySQL. Kafka was integrated for event-driven messaging, improving order processing by 25%. API Gateway and Keycloak were used for centralized routing and security, while observability tools like Grafana, Prometheus, Loki, and Tempo optimized performance and reduced debugging time by 30%. Docker and Kubernetes were employed for containerization, streamlining deployment and enhancing scalability.",
    technologies: ["Spring Boot", "React", "MongoDB", "MySQL", "Kafka", "API Gateway", "Keycloak", "Grafana", "Prometheus", "Loki", "Tempo", "Docker", "Kubernetes"],
  },
  {
    title: "Employee Management System",
    image: project7,
    description:
      "RESTful APIs for employee and department management were developed using Spring Boot 3+ and Spring Data JPA with Hibernate. The frontend was built with React 18+, React Hooks, and Bootstrap, improving user experience by 30%. Axios optimized client-server communication, and Maven and Node.js/NPM were used for project management and dependencies. The system provides an intuitive interface for managing employee records, department assignments, and related data. It ensures smooth and secure data flow through API validation, reducing errors and enhancing overall system efficiency.",
    technologies: ["Spring Boot 3+", "Spring Data JPA", "Hibernate", "React 18+", "React Hooks", "React Router", "Bootstrap", "Axios", "Postman", "Maven", "Node.js/NPM"],
  },
  {
    title: "Advice Chatbot",
    image: project5,
    description:
      "Developed a chatbot using Spring Boot, React, and OpenAPI that delivers personalized advice based on users' emotional states such as sadness, happiness, anger, and boredom. The application allows users to customize their interactions based on various personal attributes such as country, gender, and religion. The chatbot offers relevant, context-aware responses along with citations from trusted sources to back up the advice. It is designed to handle deeper levels of questioning, providing more tailored responses to users seeking more detailed guidance. The integration of OpenAPI enables dynamic data fetching and real-time access to a wide range of information, enhancing the chatbot’s capability to provide more insightful and accurate advice.",
    technologies: ["Springboot","Spring Data JPA", "CSS", "React", "Bootstrap","Axios", "Postman", "Maven"],
  },
  {
    title: "Task Management System",
    image: project4,
    description:
      "Developed a comprehensive Task Management System (TMS) with user and admin roles using Spring Boot and React. The system allows both users and admins to log in, with admins having the ability to view all tasks, search, and delete tasks. Admins can also add new users, sending them a notification email with a link to reset their password. Admins can view detailed user profiles and their associated tasks. Users can log in to edit their profile, create and manage tasks, and log out. The system includes a contact form on the homepage that allows users to send messages directly to the TMS admin. The messages are then sent to the admin's email address for review and action.",
    technologies: ["Springboot","Spring Data JPA", "CSS", "React", "Bootstrap","Axios", "Postman", "Maven","mysql"],
  },
  {
    title: "Tic Tac Toe Application",
    image: project6,
    description:
      "Developed a Tic Tac Toe gaming application using Spring Boot for the backend and React for the frontend. The application allows users to play the classic game in a dynamic and interactive environment, with real-time updates and a responsive user interface. The system provides functionalities such as user authentication, game state tracking, and turn-based gameplay, ensuring a smooth and engaging experience for players.",
    technologies: ["Springboot","Spring Data JPA", "CSS", "React", "Bootstrap","Axios", "Postman", "Maven","mysql"],
  },
  
];

export const CONTACT = {
  address: "4254 Spoleto Cir Oviedo,Florida ",
  phoneNo: "+1 386 456 8167 ",
  email: "pinkysreeja321@gmail.com",
};
