export const projectData = [
  {
    id: 1,
    title: "Wanderlust",
    technologies: [
      "FastAPI",
      "Docker",
      "Javascript",
      "React",
      "Python",
      "PostgreSQL",
      "BootstrapCSS",
      "MantineUI",
      "Caprover",
    ],
    link: "https://github.com/traceychung/wanderlust",
    description:
      "Say goodbye to the stress of planning your next adventure and hello to Wanderlust, the ultimate travel companion that takes care of all your itinerary needs!",
    responsibilities: [
      "Developed and maintained a full-stack travel app using FastAPI as the back-end framework, PostgreSQL as the database, Python as the primary programming language, and JavaScript and React for the front-end",
      "Implemented efficient RESTful APIs allowing for smooth communication between the front-end and back-end",
      "Built a dynamic and interactive user interface using JavaScript and React that allows users to view trip details as well as add flight and accommodation info, activities, and checklists to a specific trip",
      "Used Git for version control and collaborated with cross-functional teams to ensure timely delivery of features and bug fixes",
      "Worked in an agile environment, utilizing Scrum methodology and participating in daily stand-ups, sprint planning, retrospectives, and backlog grooming sessions",
    ],
    image: "/images/wanderlust.png",
  },
  {
    id: 2,
    title: "CarCar",
    technologies: [
      "Django",
      "Docker",
      "Javascript",
      "React",
      "Python",
      "BootstrapCSS",
    ],
    link: "https://github.com/traceychung/carcar",
    description:
      "Effortlessly manage every aspect of your car dealership, from tracking  inventory and sales to scheduling servicing appointments and maintaining detailed service histories.",
    responsibilities: [
      "Built a full-stack app to visualize automobile inventory, add employees, and manage appointments for the auto servicing side of the business using Python, Javascript, Django, HTML, and CSS",
      "Implemented RESTful APIs and pollers to allow dealership and appointment information to be served to user endpoints in Django while preserving data integrity through anti-corruption layers",
      "Utilized React and Bootstrap CSS to develop a responsive frontend complete with dynamic searching and filtering, custom forms, and conditional rendering",
      "Employed Django’s authentication system making use of authentication, authorization, and forms to ensure a secure signup/sign-in process",
      "Dockerized microservices in containers to easily manage dependencies and environment configuration",
    ],
    image: "/images/carconnect.png",
  },
  {
    id: 3,
    title: "ConferenceGo",
    technologies: [
      "Django",
      "Docker",
      "Javascript",
      "React",
      "Python",
      "BootstrapCSS",
      "SQLite",
    ],
    link: "https://github.com/traceychung/conference_go",
    description:
      "Elevate your conference management with our comprehensive application. Seamlessly track attendees, manage venues, and coordinate presentations, all in one intuitive platform.",
    responsibilities: [
      "Enhanced user experience by seamlessly integrating Pexels and WeatherMap APIs, dynamically generating real-time weather data and images tailored to each conference's location",
      "Developed an intuitive front-end UI using React, complete with pub/sub emailing lists and efficient queues enabling streamlined data sharing across microservices",
      "Empowered seamless and reliable communication systems through the implementation of Pika, Rabbit MQ, and MailHog pub/sub emailing lists, ensuring efficient and effective information exchange",
    ],
    image: "/images/summitsavvy.png",
  },
];
