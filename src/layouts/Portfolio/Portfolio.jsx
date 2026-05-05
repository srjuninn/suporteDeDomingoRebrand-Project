import { useState } from "react";
import "@layouts/Portfolio/Portfolio.scss";
import RightArrowImg from "@icons/RightArrowIcon.png";

const projects = [
  { description: "Projeto A", link: "https://a.com" },
  { description: "Projeto B", link: "https://b.com" },
  { description: "Projeto C", link: "https://c.com" },
  { description: "Projeto D", link: "https://d.com" },
];

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(Math.floor(projects.length / 2));

  const prev = () =>
    setActiveIndex((activeIndex - 1 + projects.length) % projects.length);

  const next = () =>
    setActiveIndex((activeIndex + 1) % projects.length);

  const leftIndex = (activeIndex - 1 + projects.length) % projects.length;
  const rightIndex = (activeIndex + 1) % projects.length;

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <p>{projects[activeIndex].description}</p>
      <a href={projects[activeIndex].link} target="_blank" rel="noreferrer">
        Ver projeto
      </a>

      <div className="carousel">
        <button onClick={prev} className="arrow left rotate">
          <img src={RightArrowImg} alt="setinha pra voltar um card" />
        </button>

        <div className="cards-wrapper">
          <div className="card left">{projects[leftIndex].description}</div>
          <div className="card active">{projects[activeIndex].description}</div>
          <div className="card right">{projects[rightIndex].description}</div>
        </div>

        <button onClick={next} className="arrow right">
          <img src={RightArrowImg} alt="setinha direita pra avançar um card" />
        </button>
      </div>
    </section>
  );
}
