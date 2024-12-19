import "./portfolio.css";

import IMG1 from "../../assets/proj1.png";
import IMG2 from "../../assets/restaurant proj 2.png";
import IMG3 from "../../assets/portfolio proj3.png";
import IMG4 from "../../assets/amazon clone proj 4.png";
import IMG5 from "../../assets/proj 5.png";
import IMG6 from "../../assets/proj 6 .png";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Login - Signup Page",
      img: IMG1,
      description:
        "The login/signup page provides a secure and user-friendly gateway for users to access personalized features.",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://github.com/Sahilss19/login_signup_react",
      github: "https://github.com/Sahilss19/login_signup_react",
    },
    {
      id: 2,
      title: "Restaurant Menu Website",
      img: IMG4,
      description:
        "The restaurant menu website showcases the available dishes, allowing customers to explore and order meals easily",
      technologies: "HTML | CSS | JavaScript ",
      link: "https://github.com/Sahilss19/restaurant-menu-application?tab=readme-ov-file",
      github: "https://github.com/Sahilss19/restaurant-menu-application?tab=readme-ov-file",
    },
    {
      id: 3,
      title: "Portfolio",
      img: IMG2,
      description: "A personal portfolio website is an online platform to showcase an individual's skills, projects, and experiences.",
      technologies: "HTML | CSS | JavaScript",
      link: "https://github.com/Sahilss19/portfolio-using-scss",
      github: "https://github.com/Sahilss19/portfolio-using-scss",
    },
    {
      id: 4,
      title: "Amazon Clone ",
      img: IMG3,
      description:
        "An Amazon clone replicates key features like product browsing, cart management, and secure checkout for an e-commerce website.",
      technologies: "Html | CSS | JavaScript ",
      link: "https://github.com/Sahilss19/amazon-prj-6",
      github: "https://github.com/Sahilss19/amazon-prj-6",
    },
    {
      id: 5,
      title: "House Sales Dashboard",
      img: IMG5,
      description:
        "A house sales dashboard visualizes data related to property prices, location, size, and sales trends for informed decision-making in the real estate market.",
      technologies: "Excel | Tableua ",
      link: "https://github.com/Sahilss19/tableau_project",
      github: "https://github.com/Sahilss19/tableau_project",
    },
    {
      id: 6,
      title: "HealthCare Dashboard",
      img: IMG6,
      description:
        "Healthcare Analytics Dashboard This Tableau project uses Excel CSV data to visualize factors impacting patient survival",
      technologies: "Excel | Tableua",
      link: "https://github.com/Sahilss19/Health-Care-Tableua-Dashboard",
      github: "https://github.com/Sahilss19/Health-Care-Tableua-Dashboard",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
